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
        this.email = email.trim();
        this.showError = false;
    }

    saveToLocalStorage() {
        if (this.isEmailValid) {
            localStorage.setItem("email", this.email);
            this.isEditing = false;
            this.showError = false;
        } else {
            this.showError = true;
        }
    }

    loadFromLocalStorage() {
        const email = localStorage.getItem("email");
        if (email) {
            this.email = email;
            this.isEditing = false;
        }
    }

    toggleEditing() {
        this.isEditing = !this.isEditing;
    }

    get isEmailValid(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }

    getEmail() {
        return this.email;
    }
}

const emailStore = new EmailStore();
export default emailStore;
