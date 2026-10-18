import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from 'jwt-decode';
import { fetchLogin } from "./thunks";
import { DecodedToken, LoginState } from "./types";

export const initialState: LoginState = {
    loginData: null,
    userData: null,
    successMessage: null,
    error: null,
    loading: false,
    access_token: null,
    isLogged: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        clearData: (state) => {
            state.loginData = null
            state.successMessage = null
            state.error = null
            state.loading = false
        },
        logout: (state) => {
            state.loginData = null
            state.successMessage = null
            state.error = null
            state.loading = false
            state.access_token = null
            state.isLogged = false
        },
        setUserData: (state, action: PayloadAction<DecodedToken>) => {
            state.userData = action.payload;
            state.isLogged = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                (state.error = null), (state.loading = true)
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                (state.loading = false),
                (state.successMessage = "Inicio de sesión exitoso"),
                (state.access_token = action.payload),
                (state.isLogged = true)

                // desencriptar el token
                const decoded = jwtDecode<DecodedToken>(action.payload)
                state.userData = decoded
                console.log(state.userData, 'waaaa')
            })
            .addCase(fetchLogin.rejected, (state) => {
                (state.loading = false), (state.error = "Un error ocurrió al iniciar sesión, inténtelo de nuevo más tarde.")
            })
    }
})

export const { clearData, logout, setUserData } = loginSlice.actions;
export default loginSlice.reducer;