import RegisterForm from "@/features/auth/register/ui/RegisterForm";
import type { Metadata } from "next";
import { Heading, Text } from "@/shared/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crea tu cuenta — taskmoon",
};

export default function RegisterPage() {
  return (
    <div className="glass card-glow w-full max-w-md rounded-2xl p-7 sm:p-9">
      <div className="text-center">
        <Heading as="h1" size="title">
          Crea tu cuenta
        </Heading>
        <Text className="mt-2">
          Empieza a organizar tus noches con taskmoon. Es gratis.
        </Text>
      </div>

      <RegisterForm />

      <Text variant="muted" align="center" className="mt-6">
        ¿Ya tienes cuenta?
        <Link href="/login" className="font-medium text-brand-300 hover:text-brand-200">
          Inicia sesión
        </Link>
      </Text>
    </div>
  );
}
