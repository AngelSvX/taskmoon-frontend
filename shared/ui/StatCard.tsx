import { cn } from "@/lib/utils"
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react"
import Badge from "./Badge"
import Progress from "./Progress"
import { Card } from "./Card"
import Skeleton from "./Skeleton"

type StatTrend = {
    /** Texto del cambio, p. ej. "+12%" o "3". */
    value: React.ReactNode
    direction?: "up" | "down" | "neutral"
    /** Texto que acompaña al cambio, p. ej. "vs. mes anterior". */
    label?: React.ReactNode
    /** Invierte los colores (cuando bajar es bueno, p. ej. tareas vencidas). */
    inverted?: boolean
}

const ICON_TONES = {
    muted: "text-zinc-500",
    brand: "text-brand-400",
    aurora: "text-aurora",
    success: "text-emerald-400",
    warning: "text-amber-400",
    destructive: "text-red-400",
} as const

const TREND_ICONS = {
    up: ArrowUpRight,
    down: ArrowDownRight,
    neutral: ArrowRight,
} as const

type StatCardProps = Omit<React.ComponentProps<"div">, "children"> & {
    label: React.ReactNode
    value: React.ReactNode
    icon?: React.ComponentType<{ className?: string }>
    iconTone?: keyof typeof ICON_TONES
    /** Muestra el ícono dentro de un recuadro (estilo de los íconos de proyecto). */
    iconBoxed?: boolean
    /** Texto pequeño junto al valor, p. ej. "/ 10" o "hrs". */
    unit?: React.ReactNode
    description?: React.ReactNode
    trend?: StatTrend
    /** Porcentaje (0–100) para mostrar una barra de progreso. */
    progress?: number
    loading?: boolean
    glow?: boolean
    interactive?: boolean
    footer?: React.ReactNode
}

export default function StatCard({
    label,
    value,
    icon: StatIcon,
    iconTone = "muted",
    iconBoxed = false,
    unit,
    description,
    trend,
    progress,
    loading = false,
    glow = true,
    interactive = false,
    footer,
    className,
    ...props
}: StatCardProps) {
    const direction = trend?.direction ?? "neutral";
    const TrendIcon = TREND_ICONS[direction];
    const isPositive = trend?.inverted ? direction === "down" : direction === "up";
    const isNegative = trend?.inverted ? direction === "up" : direction === "down";
    const trendVariant = isPositive ? "success" : isNegative ? "destructive" : "default";

    return (
        <Card
            glow={glow}
            interactive={interactive}
            aria-busy={loading || undefined}
            className={cn("gap-0 p-5", className)}
            {...props}
        >
            <div className="flex items-center justify-between gap-3">
                <span className="truncate text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {label}
                </span>
                {StatIcon && (
                    iconBoxed ? (
                        <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5", ICON_TONES[iconTone])}>
                            <StatIcon className="size-4" />
                        </span>
                    ) : (
                        <StatIcon className={cn("size-4 shrink-0", ICON_TONES[iconTone])} />
                    )
                )}
            </div>

            {loading ? (
                <Skeleton className="mt-3 h-8 w-20" />
            ) : (
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
                    <span className="text-2xl font-semibold tracking-tight text-white">
                        {value}
                        {unit && <span className="ml-1 text-sm font-medium text-zinc-500">{unit}</span>}
                    </span>
                    {trend && (
                        <span className="flex items-center gap-1.5">
                            <Badge variant={trendVariant} size="sm" className="gap-0.5 pl-1.5">
                                <TrendIcon />
                                {trend.value}
                            </Badge>
                            {trend.label && <span className="text-[11px] text-zinc-500">{trend.label}</span>}
                        </span>
                    )}
                </div>
            )}

            {description && (
                loading ? (
                    <Skeleton className="mt-2 h-3.5 w-32" />
                ) : (
                    <p className="mt-1.5 text-xs leading-5 text-zinc-500">{description}</p>
                )
            )}

            {progress !== undefined && (
                <Progress value={loading ? 0 : progress} containerClassName="mt-4" />
            )}

            {footer && (
                <div className="mt-4 border-t border-white/10 pt-3 text-[11px] text-zinc-500">
                    {footer}
                </div>
            )}
        </Card>
    )
}

export type { StatCardProps, StatTrend }
