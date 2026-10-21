import { cn } from "@/lib/utils"
import {
    Card as ShadcnCard,
    CardAction as ShadcnCardAction,
    CardContent as ShadcnCardContent,
    CardDescription as ShadcnCardDescription,
    CardFooter as ShadcnCardFooter,
    CardHeader as ShadcnCardHeader,
    CardTitle as ShadcnCardTitle,
} from "@/shared/_providers/shadcn/card"

type CardProps = React.ComponentProps<"div"> & {
    glow?: boolean
    interactive?: boolean
}

export function Card({ className, glow = false, interactive = false, ...props }: CardProps) {
    return (
        <ShadcnCard
            className={cn(
                "relative gap-4 rounded-2xl border-white/[0.08] bg-white/[0.03] py-5 text-white shadow-none backdrop-blur-md",
                glow && "card-glow",
                interactive && "transition-colors hover:bg-white/[0.05]",
                className
            )}
            {...props}
        />
    )
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return <ShadcnCardHeader className={cn("gap-1.5 px-5 [.border-b]:pb-5", className)} {...props} />
}

export function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return <ShadcnCardTitle className={cn("text-base font-semibold leading-snug text-white", className)} {...props} />
}

export function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return <ShadcnCardDescription className={cn("line-clamp-2 text-sm leading-5 text-zinc-400", className)} {...props} />
}

export function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return <ShadcnCardAction className={className} {...props} />
}

export function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return <ShadcnCardContent className={cn("px-5", className)} {...props} />
}

export function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <ShadcnCardFooter
            className={cn("mt-auto px-5 text-[11px] text-zinc-500 [.border-t]:border-white/10 [.border-t]:pt-4", className)}
            {...props}
        />
    )
}
