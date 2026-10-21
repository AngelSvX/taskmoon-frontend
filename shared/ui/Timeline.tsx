'use client'

import { Icon } from "@/app/components/icons"
import { cn } from "@/lib/utils"
import Avatar from "./Avatar"
import Badge from "./Badge"
import Skeleton from "./Skeleton"

/* ---------- Tipos de acción ---------- */

const ACTIONS = {
    create: { icon: Icon.Plus, className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300", label: "Creado" },
    update: { icon: Icon.Pencil, className: "border-brand-500/30 bg-brand-500/10 text-brand-200", label: "Editado" },
    delete: { icon: Icon.Trash, className: "border-red-500/30 bg-red-500/10 text-red-300", label: "Eliminado" },
    archive: { icon: Icon.Archive, className: "border-amber-500/30 bg-amber-500/10 text-amber-300", label: "Archivado" },
    restore: { icon: Icon.Check, className: "border-aurora/30 bg-aurora/10 text-aurora", label: "Restaurado" },
    invite: { icon: Icon.UserPlus, className: "border-aurora/30 bg-aurora/10 text-aurora", label: "Invitación" },
    settings: { icon: Icon.Settings, className: "border-white/10 bg-white/5 text-zinc-300", label: "Configuración" },
    default: { icon: Icon.Clock, className: "border-white/10 bg-white/5 text-zinc-400", label: "Actividad" },
} as const

export type TimelineAction = keyof typeof ACTIONS

export type TimelineChange = {
    field: React.ReactNode
    from?: React.ReactNode
    to?: React.ReactNode
}

export type TimelineEvent = {
    id: string | number
    /** Lo que ocurrió, p. ej. "editó el proyecto Cursos". */
    title: React.ReactNode
    timestamp: Date | string | number
    action?: TimelineAction
    description?: React.ReactNode
    user?: { name: string; src?: string | null }
    /** Cambios campo por campo (antes → después). */
    changes?: TimelineChange[]
    /** Reemplaza el ícono de la acción. */
    icon?: React.ComponentType<{ className?: string }>
    /** Contenido extra al final del evento (enlaces, botones, etc.). */
    extra?: React.ReactNode
}

/* ---------- Fechas ---------- */

const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
    ["day", 86_400],
    ["hour", 3_600],
    ["minute", 60],
    ["second", 1],
];

const toDate = (value: TimelineEvent["timestamp"]) => (value instanceof Date ? value : new Date(value));

export function formatRelativeTime(date: Date, now = new Date()) {
    const seconds = (date.getTime() - now.getTime()) / 1000;
    if (Math.abs(seconds) > 7 * 86_400) {
        return date.toLocaleDateString("es", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
    }
    if (Math.abs(seconds) < 45) return "ahora";
    const [unit, size] = RELATIVE_UNITS.find(([, s]) => Math.abs(seconds) >= s) ?? ["second", 1];
    return rtf.format(Math.round(seconds / size), unit);
}

function formatDayLabel(date: Date, now = new Date()) {
    const startOf = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const diffDays = Math.round((startOf(now) - startOf(date)) / 86_400_000);
    if (diffDays === 0) return "Hoy";
    if (diffDays === 1) return "Ayer";
    return date.toLocaleDateString("es", { weekday: "long", day: "numeric", month: "long" });
}

/* ---------- Item ---------- */

type TimelineItemProps = {
    event: TimelineEvent
    isLast?: boolean
    dense?: boolean
    showActionBadge?: boolean
}

export function TimelineItem({ event, isLast = false, dense = false, showActionBadge = false }: TimelineItemProps) {
    const action = ACTIONS[event.action ?? "default"];
    const EventIcon = event.icon ?? action.icon;
    const date = toDate(event.timestamp);

    return (
        <li className={cn("relative grid grid-cols-[2rem_1fr] gap-x-3.5", dense ? "pb-4" : "pb-6", isLast && "pb-0")}>
            {!isLast && (
                <span aria-hidden className="absolute top-9 bottom-1 left-4 w-px -translate-x-1/2 bg-white/10" />
            )}

            <span className={cn("relative z-10 grid size-8 place-items-center rounded-full border ring-4 ring-[#07080c]", action.className)}>
                <EventIcon className="size-3.5" />
            </span>

            <div className="min-w-0 pt-1">
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <p className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-sm leading-6 text-zinc-300">
                        {event.user && (
                            <>
                                <Avatar name={event.user.name} src={event.user.src} size="xs" className="mr-0.5" />
                                <span className="font-semibold text-white">{event.user.name}</span>
                            </>
                        )}
                        <span>{event.title}</span>
                        {showActionBadge && (
                            <Badge size="sm" className={cn("ml-1", action.className)}>{action.label}</Badge>
                        )}
                    </p>
                    <time
                        dateTime={date.toISOString()}
                        title={date.toLocaleString("es")}
                        suppressHydrationWarning
                        className="shrink-0 text-[11px] leading-6 text-zinc-500"
                    >
                        {formatRelativeTime(date)}
                    </time>
                </div>

                {event.description && !dense && (
                    <p className="mt-1 text-sm leading-5 text-zinc-400">{event.description}</p>
                )}

                {event.changes && event.changes.length > 0 && !dense && (
                    <dl className="mt-3 space-y-1.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
                        {event.changes.map((change, index) => (
                            <div key={index} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <dt className="font-medium text-zinc-400">{change.field}:</dt>
                                <dd className="flex min-w-0 flex-wrap items-center gap-x-2">
                                    {change.from !== undefined && (
                                        <span className="break-all text-zinc-500 line-through decoration-zinc-600">{change.from || "—"}</span>
                                    )}
                                    {change.from !== undefined && change.to !== undefined && (
                                        <span aria-hidden className="text-zinc-600">→</span>
                                    )}
                                    {change.to !== undefined && (
                                        <span className="break-all text-white">{change.to || "—"}</span>
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                )}

                {event.extra && <div className="mt-3">{event.extra}</div>}
            </div>
        </li>
    )
}

/* ---------- Timeline ---------- */

type TimelineProps = Omit<React.ComponentProps<"div">, "children"> & {
    events: TimelineEvent[]
    /** Agrupa los eventos por día ("Hoy", "Ayer", "lunes 3 de marzo"...). */
    groupByDay?: boolean
    /** Versión compacta: oculta descripción y cambios. */
    dense?: boolean
    showActionBadge?: boolean
    loading?: boolean
    /** Cantidad de filas skeleton mientras carga. */
    loadingItems?: number
    emptyMessage?: React.ReactNode
}

export default function Timeline({
    events,
    groupByDay = false,
    dense = false,
    showActionBadge = false,
    loading = false,
    loadingItems = 4,
    emptyMessage = "Aún no hay actividad registrada.",
    className,
    ...props
}: TimelineProps) {
    if (loading) {
        return (
            <div aria-busy className={cn("space-y-6", className)} {...props}>
                {Array.from({ length: loadingItems }, (_, index) => (
                    <div key={index} className="grid grid-cols-[2rem_1fr] gap-x-3.5">
                        <Skeleton className="size-8 rounded-full" />
                        <div className="space-y-2 pt-1.5">
                            <Skeleton className="h-3.5 w-2/3" />
                            {!dense && <Skeleton className="h-3 w-1/3" />}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (events.length === 0) {
        return (
            <div
                className={cn("rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-sm text-zinc-500", className)}
                {...props}
            >
                {emptyMessage}
            </div>
        )
    }

    const sorted = [...events].sort((a, b) => toDate(b.timestamp).getTime() - toDate(a.timestamp).getTime());

    const renderList = (list: TimelineEvent[]) => (
        <ol>
            {list.map((event, index) => (
                <TimelineItem
                    key={event.id}
                    event={event}
                    isLast={index === list.length - 1}
                    dense={dense}
                    showActionBadge={showActionBadge}
                />
            ))}
        </ol>
    );

    if (!groupByDay) {
        return <div className={className} {...props}>{renderList(sorted)}</div>
    }

    const groups = new Map<string, { label: string; events: TimelineEvent[] }>();
    for (const event of sorted) {
        const date = toDate(event.timestamp);
        const key = date.toDateString();
        if (!groups.has(key)) groups.set(key, { label: formatDayLabel(date), events: [] });
        groups.get(key)!.events.push(event);
    }

    return (
        <div className={cn("space-y-8", className)} {...props}>
            {[...groups.entries()].map(([key, group]) => (
                <section key={key}>
                    <h4 suppressHydrationWarning className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500 first-letter:uppercase">
                        {group.label}
                    </h4>
                    {renderList(group.events)}
                </section>
            ))}
        </div>
    )
}
