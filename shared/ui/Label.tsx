import { cn } from "@/lib/utils"

type LabelProps = React.LabelHTMLAttributes<HTMLElement> & {
    /** `legend` para fieldsets y `span` cuando no hay un control asociado. */
    as?: "label" | "legend" | "span"
}

export default function Label({ as: Tag = "label", className, ...props }: LabelProps) {
    return (
        <Tag
            className={cn("block text-sm font-medium text-zinc-300", className)}
            {...props}
        />
    )
}

export type { LabelProps }
