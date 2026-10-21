'use client'

import { cn } from "@/lib/utils"
import { Progress as ShadcnProgress } from "@/shared/_providers/shadcn/progress"
import { cva, type VariantProps } from "class-variance-authority"

const progressVariants = cva("rounded-full bg-white/10", {
    variants: {
        size: {
            sm: "h-1",
            md: "h-1.5",
            lg: "h-2.5",
        },
        tone: {
            gradient: "[&_[data-slot=progress-indicator]]:bg-gradient-to-r [&_[data-slot=progress-indicator]]:from-brand-500 [&_[data-slot=progress-indicator]]:to-aurora",
            brand: "[&_[data-slot=progress-indicator]]:bg-brand-500",
            aurora: "[&_[data-slot=progress-indicator]]:bg-aurora",
            success: "[&_[data-slot=progress-indicator]]:bg-emerald-400",
            warning: "[&_[data-slot=progress-indicator]]:bg-amber-400",
            destructive: "[&_[data-slot=progress-indicator]]:bg-red-400",
        },
    },
    defaultVariants: {
        size: "md",
        tone: "gradient",
    },
})

type ProgressProps = Omit<React.ComponentProps<typeof ShadcnProgress>, "value" | "max"> &
    VariantProps<typeof progressVariants> & {
        value: number
        /** Valor máximo; el porcentaje se calcula como value / max. */
        max?: number
        /** Texto a la izquierda, p. ej. "3/5 tareas". */
        label?: React.ReactNode
        /** Muestra el porcentaje a la derecha. */
        showValue?: boolean
        /** Reemplaza el porcentaje por un texto propio. */
        valueLabel?: React.ReactNode
        containerClassName?: string
    }

export default function Progress({
    value,
    max = 100,
    size,
    tone,
    label,
    showValue = false,
    valueLabel,
    className,
    containerClassName,
    ...props
}: ProgressProps) {
    const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
    const hasHeader = label || showValue || valueLabel;

    return (
        <div className={cn("w-full", containerClassName)}>
            {hasHeader && (
                <div className="mb-1.5 flex items-center justify-between gap-3 text-[11px] text-zinc-500">
                    <span className="truncate">{label}</span>
                    {(showValue || valueLabel) && (
                        <span className="shrink-0 tabular-nums">{valueLabel ?? `${Math.round(percent)}%`}</span>
                    )}
                </div>
            )}
            <ShadcnProgress
                value={percent}
                className={cn(
                    progressVariants({ size, tone }),
                    "[&_[data-slot=progress-indicator]]:rounded-full [&_[data-slot=progress-indicator]]:duration-500",
                    className
                )}
                {...props}
            />
        </div>
    )
}

export { progressVariants }
export type { ProgressProps }
