import { makeAutoObservable, runInAction } from "mobx";

class UserFormStore {
    lastName: string = "";
    firstName: string = "";
    selectedRole: string = "";
    email: string = "";
    isSubmitted: boolean = false;
    error: string | null = null;
    loading: boolean = false;
    responseMessage: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.loadEmailFromLocalStorage();
    }

    setLastName(lastName: string) {
        this.lastName = lastName.trim();
    }

    setFirstName(firstName: string) {
        this.firstName = firstName.trim();
    }

    setSelectedRole(selectedRole: string) {
        this.selectedRole = selectedRole;
    }

    loadEmailFromLocalStorage() {
        const email = localStorage.getItem("email");
        if (email) {
            this.email = email;
        }
    }

    async submitForm() {
        const candidate = {
            last_name: this.lastName,
            first_name: this.firstName,
            email: this.email,
            role: this.selectedRole,
        };

        try {
            if( this.lastName === "" || this.firstName === "" || this.selectedRole === "") {
                alert ("Заполните все поля")

            }
            else{
                this.loading = true; 
                const response = await fetch("http://193.19.100.32:7000/api/sign-up", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(candidate)
                });
                
                
                if (!response.ok) {
                    
                    throw new Error("Failed to submit");
                }

                const data = await response.json();
                
                runInAction(() => {
                    this.loading = false;
                    this.isSubmitted = true;
                    this.responseMessage = data;
                    console.log(this.responseMessage, "a");
                    
                });
            }
        } catch (error) {
            runInAction(() => {
                this.error = (error as Error).message;
                this.responseMessage = null;

            });
        }
    }
}

const userFormStore = new UserFormStore();
export default userFormStore;
