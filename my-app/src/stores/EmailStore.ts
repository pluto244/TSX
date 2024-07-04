import { makeAutoObservable } from "mobx";

class EmailStore {
    email: string = "";
    isEditing: boolean = true;
    showError: boolean = false;

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage();
    }

    setEmail(email: string) {
        this.email = email.trim();;
        this.showError = false;
    }

    saveToLocalStorage() {
        if (this.isEmailValid) {
            try {
                localStorage.setItem("email", this.email);
                this.isEditing = false;
                this.showError = false;
            } catch (error) {
                console.error("Failed to save to localStorage", error);
            }
        } else {
            this.showError = true;
        }
    }

    loadFromLocalStorage() {
        try {
            const email = localStorage.getItem("email");
            if (email) {
                this.email = email;
                this.isEditing = false;
            }
        } catch (error) {
            console.error("Failed to load from localStorage", error);
        }
    }

    toggleEditing() {
        this.isEditing = !this.isEditing;
    }

    get isEmailValid(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
}

const emailStore = new EmailStore();
export default emailStore;
