import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const headingVariants = cva("font-semibold text-white", {
    variants: {
        size: {
            hero: "text-balance text-4xl leading-[1.08] tracking-tight sm:text-6xl",
            page: "text-3xl tracking-tight sm:text-4xl",
            title: "text-2xl tracking-tight",
            section: "text-xl tracking-tight",
            card: "text-lg",
            base: "text-base",
            sm: "text-sm",
        },
        align: {
            left: "text-left",
            center: "text-center",
        },
    },
    defaultVariants: {
        size: "section",
    },
})

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof headingVariants> & {
        /** Etiqueta HTML; el estilo lo define `size`, así la semántica no depende del tamaño. */
        as?: HeadingTag
        truncate?: boolean
    }

export default function Heading({ as: Tag = "h2", size, align, truncate = false, className, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn(headingVariants({ size, align }), truncate && "truncate", className)}
            {...props}
        />
    )
}

export { headingVariants }
export type { HeadingProps }
