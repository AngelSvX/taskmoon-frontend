import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Logo } from "../components/logo";
import { Icon } from "../components/icons";
import LogoutButton from "../components/logout-button";
import { jwtDecode } from "jwt-decode";
import type { DecodedToken } from "@/features/auth/login/model/types";
import UserHydrator from "@/features/auth/login/ui/UserHydrator";


const NAV = [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#plantillas", label: "Plantillas" },
    { href: "#actividad", label: "Actividad" },
];

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");

    if (!token) {
        redirect("/login");
    }
    
    const user = jwtDecode<DecodedToken>(token.value);

    return (
        <div>
            <UserHydrator user={user} />
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-grid" />
                <div className="animate-drift absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[140px]" />
                <div className="animate-drift absolute top-[35%] -right-40 size-[30rem] rounded-full bg-aurora/10 blur-[130px] [animation-delay:-6s]" />
            </div>

            <div className="flex min-h-svh flex-col">
                <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
                        <div className="flex items-center gap-8">
                            <Link href="/admin" aria-label="taskmoon inicio" className="shrink-0">
                                <Logo />
                            </Link>

                            <nav className="hidden items-center gap-1 md:flex">
                                {NAV.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <button
                                type="button"
                                aria-label="Buscar"
                                className="grid size-9 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
                            >
                                <Icon.Search className="size-4.5" />
                            </button>
                            <button
                                type="button"
                                aria-label="Notificaciones"
                                className="relative grid size-9 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white"
                            >
                                <Icon.Bell className="size-4.5" />
                                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-brand-400" />
                            </button>

                            <div className="mx-1 h-6 w-px bg-white/10 sm:mx-2" />

                            <div className="flex items-center gap-2">
                                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-aurora/60 text-xs font-semibold text-black">
                                    A
                                </span>
                                <LogoutButton />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
