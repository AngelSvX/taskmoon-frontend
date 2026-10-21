import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/shared/_providers/shadcn/button"
import { cva, type VariantProps } from "class-variance-authority"
import Spinner from "./Spinner"

const buttonVariants = cva(
    "group font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-brand-500",
    {
        variants: {
            variant: {
                primary: "rounded-full bg-white text-black hover:scale-[1.03] disabled:hover:scale-100",
                secondary: "rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10",
                brand: "rounded-full bg-brand-500 text-white hover:bg-brand-600",
                destructive: "rounded-full border border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20",
                ghost: "rounded-lg font-normal text-zinc-500 hover:bg-white/5 hover:text-white",
                dashed: "rounded-2xl border border-dashed border-white/15 bg-white/[0.015] font-medium text-zinc-300 hover:border-brand-400/40 hover:bg-white/[0.03] hover:text-white",
                link: "font-normal text-zinc-400 hover:text-white",
            },
            size: {
                sm: "h-9 px-4 text-sm",
                md: "h-11 px-6 text-sm",
                lg: "h-12 px-7 text-base",
                icon: "size-9 [&_svg:not([class*='size-'])]:size-4.5",
                "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4.5",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        compoundVariants: [
            { variant: "link", className: "h-auto px-0" },
        ],
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
)

type ButtonProps = React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
        loading?: boolean
        loadingText?: React.ReactNode
    }

export default function Button({
    className,
    variant,
    size,
    fullWidth,
    loading = false,
    loadingText,
    disabled,
    children,
    type = "button",
    asChild,
    ...props
}: ButtonProps) {
    return (
        <ShadcnButton
            variant={null}
            size={null}
            type={asChild ? undefined : type}
            asChild={asChild}
            disabled={disabled || loading}
            aria-busy={loading || undefined}
            className={cn(buttonVariants({ variant, size, fullWidth }), className)}
            {...props}
        >
            {loading && !asChild ? (
                <>
                    <Spinner />
                    {loadingText ?? children}
                </>
            ) : (
                children
            )}
        </ShadcnButton>
    )
}

export { buttonVariants }
export type { ButtonProps }
