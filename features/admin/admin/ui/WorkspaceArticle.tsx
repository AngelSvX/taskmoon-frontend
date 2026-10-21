import { Icon } from "@/app/components/icons";
import { Heading, Text } from "@/shared/ui";
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
    const archived = workspace.status === "archived";
    const updated = new Date(workspace.updated_at).toLocaleDateString();

    if (view === 'list') {
        return (
            <div
                className={`glass relative flex flex-col gap-4 has-[[data-open=true]]:z-50 rounded-xl p-4 transition-colors hover:bg-white/[0.05] sm:flex-row sm:items-center ${archived ? "opacity-70" : ""}`}
            >
                <div className="flex flex-1 items-center gap-3.5">
                    <span className={`grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br to-transparent ${icon.tint}`}>
                        <Image src={icon.src} alt="" className="size-5" />
                    </span>
                    <div className="min-w-0">
                        <Heading as="h3" size="sm" truncate>
                            {workspace.name}
                        </Heading>
                        <Text variant="caption" truncate>
                            {workspace.description}
                        </Text>
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                    <Text as="span" variant="tiny" className="hidden w-20 md:block">
                        {archived ? "Archivado" : updated}
                    </Text>
                    <WorkspaceMenu {...workspace} />
                </div>
            </div>
        );
    }

    return (
        <article
            className={`glass card-glow relative has-[[data-open=true]]:z-50 flex min-h-[220px] flex-col rounded-2xl p-5 transition-colors hover:bg-white/[0.05] ${archived ? "opacity-70" : ""}`}
        >
            <div className="flex items-start justify-between">
                <span className={`grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br to-transparent ${icon.tint}`}>
                    <Image src={icon.src} alt="" className="size-6" />
                </span>
                <WorkspaceMenu {...workspace} />
            </div>

            <Heading as="h3" size="base" className="mt-4">
                {workspace.name}
            </Heading>
            <Text className="mt-1.5 line-clamp-2 leading-5">
                {workspace.description}
            </Text>

            <div className="mt-auto flex items-center justify-end pt-5">
                <Text as="span" variant="tiny" className="flex items-center gap-1">
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
                </Text>
            </div>
        </article>
    );
}
