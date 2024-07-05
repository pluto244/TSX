import { makeAutoObservable, runInAction } from "mobx";
import emailStore from "./EmailStore";

class UserFormStore {
    lastName: string = "";
    firstName: string = "";
    selectedRole: string = "";
    isSubmitted: boolean = false;
    error: string | null = null;
    loading: boolean = false;
    responseMessage: string | null = null;
    errors: { lastName?: string; firstName?: string; selectedRole?: string } = {};

    constructor() {
        makeAutoObservable(this);
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


    validateForm(): boolean {
        this.errors = {};

        if (this.lastName === "") {
            this.errors.lastName = "Заполните фамилию";
        }

        if (this.firstName === "") {
            this.errors.firstName = "Заполните имя";
        }

        if (this.selectedRole === "") {
            this.errors.selectedRole = "Выберите роль";
        }

        return Object.keys(this.errors).length === 0;
    }

    async submitForm() {
        const candidate = {
            last_name: this.lastName,
            first_name: this.firstName,
            email: emailStore.getEmail(),
            role: this.selectedRole,
        };

        try {
            this.loading = true;
            const response = await fetch("http://193.19.100.32:7000/api/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(candidate),
            });

            if (!response.ok) {
                throw new Error("Попробуйте еще раз чуть позже");
            }

            const data = await response.json();
            runInAction(() => {
                this.loading = false;
                this.isSubmitted = true;
                this.responseMessage = data;
            });
        } catch (error) {
            runInAction(() => {
                this.error = (error as Error).message;
                this.responseMessage = null;
                this.loading = false;
            });
        }
    }
}

const userFormStore = new UserFormStore();
export default userFormStore;
