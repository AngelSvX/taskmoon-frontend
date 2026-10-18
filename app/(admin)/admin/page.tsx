"use client";

import { Icon } from "@/app/components/icons";
import WorkspaceHeader from "@/features/admin/admin/ui/WorkspaceHeader";
import WorkspaceList from "@/features/admin/admin/ui/WorkspaceList";
import { type SVGProps } from "react";

type Accent = "brand" | "aurora" | "zinc";

type Project = {
  id: string;
  name: string;
  description: string;
  icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  accent: Accent;
  status: "activo" | "archivado";
  progress: number;
  tasksDone: number;
  tasksTotal: number;
  members: string[];
  updated: string;
};

const PROJECTS: Project[] = [
  {
    id: "redesign",
    name: "Rediseño taskmoon",
    description:
      "Sprint de diseño y validación del nuevo panel de administración y su sistema visual.",
    icon: Icon.Board,
    accent: "brand",
    status: "activo",
    progress: 68,
    tasksDone: 17,
    tasksTotal: 25,
    members: ["A", "M", "D"],
    updated: "hace 2 h",
  },
  {
    id: "launch",
    name: "Lanzamiento Q4",
    description:
      "Campaña de producto y coordinación con marketing para el cierre de año.",
    icon: Icon.Bolt,
    accent: "aurora",
    status: "activo",
    progress: 42,
    tasksDone: 8,
    tasksTotal: 19,
    members: ["A", "S"],
    updated: "hace 5 h",
  },
  {
    id: "onboarding",
    name: "Onboarding de clientes",
    description:
      "Flujo de bienvenida y checklist para nuevas cuentas del plan Constelación.",
    icon: Icon.Users,
    accent: "brand",
    status: "activo",
    progress: 90,
    tasksDone: 9,
    tasksTotal: 10,
    members: ["A", "D", "M", "S"],
    updated: "ayer",
  },
  {
    id: "audit",
    name: "Auditoría de seguridad",
    description:
      "Revisión trimestral de accesos, roles y registro de auditoría de la cuenta.",
    icon: Icon.Shield,
    accent: "zinc",
    status: "archivado",
    progress: 100,
    tasksDone: 12,
    tasksTotal: 12,
    members: ["A"],
    updated: "hace 3 sem",
  },
];

const TEMPLATES = [
  {
    name: "Tablero Kanban",
    description: "Columnas por estado, ideal para flujo continuo de tareas.",
    icon: Icon.Board,
  },
  {
    name: "Sprint semanal",
    description: "Ciclo corto con objetivos, revisión y retro incluidas.",
    icon: Icon.Bolt,
  },
  {
    name: "Lanzamiento de producto",
    description: "Checklist cruzado entre producto, marketing y soporte.",
    icon: Icon.Calendar,
  },
  {
    name: "Proyecto en blanco",
    description: "Empieza desde cero y configúralo a tu manera.",
    icon: Icon.Layers,
  },
];

const ACTIVITY = [
  { text: "Creaste el proyecto “Lanzamiento Q4”", time: "hace 5 h" },
  { text: "Invitaste a Sara Klein a “Onboarding de clientes”", time: "hace 1 día" },
  { text: "Archivaste “Auditoría de seguridad”", time: "hace 3 sem" },
  { text: "Cambiaste tu plan a Órbita", time: "hace 1 mes" },
];

export default function AdminPage() {

  const projectsUsed = PROJECTS.filter((p) => p.status === "activo").length;
  const projectsLimit = 3;

  return (
    <div className="space-y-14">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
            <Icon.Sparkle className="size-3.5" />
            Panel de tu cuenta
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Buenas noches, Ángel
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
            Crea, organiza y configura los proyectos de tu cuenta. Entra a uno
            para abrir su espacio de trabajo.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Importar
          </button>
          <button
            type="button"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            <Icon.Plus className="size-4 transition-transform group-hover:rotate-90" />
            Nuevo proyecto
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Proyectos activos", value: String(projectsUsed), icon: Icon.Layers },
          { label: "Tareas totales", value: "66", icon: Icon.Board },
          { label: "Miembros invitados", value: "5", icon: Icon.Users },
          { label: "Automatizaciones", value: "12", icon: Icon.Bolt },
        ].map((s) => (
          <div key={s.label} className="glass card-glow rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {s.label}
              </span>
              <s.icon className="size-4 text-zinc-500" />
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Plan usage banner */}
      <div className="card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/15 via-[#0b0d16] to-[#0b0d16] p-6 sm:p-8">
        <div className="animate-drift absolute -top-24 right-10 size-64 rounded-full bg-brand-500/25 blur-[100px]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
              Plan Luna
            </span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
              {projectsUsed} de {projectsLimit} proyectos usados
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Pasa a Órbita para tener proyectos ilimitados, automatizaciones
              sin límite y reportes personales.
            </p>
            <div className="mt-4 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-aurora"
                style={{ width: `${(projectsUsed / projectsLimit) * 100}%` }}
              />
            </div>
          </div>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Mejorar a Órbita
          </button>
        </div>
      </div>

      <section id="proyectos" className="scroll-mt-24 space-y-6">
        <WorkspaceHeader />
        <WorkspaceList />
      </section>

      <section id="plantillas" className="scroll-mt-24 space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Empieza rápido
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Plantillas listas para crear un proyecto configurado en segundos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEMPLATES.map((t) => (
            <div
              key={t.name}
              className="glass card-glow flex flex-col rounded-2xl p-5"
            >
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-200">
                <t.icon className="size-4.5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {t.name}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-5 text-zinc-400">
                {t.description}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-9 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                Usar plantilla
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Activity + team */}
      <section id="actividad" className="grid scroll-mt-24 gap-4 lg:grid-cols-3">
        <div className="glass card-glow rounded-2xl p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-white">
            Actividad reciente
          </h2>
          <ul className="mt-4 space-y-4">
            {ACTIVITY.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-400" />
                <div className="min-w-0">
                  <p className="text-sm text-zinc-200">{a.text}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass card-glow flex flex-col rounded-2xl p-6">
          <h2 className="text-base font-semibold text-white">
            Equipo de la cuenta
          </h2>
          <p className="mt-1.5 text-sm text-zinc-400">
            Invita a personas para colaborar en tus proyectos.
          </p>
          <div className="mt-4 flex -space-x-2">
            {["A", "M", "D", "S"].map((m, i) => (
              <span
                key={i}
                className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-aurora/60 text-xs font-semibold text-black ring-2 ring-[#07080c]"
              >
                {m}
              </span>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Icon.UserPlus className="size-4" />
            Invitar personas
          </button>
        </div>
      </section>
    </div>
  );
}
