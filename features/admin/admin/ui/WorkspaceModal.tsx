'use client'

import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { Icon } from "@/app/components/icons";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm, useWatch } from "react-hook-form";
import { UpdateWorkspaceRequest } from "../api/types";
import { WORKSPACE_ICONS, getWorkspaceIcon } from "../config/workspace-icons";
import { closeWorkspaceModal } from "../model/slice";
import { createWorkspace, updateWorkspaceBySlug } from "../model/thunks";

type WorkspaceForm = UpdateWorkspaceRequest;

const NAME_MAX = 40;
const DESCRIPTION_MAX = 160;

const DEFAULT_VALUES: WorkspaceForm = {
    name: "",
    description: "",
    icon: "one"
}

const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-60'

export default function WorkspaceModal() {
    const open = useAppSelector((s) => s.admin.workspaceModalOpen);
    const editingWorkspace = useAppSelector((s) => s.admin.editingWorkspace);
    const loading = useAppSelector((s) => s.admin.loading);
    const error = useAppSelector((s) => s.admin.error);

    const { userData } = useAppSelector((s) => s.login);

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { errors }
    } = useForm<WorkspaceForm>({
        defaultValues: DEFAULT_VALUES
    })

    const isEditing = editingWorkspace !== null;

    const name = useWatch({ control, name: "name" });
    const description = useWatch({ control, name: "description" });
    const selectedIcon = getWorkspaceIcon(useWatch({ control, name: "icon" }));

    const close = () => {
        dispatch(closeWorkspaceModal());
        reset(DEFAULT_VALUES);
    }

    useEffect(() => {
        if (!open) return;
        reset(editingWorkspace
            ? {
                name: editingWorkspace.name,
                description: editingWorkspace.description ?? "",
                icon: getWorkspaceIcon(editingWorkspace.icon).key
            }
            : DEFAULT_VALUES
        );
    }, [open, editingWorkspace, reset]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const onSubmit = (data: WorkspaceForm) => {
        if (isEditing) {
            dispatch(updateWorkspaceBySlug({
                slug: editingWorkspace.slug,
                owner_id: editingWorkspace.owner_id,
                request: {
                    name: data.name,
                    description: data.description,
                    icon: data.icon
                }
            }))
        } else {
            dispatch(createWorkspace({
                owner_id: userData!.id,
                name: data.name,
                description: data.description,
                icon: data.icon
            }))
        }
        close()
    }

    if (!open) return null;

    return createPortal(
        <div
            className="animate-fade-in fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-6"
            onClick={close}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="workspace-modal-title"
                onClick={(e) => e.stopPropagation()}
                className="animate-modal-in relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c14] shadow-2xl shadow-black/60"
            >
                <div className="pointer-events-none absolute -top-32 -right-20 size-72 rounded-full bg-brand-500/20 blur-[110px]" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 size-64 rounded-full bg-aurora/10 blur-[110px]" />

                <div className="relative flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
                            {isEditing ? <Icon.Pencil className="size-3.5" /> : <Icon.Sparkle className="size-3.5" />}
                            {isEditing ? "Editar proyecto" : "Nuevo proyecto"}
                        </span>
                        <h2
                            id="workspace-modal-title"
                            className="mt-3 text-xl font-semibold tracking-tight text-white"
                        >
                            {isEditing ? "Edita tu espacio de trabajo" : "Crea tu espacio de trabajo"}
                        </h2>
                        <p className="mt-1 text-sm text-zinc-400">
                            {isEditing
                                ? "Actualiza el nombre, la descripción o el ícono de tu proyecto."
                                : "Dale un nombre, una descripción y un ícono que lo identifique."}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Cerrar"
                        className="grid size-9 shrink-0 place-items-center rounded-lg text-zinc-500 transition hover:bg-white/5 hover:text-white"
                    >
                        <Icon.Close className="size-4.5" />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="relative"
                >
                    <div className="grid gap-8 px-6 py-6 sm:px-8 md:grid-cols-[1fr_17rem]">
                        <div className="space-y-5">
                            <fieldset className="space-y-2.5">
                                <legend className="mb-2.5 block text-sm font-medium text-zinc-300">
                                    Ícono
                                </legend>
                                <input type="hidden" {...register("icon", { required: true })} />
                                <div className="grid grid-cols-4 gap-2.5">
                                    {WORKSPACE_ICONS.map((ic) => {
                                        const active = ic.key === selectedIcon.key;
                                        return (
                                            <button
                                                key={ic.key}
                                                type="button"
                                                aria-label={ic.label}
                                                aria-pressed={active}
                                                disabled={loading}
                                                onClick={() => setValue("icon", ic.key, { shouldDirty: true })}
                                                className={`group relative grid aspect-square place-items-center rounded-xl border bg-gradient-to-br to-transparent transition-all ${ic.tint} ${active
                                                    ? "border-brand-400/70 ring-2 ring-brand-500/40"
                                                    : "border-white/10 opacity-60 hover:border-white/20 hover:opacity-100"
                                                    }`}
                                            >
                                                <Image
                                                    src={ic.src}
                                                    alt=""
                                                    className="size-8 transition-transform group-hover:scale-110 sm:size-9"
                                                />
                                                {active && (
                                                    <span className="absolute -top-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-brand-500 text-white ring-2 ring-[#0b0c14]">
                                                        <Icon.Check className="size-3" />
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </fieldset>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="ws-name" className="block text-sm font-medium text-zinc-300">
                                        Nombre
                                    </label>
                                    <span className="text-[11px] text-zinc-500">
                                        {name.length}/{NAME_MAX}
                                    </span>
                                </div>
                                <input
                                    id="ws-name"
                                    type="text"
                                    autoFocus
                                    autoComplete="off"
                                    maxLength={NAME_MAX}
                                    placeholder="Ej. Cursos"
                                    disabled={loading}
                                    className={inputClass}
                                    {...register("name", {
                                        required: "El nombre es obligatorio",
                                        validate: (v) => v.trim().length > 0 || "El nombre es obligatorio",
                                        maxLength: { value: NAME_MAX, message: `Máximo ${NAME_MAX} caracteres` },
                                    })}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-400">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="ws-description" className="block text-sm font-medium text-zinc-300">
                                        Descripción
                                    </label>
                                    <span className="text-[11px] text-zinc-500">
                                        {description.length}/{DESCRIPTION_MAX}
                                    </span>
                                </div>
                                <textarea
                                    id="ws-description"
                                    rows={3}
                                    maxLength={DESCRIPTION_MAX}
                                    placeholder="¿De qué trata este proyecto?"
                                    disabled={loading}
                                    className={`${inputClass} resize-none leading-6`}
                                    {...register("description", {
                                        maxLength: { value: DESCRIPTION_MAX, message: `Máximo ${DESCRIPTION_MAX} caracteres` },
                                    })}
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-400">{errors.description.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <span className="block text-sm font-medium text-zinc-300">
                                Vista previa
                            </span>
                            <article className="glass relative flex min-h-[220px] flex-col rounded-2xl p-5">
                                <div className="flex items-start justify-between">
                                    <span
                                        key={selectedIcon.key}
                                        className={`animate-modal-in grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br to-transparent ${selectedIcon.tint}`}
                                    >
                                        <Image src={selectedIcon.src} alt="" className="size-6" />
                                    </span>
                                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                                        Activo
                                    </span>
                                </div>

                                <h3 className={`mt-4 truncate text-base font-semibold ${name.trim() ? "text-white" : "text-zinc-600"}`}>
                                    {name.trim() || "Nombre del proyecto"}
                                </h3>
                                <p className={`mt-1.5 line-clamp-3 break-words text-sm leading-5 ${description.trim() ? "text-zinc-400" : "text-zinc-600"}`}>
                                    {description.trim() || "Aquí aparecerá la descripción de tu proyecto."}
                                </p>

                                <div className="mt-auto space-y-3 pt-5">
                                    <div>
                                        <div className="mb-1.5 flex items-center justify-between text-[11px] text-zinc-500">
                                            <span>0/0 tareas</span>
                                            <span>0%</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-aurora/60 text-[10px] font-semibold text-black ring-2 ring-[#07080c]">
                                            A
                                        </span>
                                        <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                                            <Icon.Clock className="size-3.5" />
                                            ahora
                                        </span>
                                    </div>
                                </div>
                            </article>
                            <p className="text-xs leading-5 text-zinc-500">
                                Así se verá en tu lista de proyectos.
                            </p>
                        </div>
                    </div>

                    {error && (
                        <p className="mx-6 mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300 sm:mx-8">
                            {error}
                        </p>
                    )}

                    <div className="flex flex-col-reverse gap-3 border-t border-white/10 bg-white/[0.015] px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
                        <button
                            type="button"
                            onClick={close}
                            disabled={loading}
                            className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 disabled:opacity-60"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                        >
                            {isEditing ? (
                                <>
                                    <Icon.Check className="size-4" />
                                    {loading ? "Guardando…" : "Guardar cambios"}
                                </>
                            ) : (
                                <>
                                    <Icon.Plus className="size-4 transition-transform group-hover:rotate-90" />
                                    {loading ? "Creando…" : "Crear proyecto"}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    )
}
