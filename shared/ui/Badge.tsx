import { cn } from "@/lib/utils"
import { Badge as ShadcnBadge } from "@/shared/_providers/shadcn/badge"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
    "rounded-full border font-medium focus-visible:ring-2 focus-visible:ring-brand-500",
    {
        variants: {
            variant: {
                default: "border-white/10 bg-white/5 text-zinc-300",
                brand: "border-white/10 bg-white/5 text-brand-200",
                success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
                warning: "border-amber-500/30 bg-amber-500/10 text-amber-300",
                destructive: "border-red-500/30 bg-red-500/10 text-red-300",
                info: "border-aurora/30 bg-aurora/10 text-aurora",
                solid: "border-transparent bg-white text-black",
            },
            size: {
                sm: "px-2 py-0.5 text-[10px] [&>svg]:size-3",
                md: "gap-1.5 px-3 py-1 text-xs [&>svg]:size-3.5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

type BadgeProps = React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & {
        asChild?: boolean
        dot?: boolean
    }

export default function Badge({ className, variant, size, dot = false, asChild, children, ...props }: BadgeProps) {
    return (
        <ShadcnBadge
            variant={null}
            asChild={asChild}
            className={cn(badgeVariants({ variant, size }), className)}
            {...props}
        >
            {dot && !asChild && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
            {children}
        </ShadcnBadge>
    )
}

export { badgeVariants }
export type { BadgeProps }
