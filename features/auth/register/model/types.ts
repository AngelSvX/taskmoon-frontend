import { RegisterRequest } from "../api/types";

export interface RegisterState {
    registerData: RegisterRequest | null;
    successMessage: string | null;
    loading: boolean;
    error: string | null;
}