import { CreateWorkspaceRequest } from "../api/types";

export type WorkspaceFilter = 'todos' | 'active' | 'archived'

export interface AdminState {
    workspaceData: CreateWorkspaceRequest | null;
    successMessage: string | null;
    loading: boolean;
    error: string | null;
    createWorkspaceModalOpen: boolean;
    workspaceList: Workspace[] | null;
    view: 'grid' | 'list';
    query: string;
    filter: WorkspaceFilter;
}

export interface Workspace {
    id: number,
    owner_id: number,
    name: string,
    description: string,
    icon: string,
    slug: string,
    status: string,
    settings: string,
    created_at: string,
    updated_at: string,
    deleted_at: string | null
}