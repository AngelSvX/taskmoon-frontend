import z from "zod";

export const Workspace = z.object({
    id: z.bigint(),
    owner_id: z.bigint(),
    name: z.string().min(3).max(120),
    slug: z.string().min(3).max(140),
    status: z.enum(['active', 'archive']),
    setting: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deleted_at: z.date().nullable(),
    description: z.string().min(5).max(191).nullable(),
    icon: z.string().min(1).max(191).nullable(),
})