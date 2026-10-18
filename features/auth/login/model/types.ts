import { LoginRequest } from "../api/types";

export interface LoginState {
    loginData: LoginRequest | null;
    userData: DecodedToken | null
    successMessage: string | null;
    error: string | null;
    loading: boolean;
    access_token: string | null;
    isLogged: boolean
}

export interface DecodedToken {
    id: number,
    email: string,
    username: string,
    display_name: string,
    created_at: string,
    roles: string[],
    iat: number,
    exp: number
}