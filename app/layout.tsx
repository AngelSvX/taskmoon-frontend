import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoreProvider } from "./_store/store-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taskmoon.app"),
  title: {
    default: "taskmoon — Gestiona tus tareas mientras el mundo duerme",
    template: "%s · taskmoon",
  },
  description:
    "taskmoon es el planificador con enfoque nocturno para equipos y personas: tableros, automatizaciones, modo enfoque y reportes claros. Ordena tu trabajo sin fricción.",
  keywords: [
    "gestor de tareas",
    "productividad",
    "planificador",
    "tableros kanban",
    "gestión de proyectos",
    "modo enfoque",
  ],
  authors: [{ name: "taskmoon" }],
  openGraph: {
    title: "taskmoon — Gestiona tus tareas mientras el mundo duerme",
    description:
      "El planificador con enfoque nocturno para equipos y personas. Tableros, automatizaciones, modo enfoque y reportes claros.",
    url: "https://taskmoon.app",
    siteName: "taskmoon",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "taskmoon — Gestiona tus tareas mientras el mundo duerme",
    description:
      "El planificador con enfoque nocturno para equipos y personas.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
