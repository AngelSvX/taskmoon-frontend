import { Icon } from "@/app/components/icons";
import Image from "next/image";
import { getWorkspaceIcon } from "../config/workspace-icons";
import { Workspace } from "../model/types";
import WorkspaceMenu from "./WorkspaceMenu";

interface Props {
    workspace: Workspace;
    view: 'grid' | 'list';
}

export default function WorkspaceArticle({ workspace, view }: Props) {

    const icon = getWorkspaceIcon(workspace.icon);
    const archived = workspace.status === "archivado";
    const updated = new Date(workspace.updated_at).toLocaleDateString();

    if (view === 'list') {
        return (
            <div
                className={`glass flex flex-col gap-4 rounded-xl p-4 transition-colors hover:bg-white/[0.05] sm:flex-row sm:items-center ${archived ? "opacity-70" : ""}`}
            >
                <div className="flex flex-1 items-center gap-3.5">
                    <span className={`grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br to-transparent ${icon.tint}`}>
                        <Image src={icon.src} alt="" className="size-5" />
                    </span>
                    <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-white">
                            {workspace.name}
                        </h3>
                        <p className="truncate text-xs text-zinc-500">
                            {workspace.description}
                        </p>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                    <span className="hidden w-20 text-[11px] text-zinc-500 md:block">
                        {archived ? "Archivado" : updated}
                    </span>
                    <WorkspaceMenu {...workspace} />
                </div>
            </div>
        );
    }

    return (
        <article
            className={`glass card-glow relative flex min-h-[220px] flex-col rounded-2xl p-5 transition-colors hover:bg-white/[0.05] ${archived ? "opacity-70" : ""}`}
        >
            <div className="flex items-start justify-between">
                <span className={`grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br to-transparent ${icon.tint}`}>
                    <Image src={icon.src} alt="" className="size-6" />
                </span>
                <WorkspaceMenu {...workspace} />
            </div>

            <h3 className="mt-4 text-base font-semibold text-white">
                {workspace.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-zinc-400">
                {workspace.description}
            </p>

            <div className="mt-auto flex items-center justify-end pt-5">
                <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                    {archived ? (
                        <>
                            <Icon.Archive className="size-3.5" />
                            Archivado
                        </>
                    ) : (
                        <>
                            <Icon.Clock className="size-3.5" />
                            {updated}
                        </>
                    )}
                </span>
            </div>
        </article>
    );
}
