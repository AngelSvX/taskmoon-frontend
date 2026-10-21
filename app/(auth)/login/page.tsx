import LoginForm from "@/features/auth/login/ui/LoginForm";
import type { Metadata } from "next";
import Link from "next/link";
import { Heading, Text } from "@/shared/ui";

export const metadata: Metadata = {
    title: "Inicia sesión — taskmoon",
};

export default function LoginPage() {
    return (
        <div className="glass card-glow w-full max-w-md rounded-2xl p-7 sm:p-9">
            <div className="text-center">
                <Heading as="h1" size="title">
                    Inicia sesión
                </Heading>
                <Text className="mt-2">
                    Bienvenido de nuevo. Introduce tu correo electrónico para continuar.
                </Text>
            </div>

            <LoginForm />

            <Text variant="muted" align="center" className="mt-6">
                ¿No tienes cuenta?
                <Link
                    href="/register"
                    className="font-medium text-brand-300 hover:text-brand-200"
                >
                    Regístrate
                </Link>
            </Text>
        </div>
    );
}