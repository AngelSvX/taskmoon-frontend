'use client'

import { cn } from "@/lib/utils"
import {
    RadioGroup as ShadcnRadioGroup,
    RadioGroupItem as ShadcnRadioGroupItem,
} from "@/shared/_providers/shadcn/radio-group"
import { useId } from "react"

export default function RadioGroup({ className, ...props }: React.ComponentProps<typeof ShadcnRadioGroup>) {
    return <ShadcnRadioGroup className={cn("gap-2.5", className)} {...props} />
}

export function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof ShadcnRadioGroupItem>) {
    return (
        <ShadcnRadioGroupItem
            className={cn(
                "size-4.5 border-white/20 bg-white/5 shadow-none transition-colors hover:border-white/30 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-60 data-[state=checked]:border-brand-500 data-[state=checked]:bg-brand-500/15 dark:bg-white/5 [&_svg]:fill-brand-400 [&_svg]:text-brand-400",
                className
            )}
            {...props}
        />
    )
}

type RadioOptionProps = Omit<React.ComponentProps<typeof ShadcnRadioGroupItem>, "children"> & {
    label: React.ReactNode
    description?: React.ReactNode
    icon?: React.ReactNode
}

/** Opción tipo tarjeta (mismo estilo que el selector de íconos del WorkspaceModal). */
export function RadioOption({ id, label, description, icon, className, disabled, ...props }: RadioOptionProps) {
    const generatedId = useId();
    const itemId = id ?? generatedId;

    return (
        <label
            htmlFor={itemId}
            className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 transition-all hover:border-white/20 hover:bg-white/[0.04] has-[[data-state=checked]]:border-brand-400/70 has-[[data-state=checked]]:bg-brand-500/[0.06] has-[[data-state=checked]]:ring-2 has-[[data-state=checked]]:ring-brand-500/40",
                disabled && "cursor-not-allowed opacity-60",
                className
            )}
        >
            {icon && (
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 [&_svg]:size-4.5">
                    {icon}
                </span>
            )}
            <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-white">{label}</span>
                {description && (
                    <span className="mt-0.5 block text-xs leading-5 text-zinc-500">{description}</span>
                )}
            </span>
            <RadioGroupItem id={itemId} disabled={disabled} className="mt-0.5" {...props} />
        </label>
    )
}
