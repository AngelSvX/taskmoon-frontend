'use client'

import { Icon } from "@/app/components/icons";
import { useState } from "react";
import { Workspace } from "../model/types";
import { useAppDispatch } from "@/app/_store/hooks";
import { deleteWorkspaceBySlug } from "../model/thunks";

const MENU_ITEMS = [
    { key: "settings", label: "Configurar", icon: Icon.Settings },
    { key: "duplicate", label: "Duplicar", icon: Icon.Copy },
    { key: "archive", label: "Archivar", icon: Icon.Archive },
] as const;

export default function WorkspaceMenu(workspace: Workspace) {

    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Más opciones"
                className="grid size-8 place-items-center rounded-lg text-zinc-500 transition hover:bg-white/5 hover:text-white"
            >
                <Icon.Dots className="size-4.5" />
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

                    <div className="absolute right-0 top-full z-50 mt-1 w-44 rounded-xl border border-white/10 bg-[#0d0e1a] p-1.5 shadow-2xl shadow-black/50">
                        {MENU_ITEMS.map((item) => (
                            <button
                                key={item.key}
                                type="button"
                                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                            >
                                <item.icon className="size-4 text-zinc-500" />
                                {item.label}
                            </button>
                        ))}
                        <div className="my-1 h-px bg-white/10" />
                        <button
                            type="button"
                            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-red-400 transition-colors hover:bg-red-500/10"
                            onClick={() => {
                                dispatch(deleteWorkspaceBySlug({ slug: workspace.slug, owner_id: workspace.owner_id }))
                                setOpen(false)
                            }}
                        >
                            <Icon.Trash className="size-4" />
                            Eliminar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
