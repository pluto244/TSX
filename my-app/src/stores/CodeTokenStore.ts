import { makeAutoObservable, runInAction } from "mobx";
import userFormStore from "./UserFormStore";
import emailStore from "./EmailStore";

class CodeTokenStore {
    getTokenLoading: boolean = false;
    getTokenLoaded: boolean = false;
    coin: string = "";
    setStatusLoading: boolean = false;
    setStatusLoaded: boolean = false;
    statusRequest: string = "";

    constructor() {
        makeAutoObservable(this);
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
            const response = await fetch(`http://193.19.100.32:7000/api/get-code?email=${encodeURIComponent(emailStore.getEmail())}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Попробуйте еще раз чуть позже");
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
                console.error("Попробуйте еще раз чуть позже", error);
            });
        }
    }



    EncodeToBase64(email: string, code: string) {
        return btoa(`${email}:${code}`);
    }

    async setStatus() {
        const requestBody = {
            token: this.EncodeToBase64(emailStore.getEmail(), this.coin),
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
                throw new Error("Попробуйте еще раз чуть позже");
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
                console.error("Попробуйте еще раз чуть позже", error);
            });
        }
    }
}

const codeTokenStore = new CodeTokenStore();
export default codeTokenStore;
