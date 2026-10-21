import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activeWorkspaceBySlug, archiveWorkspaceBySlug, createWorkspace, deleteWorkspaceBySlug, getAllWorkspaces, updateWorkspaceBySlug } from "./thunks";
import { AdminState, Workspace, WorkspaceFilter } from "./types";

export const initialState: AdminState = {
    workspaceData: null,
    successMessage: null,
    loading: false,
    error: null,
    workspaceModalOpen: false,
    editingWorkspace: null,
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
            state.editingWorkspace = null;
            state.workspaceModalOpen = true;
        },
        openEditWorkspaceModal: (state, action: PayloadAction<Workspace>) => {
            state.editingWorkspace = action.payload;
            state.workspaceModalOpen = true;
        },
        closeWorkspaceModal: (state) => {
            state.workspaceModalOpen = false;
            state.editingWorkspace = null;
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
            .addCase(updateWorkspaceBySlug.pending, (state) => {
                (state.error = null),
                    (state.loading = true)
            })
            .addCase(updateWorkspaceBySlug.fulfilled, (state) => {
                (state.loading = false)
            })
            .addCase(updateWorkspaceBySlug.rejected, (state) => {
                (state.loading = false),
                    (state.error = "Un error ocurrió al actualizar el espacio de trabajo, inténtelo de nuevo más tarde.")
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
        builder
            .addCase(archiveWorkspaceBySlug.pending, (state) => {
                (state.error = null),
                    (state.loading = true)
            })
            .addCase(archiveWorkspaceBySlug.fulfilled, (state) => {
                (state.loading = false)
            })
            .addCase(archiveWorkspaceBySlug.rejected, (state) => {
                (state.loading = false),
                    (state.error = "Un error ocurrió al archivar el espacio de trabajo, inténtelo de nuevo más tarde.")
            })
        builder
            .addCase(activeWorkspaceBySlug.pending, (state) => {
                (state.error = null),
                    (state.loading = true)
            })
            .addCase(activeWorkspaceBySlug.fulfilled, (state) => {
                (state.loading = false)
            })
            .addCase(activeWorkspaceBySlug.rejected, (state) => {
                (state.loading = false),
                    (state.error = "Un error ocurrió al activar el espacio de trabajo, inténtelo de nuevo más tarde.")
            })
    }
})

export const { closeWorkspaceModal, openCreateWorkspaceModal, openEditWorkspaceModal, changeToGrid, changeToList, setQuery, setFilter } = adminSlice.actions
export default adminSlice.reducer