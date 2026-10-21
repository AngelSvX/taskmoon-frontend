'use client'

import { cn } from "@/lib/utils"
import {
    Avatar as ShadcnAvatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup as ShadcnAvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/shared/_providers/shadcn/avatar"

const SIZES = {
    xs: { root: "size-6", text: "text-[10px]", shadcn: "sm" },
    sm: { root: "size-8", text: "text-xs", shadcn: "default" },
    md: { root: "size-9", text: "text-xs", shadcn: "default" },
    lg: { root: "size-11", text: "text-sm", shadcn: "lg" },
    xl: { root: "size-14", text: "text-base", shadcn: "lg" },
} as const

const STATUS = {
    online: { className: "bg-emerald-400", label: "En línea" },
    away: { className: "bg-amber-400", label: "Ausente" },
    busy: { className: "bg-red-400", label: "Ocupado" },
    offline: { className: "bg-zinc-500", label: "Desconectado" },
} as const

type AvatarSize = keyof typeof SIZES
type AvatarStatus = keyof typeof STATUS

/** "Angel Svx" → "A" (letters = 1) o "AS" (letters = 2). */
export function getInitials(name: string, letters: 1 | 2 = 1) {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "?";
    return words
        .slice(0, letters)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

type AvatarProps = Omit<React.ComponentProps<typeof ShadcnAvatar>, "children" | "size"> & {
    name: string
    src?: string | null
    size?: AvatarSize
    /** Cantidad de letras a mostrar cuando no hay imagen. */
    letters?: 1 | 2
    /** Borde del color del fondo, útil cuando el avatar va encima de otros elementos. */
    ring?: boolean
    status?: AvatarStatus
}

export default function Avatar({
    name,
    src,
    size = "sm",
    letters = 1,
    ring = false,
    status,
    className,
    ...props
}: AvatarProps) {
    const config = SIZES[size];

    return (
        <ShadcnAvatar
            size={config.shadcn}
            title={name}
            className={cn(config.root, "overflow-visible", ring && "ring-2 ring-[#07080c]", className)}
            {...props}
        >
            {src && <AvatarImage src={src} alt={name} className="rounded-full object-cover" />}
            <AvatarFallback
                className={cn(
                    "bg-gradient-to-br from-brand-500 to-aurora/60 font-semibold text-black group-data-[size=sm]/avatar:text-[10px]",
                    config.text
                )}
            >
                {getInitials(name, letters)}
            </AvatarFallback>
            {status && (
                <AvatarBadge
                    role="img"
                    aria-label={STATUS[status].label}
                    className={cn("ring-[#07080c]", STATUS[status].className)}
                />
            )}
        </ShadcnAvatar>
    )
}

type AvatarGroupProps = Omit<React.ComponentProps<"div">, "children"> & {
    users: { name: string; src?: string | null }[]
    /** Máximo de avatares visibles; el resto se muestra como "+N". */
    max?: number
    size?: AvatarSize
    letters?: 1 | 2
}

export function AvatarGroup({ users, max = 4, size = "sm", letters = 1, className, ...props }: AvatarGroupProps) {
    const visible = users.slice(0, max);
    const remaining = users.length - visible.length;
    const config = SIZES[size];

    return (
        <ShadcnAvatarGroup className={cn("*:data-[slot=avatar]:ring-[#07080c]", className)} {...props}>
            {visible.map((user, index) => (
                <Avatar key={`${user.name}-${index}`} name={user.name} src={user.src} size={size} letters={letters} />
            ))}
            {remaining > 0 && (
                <AvatarGroupCount
                    title={`${remaining} más`}
                    className={cn("border border-white/10 bg-[#0d0e1a] font-medium text-zinc-300 ring-[#07080c]", config.root, config.text)}
                >
                    +{remaining}
                </AvatarGroupCount>
            )}
        </ShadcnAvatarGroup>
    )
}

export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarStatus }
