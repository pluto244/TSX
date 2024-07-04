import { makeAutoObservable, runInAction } from "mobx";

interface Role {
    id: number;
    name: string;
}

class RolesStore {
    roles: Role[] = [];
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage();
    }

    async fetchRoles() {
        this.loading = true;
        this.error = null;
        try {
            const response = await fetch("http://193.19.100.32:7000/api/get-roles");
            if (!response.ok) {
                throw new Error("Failed to fetch roles");
            }
            const data = await response.json();
            if (Array.isArray(data.roles) && data.roles.length > 0) {
                runInAction(() => {
                    this.roles = data.roles.map((role: string, index: number) => ({ id: index, name: role }));
                    this.loading = false;
                    this.saveToLocalStorage();
                });
            } else {
                throw new Error("No roles found");
            }
        } catch (error) {
            runInAction(() => {
                this.error = (error as Error).message;
                this.loading = false;
            });
        }
    }

    saveToLocalStorage() {
        localStorage.setItem("roles", JSON.stringify(this.roles));
    }

    loadFromLocalStorage() {
        const roles = localStorage.getItem("roles");
        if (roles) {
            this.roles = JSON.parse(roles);
        }
    }

    reset() {
        this.roles = [];
        this.loading = false;
        this.error = null;
        localStorage.removeItem("roles");
    }
}

const rolesStore = new RolesStore();
export default rolesStore;
