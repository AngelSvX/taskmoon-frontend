import { createAsyncThunk } from "@reduxjs/toolkit";
import { authLoginApi } from "../api";
import { LoginRequest } from "../api/types";
import { setLoginCookie } from "./actions";

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async (request: LoginRequest): Promise<string> => {
        const response = await authLoginApi.login(request)
        await setLoginCookie(response.data.access_token)

        return response.data.access_token
    }
)