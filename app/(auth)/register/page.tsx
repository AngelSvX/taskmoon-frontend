import RegisterForm from "@/features/auth/register/ui/RegisterForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crea tu cuenta — taskmoon",
};

export default function RegisterPage() {
  return (
    <div className="glass card-glow w-full max-w-md rounded-2xl p-7 sm:p-9">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Crea tu cuenta
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Empieza a organizar tus noches con taskmoon. Es gratis.
        </p>
      </div>

      <RegisterForm />

      <p className="mt-6 text-center text-sm text-zinc-500">
        ¿Ya tienes cuenta?
        <Link href="/login" className="font-medium text-brand-300 hover:text-brand-200">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
