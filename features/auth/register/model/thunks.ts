import { createAsyncThunk } from "@reduxjs/toolkit";
import { authRegisterApi } from "../api";
import { RegisterRequest } from "../api/types";

export const fetchRegister = createAsyncThunk(
    'register/fetchRegister',
    async (request: RegisterRequest): Promise<void> => {
        await authRegisterApi.register(request)
    },
)