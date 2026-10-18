import axios from "axios"
import { CreateWorkspaceRequest } from "./types"

const API_URL = 'http://localhost:3100/workspace'

export const adminApi = {
    create: (request: CreateWorkspaceRequest) => axios.post(`${API_URL}/create`, request),
    getAllByOwnerId: (owner_id: number) => axios.get(`${API_URL}/`, {
        params: {
            owner_id: owner_id
        }
    }),
    deleteBySlug: (slug: string) => axios.delete(`${API_URL}/`, {
        params: {
            slug: slug
        }
    })
}