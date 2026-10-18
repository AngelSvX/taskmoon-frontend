import LoginForm from "@/features/auth/login/ui/LoginForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Inicia sesión — taskmoon",
};

export default function LoginPage() {
    return (
        <div className="glass card-glow w-full max-w-md rounded-2xl p-7 sm:p-9">
            <div className="text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                    Inicia sesión
                </h1>
                <p className="mt-2 text-sm text-zinc-400">
                    Bienvenido de nuevo. Introduce tu correo electrónico para continuar.
                </p>
            </div>

            <LoginForm />

            <p className="mt-6 text-center text-sm text-zinc-500">
                ¿No tienes cuenta?
                <Link
                    href="/register"
                    className="font-medium text-brand-300 hover:text-brand-200"
                >
                    Regístrate
                </Link>
            </p>
        </div>
    );
}