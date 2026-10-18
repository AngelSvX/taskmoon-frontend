import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminApi } from "../api";
import { CreateWorkspaceRequest } from "../api/types";
import { Workspace } from "./types";

export const createWorkspace = createAsyncThunk(
    'admin/fetchAdmin',
    async (request: CreateWorkspaceRequest, { dispatch }): Promise<void> => {
        await adminApi.create(request)
        dispatch(getAllWorkspaces(request.owner_id))
    },
)

export const getAllWorkspaces = createAsyncThunk(
    'admin/getAllWorkspaces',
    async (owner_id: number): Promise<Workspace[]> => {
        const response = await adminApi.getAllByOwnerId(owner_id)
        return response.data
    }
)

export const deleteWorkspaceBySlug = createAsyncThunk(
    'admin/deleteWorkspaceBySlug',
    async ({ slug, owner_id }: { slug: string, owner_id: number }, { dispatch }): Promise<void> => {
        console.log({ slug, owner_id })
        await adminApi.deleteBySlug(slug)
        dispatch(getAllWorkspaces(owner_id))
    }
)
