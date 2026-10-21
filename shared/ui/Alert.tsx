import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const alertVariants = cva("rounded-lg border p-3 text-sm", {
    variants: {
        variant: {
            error: "border-red-500/30 bg-red-500/10 text-red-300",
            success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
            warning: "border-amber-500/30 bg-amber-500/10 text-amber-300",
            info: "border-brand-500/30 bg-brand-500/10 text-brand-200",
        },
    },
    defaultVariants: {
        variant: "info",
    },
})

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>

/** Mensaje de estado en bloque (errores de servidor, confirmaciones, avisos). */
export default function Alert({ variant, className, children, ...props }: AlertProps) {
    if (!children) return null;

    return (
        <div
            role={variant === "error" ? "alert" : "status"}
            className={cn(alertVariants({ variant }), className)}
            {...props}
        >
            {children}
        </div>
    )
}

export { alertVariants }
export type { AlertProps }
