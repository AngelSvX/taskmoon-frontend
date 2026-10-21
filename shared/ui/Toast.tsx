'use client'

import { Toaster as ShadcnToaster } from "@/shared/_providers/shadcn/sonner"
import { toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof ShadcnToaster>

/**
 * Montar una sola vez (p. ej. en app/layout.tsx).
 * Luego disparar desde cualquier client component con `toast.success("...")`, `toast.error("...")`, etc.
 */
export default function Toaster({ toastOptions, ...props }: ToasterProps) {
    return (
        <ShadcnToaster
            position="bottom-right"
            offset={20}
            toastOptions={{
                ...toastOptions,
                classNames: {
                    toast: "!rounded-xl !border-white/10 !bg-[#0d0e1a] !text-white !shadow-2xl !shadow-black/50 font-sans",
                    title: "!text-sm !font-semibold",
                    description: "!text-zinc-400",
                    actionButton: "!rounded-full !bg-white !px-3 !font-semibold !text-black",
                    cancelButton: "!rounded-full !border !border-white/15 !bg-white/5 !text-white",
                    closeButton: "!border-white/10 !bg-[#0d0e1a] !text-zinc-400 hover:!text-white",
                    success: "[&_[data-icon]]:!text-emerald-400",
                    error: "[&_[data-icon]]:!text-red-400",
                    warning: "[&_[data-icon]]:!text-amber-400",
                    info: "[&_[data-icon]]:!text-brand-400",
                    loading: "[&_[data-icon]]:!text-brand-400",
                    ...toastOptions?.classNames,
                },
            }}
            {...props}
        />
    )
}

export { toast }
