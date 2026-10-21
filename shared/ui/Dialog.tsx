'use client'

import { Icon } from "@/app/components/icons"
import { cn } from "@/lib/utils"
import {
    Dialog as ShadcnDialog,
    DialogClose,
    DialogDescription as ShadcnDialogDescription,
    DialogFooter as ShadcnDialogFooter,
    DialogHeader as ShadcnDialogHeader,
    DialogOverlay as ShadcnDialogOverlay,
    DialogPortal,
    DialogTitle as ShadcnDialogTitle,
    DialogTrigger,
} from "@/shared/_providers/shadcn/dialog"
import { Dialog as DialogPrimitive } from "radix-ui"

export { DialogClose, DialogTrigger }

export default function Dialog(props: React.ComponentProps<typeof ShadcnDialog>) {
    return <ShadcnDialog {...props} />
}

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean
    overlayClassName?: string
}

export function DialogContent({
    className,
    overlayClassName,
    children,
    showCloseButton = true,
    ...props
}: DialogContentProps) {
    return (
        <DialogPortal>
            <ShadcnDialogOverlay
                className={cn("z-[60] bg-black/70 backdrop-blur-sm", overlayClassName)}
            />
            <DialogPrimitive.Content
                data-slot="dialog-content"
                className={cn(
                    "fixed top-1/2 left-1/2 z-[60] flex max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c14] text-white shadow-2xl shadow-black/60 outline-none duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-3 sm:max-w-lg",
                    className
                )}
                {...props}
            >
                <div className="pointer-events-none absolute -top-32 -right-20 size-72 rounded-full bg-brand-500/20 blur-[110px]" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 size-64 rounded-full bg-aurora/10 blur-[110px]" />

                {children}

                {showCloseButton && (
                    <DialogClose
                        aria-label="Cerrar"
                        className="absolute top-5 right-5 grid size-9 place-items-center rounded-lg text-zinc-500 transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none sm:right-6"
                    >
                        <Icon.Close className="size-4.5" />
                    </DialogClose>
                )}
            </DialogPrimitive.Content>
        </DialogPortal>
    )
}

type DialogHeaderProps = React.ComponentProps<"div"> & {
    badge?: React.ReactNode
    badgeIcon?: React.ReactNode
}

export function DialogHeader({ className, badge, badgeIcon, children, ...props }: DialogHeaderProps) {
    return (
        <ShadcnDialogHeader
            className={cn("relative gap-0 border-b border-white/10 px-6 py-5 pr-16 text-left sm:px-8 sm:pr-20", className)}
            {...props}
        >
            {badge && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200 [&_svg]:size-3.5">
                    {badgeIcon}
                    {badge}
                </span>
            )}
            {children}
        </ShadcnDialogHeader>
    )
}

export function DialogTitle({ className, ...props }: React.ComponentProps<typeof ShadcnDialogTitle>) {
    return (
        <ShadcnDialogTitle
            className={cn("text-xl leading-tight font-semibold tracking-tight text-white", className)}
            {...props}
        />
    )
}

export function DialogDescription({ className, ...props }: React.ComponentProps<typeof ShadcnDialogDescription>) {
    return (
        <ShadcnDialogDescription
            className={cn("mt-1 text-sm text-zinc-400", className)}
            {...props}
        />
    )
}

export function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="dialog-body"
            className={cn("relative overflow-y-auto px-6 py-6 sm:px-8", className)}
            {...props}
        />
    )
}

export function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <ShadcnDialogFooter
            className={cn("relative gap-3 border-t border-white/10 bg-white/[0.015] px-6 py-4 sm:px-8", className)}
            {...props}
        />
    )
}
