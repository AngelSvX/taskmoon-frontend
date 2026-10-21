import { cn } from "@/lib/utils"

/** Mensaje de error bajo un campo de formulario. No renderiza nada si no hay mensaje. */
export default function FieldError({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    if (!children) return null;

    return (
        <p className={cn("text-sm text-red-400", className)} {...props}>
            {children}
        </p>
    )
}
