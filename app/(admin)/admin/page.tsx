"use client";

import { useAppSelector } from "@/app/_store/hooks";
import { Icon } from "@/app/components/icons";
import { ACTIVITY } from "@/entities/admin/types/dummy";
import WorkspaceHeader from "@/features/admin/admin/ui/WorkspaceHeader";
import WorkspaceList from "@/features/admin/admin/ui/WorkspaceList";
import { AvatarGroup, Badge, Button, Heading, Progress, StatCard, Text, Timeline, type TimelineEvent } from "@/shared/ui";

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

export default function AdminPage() {

  const workspaceList = useAppSelector((s) => s.admin.workspaceList);
  const loadingWorkspaces = workspaceList === null;

  const projectsUsed = workspaceList?.filter((w) => w.status === "active").length ?? 0;
  const projectsLimit = 3;

  return (
    <div className="space-y-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="brand" size="md">
            <Icon.Sparkle className="size-3.5" />
            Panel de tu cuenta
          </Badge>
          <Heading as="h1" size="page" className="mt-4">
            Buenas noches, Ángel
          </Heading>
          <Text className="mt-2 max-w-xl leading-6">
            Crea, organiza y configura los proyectos de tu cuenta. Entra a uno
            para abrir su espacio de trabajo.
          </Text>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button variant="secondary">
            Importar
          </Button>
          <Button variant="primary">
            <Icon.Plus className="transition-transform group-hover:rotate-90" />
            Nuevo Proyecto
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Proyectos activos", value: String(projectsUsed), icon: Icon.Layers, loading: loadingWorkspaces },
          { label: "Tareas totales", value: "66", icon: Icon.Board },
          { label: "Miembros invitados", value: "5", icon: Icon.Users },
          { label: "Automatizaciones", value: "12", icon: Icon.Bolt },
        ].map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={s.icon}
            iconTone={"brand"}
            loading={s.loading}
            interactive
          />
        ))}
      </div>
      <div className="card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/15 via-[#0b0d16] to-[#0b0d16] p-6 sm:p-8">
        <div className="animate-drift absolute -top-24 right-10 size-64 rounded-full bg-brand-500/25 blur-[100px]" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <Badge variant="brand">Plan Luna</Badge>
            <Heading as="h2" size="section" className="mt-3">
              {projectsUsed} de {projectsLimit} proyectos usados
            </Heading>
            <Text className="mt-2 pb-6">
              Pasa a Órbita para tener proyectos ilimitados, automatizaciones
              sin límite y reportes personales.
            </Text>
            <Progress value={projectsUsed} max={projectsLimit} tone="aurora" />
          </div>
          <Button variant="primary">
            Mejorar a Órbita
          </Button>
        </div>
      </div>

      <section id="proyectos" className="scroll-mt-24 space-y-6">
        <WorkspaceHeader />
        <WorkspaceList />
      </section>

      <section id="plantillas" className="scroll-mt-24 space-y-6">
        <div>
          <Heading as="h2" size="section">
            Empieza rápido
          </Heading>
          <Text className="mt-1">
            Plantillas listas para crear un proyecto configurado en segundos.
          </Text>
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
              <Heading as="h3" size="sm" className="mt-4">
                {t.name}
              </Heading>
              <Text variant="caption" className="mt-1.5 flex-1 leading-5 text-zinc-400">
                {t.description}
              </Text>
              <Button variant="secondary" className="mt-4">
                Usar plantilla
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section id="actividad" className="grid scroll-mt-24 gap-4 lg:grid-cols-3">
        <div className="glass card-glow rounded-2xl p-6 lg:col-span-2">
          <Heading as="h2" size="base">
            Actividad reciente
          </Heading>
          <Timeline events={ACTIVITY} className="mt-5" />
        </div>

        <div className="glass card-glow flex flex-col rounded-2xl p-6">
          <Heading as="h2" size="base">
            Equipo de la cuenta
          </Heading>
          <Text className="mt-1.5">
            Invita a personas para colaborar en tus proyectos.
          </Text>
          <AvatarGroup users={[
            { name: "Luis Angel"},
            { name: "Maria Elena"},
            { name: "David Hernandez"},
            { name: "Sofia Martinez"},
          ]}/>
          <Button variant="secondary" className="mt-4">
            <Icon.UserPlus/>
            Invitar personas
          </Button>
        </div>
      </section>
    </div>
  );
}
