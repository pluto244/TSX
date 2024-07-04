import { makeAutoObservable, runInAction } from "mobx";
import userFormStore from "./UserFormStore";

class CodeTokenStore {
    email: string = "";
    getTokenLoading: boolean = false;
    getTokenLoaded: boolean = false;
    coin: string = "";
    setStatusLoading: boolean = false;
    setStatusLoaded: boolean = false;
    statusRequest: string = "";

    constructor() {
        makeAutoObservable(this);
        this.loadEmailFromLocalStorage();
    }

    loadEmailFromLocalStorage() {
        const email = localStorage.getItem("email");
        if (email) {
            this.email = email;
        }
    }
    get maskedCoin() {
        if (this.coin.length > 20) {
            return "********************" + this.coin.slice(20);
        }
        return this.coin;
    }

    get maskedToken() {
        if (this.coin.length > 20) {
            return "********************" + this.EncodeToBase64("", this.coin).slice(40);
        }
        return this.coin;
    }

    async getToken() {
        try {
            if (!userFormStore.isSubmitted) {
                alert("Выполните предыдущие запросы");
                return;
            }

            this.getTokenLoading = true;
            const response = await fetch(`http://193.19.100.32:7000/api/get-code?email=${encodeURIComponent(this.email)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            const data = await response.json();

            runInAction(() => {
                this.getTokenLoading = false;
                this.getTokenLoaded = true;
                this.coin = data;
            });
        } catch (error) {
            runInAction(() => {
                this.getTokenLoading = false;
                this.getTokenLoaded = false;
                console.error("Error submitting form:", error);
            });
        }
    }



    EncodeToBase64(email: string, code: string) {
        return btoa(`${email}:${code}`);
    }

    async setStatus() {
        const requestBody = {
            token: this.EncodeToBase64(this.email, this.coin),
            status: "increased"
        };

        try {
            if (!userFormStore.isSubmitted) {
                alert("Выполните предыдущие запросы");
                return;
            }

            this.setStatusLoading = true;
            const response = await fetch(`http://193.19.100.32:7000/api/set-status`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            const data = await response.json();

            runInAction(() => {
                this.setStatusLoading = false;
                this.setStatusLoaded = true;
                this.statusRequest = data;
            });
        } catch (error) {
            runInAction(() => {
                this.setStatusLoading = false;
                this.setStatusLoaded = false;
                console.error("Error submitting form:", error);
            });
        }
    }
}

const codeTokenStore = new CodeTokenStore();
export default codeTokenStore;
