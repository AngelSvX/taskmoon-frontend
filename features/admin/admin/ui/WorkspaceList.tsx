'use client'

import { useAppDispatch, useAppSelector } from "@/app/_store/hooks"
import { useEffect } from "react"
import { getAllWorkspaces } from "../model/thunks"
import WorkspaceArticle from "./WorkspaceArticle"
import CreateWorkspaceButton from "./CreateWorkspaceButton"
import CreateWorkspaceModal from "./CreateWorkspaceModal"

export default function WorkspaceList() {

    const dispatch = useAppDispatch()

    const { workspaceList, view, query, filter } = useAppSelector((s) => s.admin)
    const { userData } = useAppSelector((s) => s.login)

    useEffect(() => {
        if (userData?.id) {
            dispatch(getAllWorkspaces(userData.id))
        }
    }, [dispatch, userData])

    const allWorkspaces = workspaceList ?? []
    const search = query.trim().toLowerCase()

    const workspaces = allWorkspaces.filter((w) => {
        const matchesFilter = filter === "todos" || w.status === filter
        const matchesQuery = !search
            || w.name.toLowerCase().includes(search)
            || w.description?.toLowerCase().includes(search)
        return matchesFilter && matchesQuery
    })

    const items = workspaces.map((w) => (
        <WorkspaceArticle key={w.id} workspace={w} view={view} />
    ))

    if (view === 'list') {
        return <div className="space-y-2.5">{items}</div>
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CreateWorkspaceButton />
            <CreateWorkspaceModal />
            {items}

            {workspaces.length === 0 && (
                <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-sm text-zinc-500">
                    {allWorkspaces.length === 0
                        ? "Aún no tienes proyectos."
                        : "No hay proyectos que coincidan con tu búsqueda."}
                </div>
            )}
        </div>
    )
}
