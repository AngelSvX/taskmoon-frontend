'use client'

import { cn } from "@/lib/utils"
import { Input as ShadcnInput } from "@/shared/_providers/shadcn/input"
import { useId } from "react"
import FieldError from "./FieldError"
import Label from "./Label"

export const inputClass =
    "h-11 rounded-lg border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white shadow-none placeholder:text-zinc-500 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-60 dark:bg-white/5 aria-invalid:border-red-500/50 aria-invalid:ring-red-500/30"

type InputProps = React.ComponentProps<"input"> & {
    label?: React.ReactNode
    error?: string
    hint?: React.ReactNode
    containerClassName?: string
}

export default function Input({
    id,
    label,
    error,
    hint,
    className,
    containerClassName,
    ...props
}: InputProps) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
        <div className={cn("space-y-2", containerClassName)}>
            {(label || hint) && (
                <div className="flex items-center justify-between">
                    {label && (
                        <Label htmlFor={inputId}>
                            {label}
                        </Label>
                    )}
                    {hint && <span className="text-[11px] text-zinc-500">{hint}</span>}
                </div>
            )}

            <ShadcnInput
                id={inputId}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={cn(inputClass, className)}
                {...props}
            />

            <FieldError id={errorId}>{error}</FieldError>
        </div>
    )
}
