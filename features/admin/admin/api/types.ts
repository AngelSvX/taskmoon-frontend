export interface CreateWorkspaceRequest {
    owner_id: number,
    name: string,
    description: string,
    icon: string
}

export type UpdateWorkspaceRequest = Omit<CreateWorkspaceRequest, "owner_id">