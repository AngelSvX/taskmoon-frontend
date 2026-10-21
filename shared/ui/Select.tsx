'use client'

import { cn } from "@/lib/utils"
import {
    Select as ShadcnSelect,
    SelectContent as ShadcnSelectContent,
    SelectGroup,
    SelectItem as ShadcnSelectItem,
    SelectLabel as ShadcnSelectLabel,
    SelectSeparator as ShadcnSelectSeparator,
    SelectTrigger as ShadcnSelectTrigger,
    SelectValue,
} from "@/shared/_providers/shadcn/select"
import { useId } from "react"
import FieldError from "./FieldError"
import Label from "./Label"

/* ---------- Piezas estilizadas (para composición libre) ---------- */

export function SelectTrigger({ className, ...props }: React.ComponentProps<typeof ShadcnSelectTrigger>) {
    return (
        <ShadcnSelectTrigger
            className={cn(
                "w-full rounded-lg border-white/10 bg-white/5 px-4 text-sm text-white shadow-none data-[size=default]:h-11 data-[size=sm]:h-9 data-[placeholder]:text-zinc-500 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-60 dark:bg-white/5 dark:hover:bg-white/[0.07] aria-invalid:border-red-500/50 aria-invalid:ring-red-500/30 [&_svg:not([class*='text-'])]:text-zinc-500",
                className
            )}
            {...props}
        />
    )
}

export function SelectContent({ className, position = "popper", ...props }: React.ComponentProps<typeof ShadcnSelectContent>) {
    return (
        <ShadcnSelectContent
            position={position}
            className={cn(
                "z-[70] rounded-xl border-white/10 bg-[#0d0e1a] p-0.5 text-zinc-300 shadow-2xl shadow-black/50",
                className
            )}
            {...props}
        />
    )
}

export function SelectItem({ className, ...props }: React.ComponentProps<typeof ShadcnSelectItem>) {
    return (
        <ShadcnSelectItem
            className={cn(
                "rounded-lg py-2 pl-2.5 text-sm text-zinc-300 transition-colors focus:bg-white/5 focus:text-white data-[state=checked]:text-white [&_[data-slot=select-item-indicator]_svg]:text-brand-400",
                className
            )}
            {...props}
        />
    )
}

export function SelectLabel({ className, ...props }: React.ComponentProps<typeof ShadcnSelectLabel>) {
    return <ShadcnSelectLabel className={cn("px-2.5 text-[11px] font-medium uppercase tracking-wide text-zinc-500", className)} {...props} />
}

export function SelectSeparator({ className, ...props }: React.ComponentProps<typeof ShadcnSelectSeparator>) {
    return <ShadcnSelectSeparator className={cn("bg-white/10", className)} {...props} />
}

export { SelectGroup, SelectValue }

/* ---------- Select listo para usar ---------- */

export type SelectOption = {
    value: string
    label: React.ReactNode
    disabled?: boolean
}

type SelectProps = Omit<React.ComponentProps<typeof ShadcnSelect>, "children"> & {
    options: SelectOption[]
    id?: string
    label?: React.ReactNode
    placeholder?: string
    error?: string
    size?: "sm" | "default"
    className?: string
    triggerClassName?: string
}

export default function Select({
    options,
    id,
    label,
    placeholder = "Selecciona una opción",
    error,
    size = "default",
    className,
    triggerClassName,
    ...props
}: SelectProps) {
    const generatedId = useId();
    const triggerId = id ?? generatedId;
    const errorId = `${triggerId}-error`;

    return (
        <div className={cn("space-y-2", className)}>
            {label && (
                <Label htmlFor={triggerId}>
                    {label}
                </Label>
            )}

            <ShadcnSelect {...props}>
                <SelectTrigger
                    id={triggerId}
                    size={size}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    className={triggerClassName}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </ShadcnSelect>

            <FieldError id={errorId}>{error}</FieldError>
        </div>
    )
}
