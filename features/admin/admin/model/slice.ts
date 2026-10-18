import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createWorkspace, deleteWorkspaceBySlug, getAllWorkspaces } from "./thunks";
import { AdminState, WorkspaceFilter } from "./types";

export const initialState: AdminState = {
    workspaceData: null,
    successMessage: null,
    loading: false,
    error: null,
    createWorkspaceModalOpen: false,
    workspaceList: null,
    view: 'grid',
    query: '',
    filter: 'todos'
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        openCreateWorkspaceModal: (state) => {
            state.createWorkspaceModalOpen = true;
        },
        closeCreateWorkspaceModal: (state) => {
            state.createWorkspaceModalOpen = false;
        },
        changeToGrid: (state) => {
            if (state.view === "grid") return;
            state.view = "grid";
        },
        changeToList: (state) => {
            if (state.view === "list") return;
            state.view = "list";
        },
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setFilter: (state, action: PayloadAction<WorkspaceFilter>) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createWorkspace.pending, (state) => {
                (state.error = null),
                    (state.loading = true)
            })
            .addCase(createWorkspace.fulfilled, (state) => {
                (state.loading = false)
            })
            .addCase(createWorkspace.rejected, (state) => {
                (state.loading = false),
                    (state.error = "Un error ocurrió al crear el espacio de trabajo, inténtelo de nuevo más tarde.")
            })
        builder
            .addCase(getAllWorkspaces.pending, (state) => {
                (state.error = null),
                    (state.loading = true)
            })
            .addCase(getAllWorkspaces.fulfilled, (state, action) => {
                state.workspaceList = action.payload;
                state.loading = false;
            })
            .addCase(getAllWorkspaces.rejected, (state) => {
                (state.loading = false),
                    (state.error = "Un error ocurrió al obtener los espacios de trabajo, inténtelo de nuevo más tarde.")
            })
        builder
            .addCase(deleteWorkspaceBySlug.pending, (state) => {
                (state.error = null),
                    (state.loading = true)
            })
            .addCase(deleteWorkspaceBySlug.fulfilled, (state) => {
                (state.loading = false)
            })
            .addCase(deleteWorkspaceBySlug.rejected, (state) => {
                (state.loading = false),
                    (state.error = "Un error ocurrió al eliminar el espacio de trabajo, inténtelo de nuevo más tarde.")
            })
    }
})

export const { closeCreateWorkspaceModal, openCreateWorkspaceModal, changeToGrid, changeToList, setQuery, setFilter } = adminSlice.actions
export default adminSlice.reducer