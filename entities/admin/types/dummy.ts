import { TimelineEvent } from "@/shared/ui";

const ago = (minutes: number) => new Date(Date.now() - minutes * 60_000);

export const ACTIVITY: TimelineEvent[] = [
  {
    id: 1,
    action: "update",
    user: { name: "Ángel" },
    title: "editó el proyecto “Lanzamiento Q4”",
    timestamp: ago(40),
    changes: [
      { field: "Nombre", from: "Lanzamiento", to: "Lanzamiento Q4" },
      { field: "Descripción", from: "", to: "Campaña de lanzamiento del último trimestre" },
    ],
  },
  {
    id: 2,
    action: "create",
    user: { name: "Ángel" },
    title: "creó el proyecto “Lanzamiento Q4”",
    timestamp: ago(5 * 60),
  },
  {
    id: 3,
    action: "invite",
    user: { name: "Ángel" },
    title: "invitó a Sara Klein a “Onboarding de clientes”",
    description: "Rol asignado: Editora",
    timestamp: ago(26 * 60),
  },
  {
    id: 4,
    action: "archive",
    user: { name: "Ángel" },
    title: "archivó “Auditoría de seguridad”",
    timestamp: ago(21 * 24 * 60),
  },
  {
    id: 5,
    action: "settings",
    user: { name: "Ángel" },
    title: "cambió el plan de la cuenta",
    timestamp: ago(32 * 24 * 60),
    changes: [{ field: "Plan", from: "Luna", to: "Órbita" }],
  },
];