import { createSlice } from "@reduxjs/toolkit";
import { RegisterState } from "./types";
import { fetchRegister } from "./thunks";
export const initialState: RegisterState = {
    registerData: null,
    successMessage: null,
    loading: false,
    error: null,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        // funciones que no son asíncronas
        putUserRole: (state) => {
            if (state.registerData?.role_id) {
                state.registerData.role_id = 3 // user
            }
        },
        clearData: (state) => {
            state.registerData = null
            state.successMessage = null
            state.error = null
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        // funciones que si son asíncronas
        builder
            .addCase(fetchRegister.pending, (state) => {
                (state.error = null), (state.loading = true)
            })
            .addCase(fetchRegister.fulfilled, (state) => {
                (state.loading = false),
                (state.successMessage = "El usuario se registro correctamente"),
                (state.registerData = null)
            })
            .addCase(fetchRegister.rejected, (state) => {
                (state.loading = false), (state.error = "Un error ocurrió al registrar el usuario, inténtelo de nuevo más tarde.")
            })
    }
})

export const { putUserRole, clearData } = registerSlice.actions;
export default registerSlice.reducer;