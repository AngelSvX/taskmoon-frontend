import type { StaticImageData } from "next/image";
import one from "@/assets/workspace-icons/one.png";
import two from "@/assets/workspace-icons/two.png";
import three from "@/assets/workspace-icons/three.png";
import four from "@/assets/workspace-icons/four.png";

export type WorkspaceIconKey = "one" | "two" | "three" | "four";

export type WorkspaceIcon = {
    key: WorkspaceIconKey;
    label: string;
    src: StaticImageData;
    tint: string;
};

// `key` es el valor que se envía al backend en el campo `icon`
export const WORKSPACE_ICONS: WorkspaceIcon[] = [
    { key: "one", label: "Átomo", src: one, tint: "from-brand-500/30" },
    { key: "two", label: "Conexiones", src: two, tint: "from-fuchsia-500/30" },
    { key: "three", label: "Procesador", src: three, tint: "from-emerald-400/30" },
    { key: "four", label: "Red", src: four, tint: "from-aurora/30" },
];

export const getWorkspaceIcon = (key: string) =>
    WORKSPACE_ICONS.find((i) => i.key === key) ?? WORKSPACE_ICONS[0];
