import { cn } from "@/lib/utils"
import { Skeleton as ShadcnSkeleton } from "@/shared/_providers/shadcn/skeleton"

export default function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <ShadcnSkeleton
            className={cn("rounded-lg bg-white/[0.06]", className)}
            {...props}
        />
    )
}
