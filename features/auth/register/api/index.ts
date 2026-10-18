import axios from "axios"
import { RegisterRequest } from "./types"

const API_URL = 'http://localhost:3100'

export const authRegisterApi = {
    register: (payload: RegisterRequest) => axios.post(`${API_URL}/user/register`, payload)
}