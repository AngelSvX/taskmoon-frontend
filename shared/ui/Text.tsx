import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const textVariants = cva("", {
    variants: {
        variant: {
            /** Párrafo descriptivo estándar. */
            body: "text-sm text-zinc-400",
            /** Párrafo destacado (hero, introducciones). */
            lead: "text-pretty text-base leading-7 text-zinc-400 sm:text-lg",
            /** Introducción bajo el título de una sección. */
            intro: "text-pretty text-base text-zinc-400",
            /** Texto con énfasis sobre fondo oscuro (listas, citas). */
            emphasis: "text-sm text-zinc-300",
            /** Texto secundario. */
            muted: "text-sm text-zinc-500",
            /** Texto pequeño: notas, ayudas. */
            caption: "text-xs text-zinc-500",
            /** Texto mínimo: fechas, contadores, metadatos. */
            tiny: "text-[11px] text-zinc-500",
            /** Etiqueta en mayúsculas sobre un dato o sección. */
            eyebrow: "text-xs font-medium uppercase tracking-wide text-zinc-500",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        variant: "body",
    },
})

type TextTag = "p" | "span" | "div" | "small" | "strong" | "blockquote"

type TextProps = React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof textVariants> & {
        as?: TextTag
        truncate?: boolean
    }

export default function Text({ as: Tag = "p", variant, align, truncate = false, className, ...props }: TextProps) {
    return (
        <Tag
            className={cn(textVariants({ variant, align }), truncate && "truncate", className)}
            {...props}
        />
    )
}

export { textVariants }
export type { TextProps }
