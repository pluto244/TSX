import { makeAutoObservable, runInAction } from "mobx";

class UserFormStore {
  lastName: string = "";
  firstName: string = "";
  selectedRole: string = "";
  email: string = "";
  isSubmitted: boolean = false;
  error: string | null = null;
  responseMessage: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadEmailFromLocalStorage();
  }

  setLastName(value: string) {
    this.lastName = value;
  }

  setFirstName(value: string) {
    this.firstName = value;
  }

  setSelectedRole(value: string) {
    this.selectedRole = value;
  }

  loadEmailFromLocalStorage() {
    const email = localStorage.getItem("email");
    if (email) {
      this.email = email;
    }
  }

  async submitForm() {
    const candidate = {
      lastName: this.lastName,
      firstName: this.firstName,
      role: this.selectedRole,
      email: this.email
    };

    try {
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
        this.isSubmitted = true;
        this.responseMessage = data.message;  
      });
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
