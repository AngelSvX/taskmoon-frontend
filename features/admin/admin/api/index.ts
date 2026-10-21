import axios from "axios"
import { CreateWorkspaceRequest, UpdateWorkspaceRequest } from "./types"

const API_URL = 'http://localhost:3100/workspace'

export const adminApi = {
    create: (request: CreateWorkspaceRequest) => axios.post(`${API_URL}/create`, request),
    getAllByOwnerId: (owner_id: number) => axios.get(`${API_URL}/`, {
        params: {
            owner_id: owner_id
        }
    }),
    updateBySlug: (slug: string, request: UpdateWorkspaceRequest) => axios.put(`${API_URL}/`, request, {
        params: {
            slug: slug
        }
    }),
    deleteBySlug: (slug: string) => axios.delete(`${API_URL}/`, {
        params: {
            slug: slug
        }
    }),
    archiveBySlug: (slug: string) => axios.put(`${API_URL}/archive`, null, {
        params: {
            slug: slug
        }
    }),
    activeBySlug: (slug: string) => axios.put(`${API_URL}/active`, null, {
        params: {
            slug: slug
        }
    })
}