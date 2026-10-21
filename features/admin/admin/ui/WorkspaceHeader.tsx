'use client'

import { useAppDispatch, useAppSelector } from "@/app/_store/hooks"
import { Icon } from "@/app/components/icons"
import { Heading } from "@/shared/ui"
import { changeToGrid, changeToList, setFilter, setQuery } from "../model/slice"
import { WorkspaceFilter } from "../model/types"

const FILTERS: { key: WorkspaceFilter; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "active", label: "Activos" },
    { key: "archived", label: "Archivados" },
]

export default function WorkspaceHeader() {

    const dispatch = useAppDispatch()
    const { view, query, filter } = useAppSelector((s) => s.admin)

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Heading as="h2" size="section">
                Tus proyectos
            </Heading>

            <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                    <Icon.Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
                    <input
                        value={query}
                        onChange={(e) => dispatch(setQuery(e.target.value))}
                        placeholder="Buscar proyecto..."
                        className="h-9 w-48 rounded-full border border-white/10 bg-white/5 pl-9 pr-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-400/50 sm:w-56"
                    />
                </div>

                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            type="button"
                            onClick={() => dispatch(setFilter(f.key))}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${filter === f.key
                                ? "bg-white text-black"
                                : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                    <button
                        type="button"
                        onClick={() => dispatch(changeToGrid())}
                        aria-label="Vista de cuadrícula"
                        className={`grid size-7 place-items-center rounded-full transition-colors ${view === "grid" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        <Icon.Grid className="size-3.5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch(changeToList())}
                        aria-label="Vista de lista"
                        className={`grid size-7 place-items-center rounded-full transition-colors ${view === "list" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                            }`}
                    >
                        <Icon.List className="size-3.5" />
                    </button>
                </div>
            </div>
        </div>
    )
}