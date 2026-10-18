import type { Metadata } from "next";
import { SiteHeader } from "./components/site-header";
import { Reveal } from "./components/reveal";
import { Logo } from "./components/logo";
import { Icon, Stars } from "./components/icons";

export const metadata: Metadata = {
  title: "taskmoon — Gestiona tus tareas mientras el mundo duerme",
};

const FEATURES = [
  {
    icon: Icon.Board,
    title: "Tableros que se adaptan",
    body: "Kanban, lista, calendario o línea de tiempo. Cambia de vista sin perder contexto y arrastra tareas entre columnas al instante.",
  },
  {
    icon: Icon.Bolt,
    title: "Automatizaciones sin código",
    body: "«Cuando pase esto, haz aquello». Asigna, etiqueta, mueve y notifica en automático con reglas que configuras en segundos.",
  },
  {
    icon: Icon.Focus,
    title: "Modo enfoque nocturno",
    body: "Un temporizador Pomodoro integrado, silencio de notificaciones y una vista limpia con solo la tarea que importa ahora.",
  },
  {
    icon: Icon.Users,
    title: "Colaboración en tiempo real",
    body: "Comentarios, menciones y asignaciones que todo el equipo ve al momento. Sin hilos de correo interminables.",
  },
  {
    icon: Icon.Calendar,
    title: "Calendario unificado",
    body: "Conecta Google Calendar y Outlook. taskmoon reserva tiempo real para tus tareas y evita que te sobrecargues.",
  },
  {
    icon: Icon.Chart,
    title: "Reportes que se entienden",
    body: "Carga de trabajo, cumplimiento de plazos y velocidad del equipo en paneles claros, listos para tu reunión semanal.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Vuelca todo",
    body: "Captura ideas, pendientes y proyectos en un solo lugar. Importa desde Trello, Asana, Notion o un CSV en un clic.",
  },
  {
    n: "02",
    title: "Organiza con calma",
    body: "Agrupa por proyecto, prioridad o persona. Deja que las automatizaciones ordenen lo repetitivo por ti.",
  },
  {
    n: "03",
    title: "Avanza cada noche",
    body: "Entra al modo enfoque, cierra tus bloques y despierta con el trabajo hecho y el panel al día.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Pasamos de tres herramientas a una. El modo enfoque cambió por completo cómo cierro mi día.",
    name: "Marina Ochoa",
    role: "Product Lead · Lumen",
  },
  {
    quote:
      "Las automatizaciones nos ahorran horas cada semana. Configurarlas tomó una tarde, el retorno fue inmediato.",
    name: "Diego Fuentes",
    role: "COO ·Ravena Studio",
  },
  {
    quote:
      "Por fin un gestor que no me abruma. Abro taskmoon y sé exactamente qué sigue.",
    name: "Sara Klein",
    role: "Freelance Designer",
  },
];

const PLANS = [
  {
    name: "Luna",
    price: "0",
    tagline: "Para empezar a ordenar tu día.",
    features: [
      "Hasta 3 proyectos",
      "Tableros y lista",
      "Modo enfoque básico",
      "Apps móviles y de escritorio",
    ],
    cta: "Crear cuenta",
    highlight: false,
  },
  {
    name: "Órbita",
    price: "8",
    tagline: "Para profesionales que viven de sus entregas.",
    features: [
      "Proyectos ilimitados",
      "Todas las vistas + calendario",
      "Automatizaciones ilimitadas",
      "Reportes personales",
      "Integraciones con calendario",
    ],
    cta: "Probar 14 días gratis",
    highlight: true,
  },
  {
    name: "Constelación",
    price: "14",
    tagline: "Para equipos que necesitan visibilidad total.",
    features: [
      "Todo lo de Órbita",
      "Roles y permisos",
      "Paneles de equipo",
      "SSO y registro de auditoría",
      "Soporte prioritario",
    ],
    cta: "Hablar con ventas",
    highlight: false,
  },
];

const FAQ = [
  {
    q: "¿Puedo migrar desde otra herramienta?",
    a: "Sí. taskmoon importa desde Trello, Asana, Todoist, Notion y archivos CSV manteniendo columnas, etiquetas y fechas. La mayoría de equipos migra en menos de una hora.",
  },
  {
    q: "¿Funciona sin conexión?",
    a: "Las apps de escritorio y móvil guardan tus cambios localmente y sincronizan en cuanto vuelves a tener red. Nunca pierdes trabajo.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Cifrado en tránsito y en reposo, servidores en la UE y exportación completa en cualquier momento. No entrenamos modelos con tu contenido.",
  },
  {
    q: "¿Hay descuento para equipos o estudiantes?",
    a: "El plan Constelación tiene precio por volumen a partir de 10 asientos, y ofrecemos licencias gratuitas para estudiantes y proyectos sin ánimo de lucro.",
  },
];

const MARQUEE = [
  "Lumen",
  "Ravena Studio",
  "Northwind",
  "Kaizen Labs",
  "Aster & Co.",
  "Blue Meridian",
  "Fondo Verde",
  "Helios",
];

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="animate-drift absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="animate-drift absolute top-[30%] -right-40 size-[34rem] rounded-full bg-aurora/10 blur-[130px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-0 size-[30rem] rounded-full bg-brand-500/10 blur-[120px]" />
      </div>

      <SiteHeader />

      <main className="flex-1">
        <section className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
              >
                <span className="relative flex size-2">
                  <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-brand-400" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-400" />
                </span>
                Nuevo · Planificación asistida por IA
                <Icon.Arrow className="size-3.5" />
              </a>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
                Gestiona tus tareas
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient">mientras el mundo duerme</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
                taskmoon reúne tus proyectos, automatizaciones y un modo enfoque
                sin distracciones en un solo lugar oscuro y silencioso. Para
                terminar el día con la mente en calma.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  Empezar gratis
                  <Icon.Arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Ver cómo funciona
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-5 text-xs text-zinc-500">
                Sin tarjeta de crédito · Plan gratuito para siempre · Cancela
                cuando quieras
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="card-glow animate-floaty mx-auto mt-16 max-w-4xl rounded-2xl">
              <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="size-3 rounded-full bg-red-400/70" />
                  <span className="size-3 rounded-full bg-amber-400/70" />
                  <span className="size-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 text-xs text-zinc-500">
                    taskmoon · Lanzamiento Q4
                  </span>
                </div>

                <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
                  {[
                    {
                      name: "Hoy",
                      accent: "bg-brand-500",
                      tasks: [
                        { t: "Cerrar brief de campaña", done: true },
                        { t: "Revisar diseño del hero", done: false },
                        { t: "Llamada con Ravena", done: false },
                      ],
                    },
                    {
                      name: "En curso",
                      accent: "bg-aurora",
                      tasks: [
                        { t: "Documentar API pública", done: false },
                        { t: "Migración de datos", done: false },
                      ],
                    },
                    {
                      name: "Hecho",
                      accent: "bg-zinc-500",
                      tasks: [
                        { t: "Publicar changelog", done: true },
                        { t: "Onboarding de Sara", done: true },
                      ],
                    },
                  ].map((col) => (
                    <div
                      key={col.name}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-3"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`size-1.5 rounded-full ${col.accent}`} />
                        <span className="text-xs font-medium text-zinc-300">
                          {col.name}
                        </span>
                        <span className="ml-auto text-[11px] text-zinc-600">
                          {col.tasks.length}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {col.tasks.map((task) => (
                          <div
                            key={task.t}
                            className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.03] p-2.5"
                          >
                            <span
                              className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-[5px] border ${
                                task.done
                                  ? "border-brand-500 bg-brand-500 text-black"
                                  : "border-white/20"
                              }`}
                            >
                              {task.done && <Icon.Check className="size-3" />}
                            </span>
                            <span
                              className={`text-[13px] leading-snug ${
                                task.done
                                  ? "text-zinc-500 line-through"
                                  : "text-zinc-200"
                              }`}
                            >
                              {task.t}
                            </span>
                          </div>
                        ))}
                        <button className="flex w-full items-center gap-1.5 rounded-lg px-2 py-1.5 text-[12px] text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-300">
                          <Icon.Plus className="size-3.5" />
                          Añadir tarea
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-white/5 bg-white/[0.015] py-8">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-zinc-600">
            Equipos que planifican de noche con taskmoon
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
            <div className="animate-marquee flex w-max gap-14 pr-14">
              {[...MARQUEE, ...MARQUEE].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-lg font-semibold tracking-tight text-zinc-500"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { k: "12.400+", v: "equipos activos cada semana" },
              { k: "6,5 h", v: "ahorradas por persona al mes" },
              { k: "4.9/5", v: "valoración media en las tiendas" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 90}>
                <div className="glass card-glow rounded-2xl p-6 text-center">
                  <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-1.5 text-sm text-zinc-400">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
        >
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
                <Icon.Sparkle className="size-3.5" />
                Funciones
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Todo lo que necesitas, nada que te estorbe
              </h2>
              <p className="mt-4 text-pretty text-zinc-400">
                Cada función está pensada para reducir decisiones, no para
                sumarte pantallas.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <article className="glass card-glow group h-full rounded-2xl p-6 transition-colors hover:bg-white/[0.05]">
                  <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/25 to-transparent text-brand-200">
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="how"
          className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
        >
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
                Cómo funciona
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                De la nube mental a la calma en tres pasos
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 110}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                  <span className="text-sm font-mono text-brand-400">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.body}
                  </p>
                  {i < STEPS.length - 1 && (
                    <Icon.Arrow className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-white/15 md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="glass card-glow grid items-center gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
                  <Icon.Focus className="size-3.5" />
                  Modo enfoque
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Una tarea. Cero ruido.
                </h2>
                <p className="mt-4 text-zinc-400">
                  taskmoon oscurece todo lo demás, silencia las notificaciones y
                  arranca un temporizador. Cuando terminas el bloque, pasa
                  automáticamente a lo siguiente en tu plan del día.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Temporizador Pomodoro y descansos guiados",
                    "Sonidos ambiente y bloqueo de sitios opcional",
                    "Resumen de lo logrado al cerrar la sesión",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                        <Icon.Check className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative rounded-2xl border border-white/10 bg-[#0a0b12] p-6">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>Sesión de enfoque</span>
                  <span className="flex items-center gap-1.5">
                    <Icon.Bell className="size-3.5" />
                    Silenciado
                  </span>
                </div>
                <div className="my-8 text-center">
                  <div className="relative mx-auto grid size-40 place-items-center">
                    <svg viewBox="0 0 100 100" className="animate-spin-slow absolute size-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#g)"
                        strokeWidth="3"
                        strokeDasharray="200 283"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#7c6cff" />
                          <stop offset="100%" stopColor="#4fe0d5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div>
                      <div className="font-mono text-3xl font-semibold text-white">
                        18:24
                      </div>
                      <div className="text-[11px] text-zinc-500">restante</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <div className="text-[11px] uppercase tracking-wide text-zinc-500">
                    Ahora
                  </div>
                  <div className="mt-1 text-sm text-white">
                    Revisar diseño del hero
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Stars className="justify-center" />
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Gente que ya duerme más tranquila
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="glass card-glow flex h-full flex-col rounded-2xl p-6">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-sm leading-6 text-zinc-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-aurora/60 text-xs font-semibold text-black">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {t.name}
                      </span>
                      <span className="block text-xs text-zinc-500">
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
        >
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
                Precios
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Un plan para cada fase de tu órbita
              </h2>
              <p className="mt-4 text-zinc-400">
                Precios por usuario y mes, facturación anual. Cambia o cancela
                cuando quieras.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-7 ${
                    plan.highlight
                      ? "border border-brand-500/50 bg-gradient-to-b from-brand-500/12 to-transparent"
                      : "glass"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold text-black">
                      Más elegido
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{plan.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {plan.price}€
                    </span>
                    <span className="text-sm text-zinc-500">/usuario/mes</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-zinc-300"
                      >
                        <Icon.Check className="mt-0.5 size-4 shrink-0 text-brand-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#login"
                    className={`mt-7 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      plan.highlight
                        ? "bg-white text-black"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
              <Icon.Shield className="size-4" />
              Garantía de devolución de 30 días. Datos alojados en la UE.
            </p>
          </Reveal>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mx-auto w-full max-w-3xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
        >
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 70}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Icon.Plus className="size-5 shrink-0 text-zinc-500 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
          <Reveal>
            <div className="card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-[#0b0d16] to-[#0b0d16] p-10 text-center sm:p-16">
              <div className="animate-drift absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand-500/30 blur-[100px]" />
              <div className="relative">
                <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Esta noche, cierra el día con todo en su sitio
                </h2>
                <p className="mx-auto mt-4 max-w-md text-zinc-400">
                  Crea tu cuenta gratis en menos de un minuto. Sin tarjeta, sin
                  compromiso.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#login"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto"
                  >
                    Empezar gratis
                    <Icon.Arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#features"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    Explorar funciones
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="max-w-xs">
              <Logo />
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                El planificador con enfoque nocturno para equipos y personas que
                quieren avanzar sin ruido.
              </p>
            </div>

            {[
              {
                title: "Producto",
                links: ["Funciones", "Precios", "Integraciones", "Novedades"],
              },
              {
                title: "Recursos",
                links: ["Blog", "Guías", "Centro de ayuda", "Estado del servicio"],
              },
              {
                title: "Empresa",
                links: ["Sobre nosotros", "Empleo", "Contacto", "Prensa"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-600 sm:flex-row">
            <p>© {new Date().getFullYear()} taskmoon. Todos los derechos reservados.</p>
            <div className="flex gap-5">
              <a href="#" className="transition-colors hover:text-zinc-300">
                Privacidad
              </a>
              <a href="#" className="transition-colors hover:text-zinc-300">
                Términos
              </a>
              <a href="#" className="transition-colors hover:text-zinc-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
