'use client'

import { useAppDispatch } from "@/app/_store/hooks";
import { Icon } from "@/app/components/icons";
import { openCreateWorkspaceModal } from "../model/slice";

export default function CreateWorkspaceButton() {

    const dispatch = useAppDispatch();
    return (
        <button
            type="button"
            onClick={() => dispatch(openCreateWorkspaceModal())}
            className="group flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-6 text-center transition-colors hover:border-brand-400/40 hover:bg-white/[0.03]"
        >
            <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors group-hover:text-brand-300">
                <Icon.Plus className="size-5" />
            </span>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                Crear nuevo proyecto
            </span>
        </button>
    );
}