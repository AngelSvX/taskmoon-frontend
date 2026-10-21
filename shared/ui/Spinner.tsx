import { cn } from "@/lib/utils"
import { Spinner as ShadcnSpinner } from "@/shared/_providers/shadcn/spinner"
import { cva, type VariantProps } from "class-variance-authority"

const spinnerVariants = cva("", {
    variants: {
        size: {
            sm: "size-4",
            md: "size-5",
            lg: "size-8",
        },
        tone: {
            brand: "text-brand-400",
            muted: "text-zinc-500",
            white: "text-white",
            current: "text-current",
        },
    },
    defaultVariants: {
        size: "sm",
        tone: "current",
    },
})

type SpinnerProps = React.ComponentProps<"svg"> &
    VariantProps<typeof spinnerVariants> & {
        label?: string
    }

export default function Spinner({ className, size, tone, label = "Cargando", ...props }: SpinnerProps) {
    return (
        <ShadcnSpinner
            aria-label={label}
            className={cn(spinnerVariants({ size, tone }), className)}
            {...props}
        />
    )
}

export { spinnerVariants }
