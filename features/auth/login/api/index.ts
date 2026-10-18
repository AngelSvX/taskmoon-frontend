import axios from "axios"
import { LoginRequest } from "./types"

const API_URL = 'http://localhost:3100'

export const authLoginApi = {
    login: (payload: LoginRequest) => axios.post(`${API_URL}/auth/login`, payload)
}
    
