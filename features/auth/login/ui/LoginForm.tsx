'use client'

import { useAppDispatch, useAppSelector } from "@/app/_store/hooks"
import { useForm } from "react-hook-form"
import { LoginRequest } from "../api/types"
import { clearData } from "../model/slice"
import { fetchLogin } from "../model/thunks"
import { Alert, FieldError, Label } from "@/shared/ui"
import { redirect } from "next/navigation"

const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-60'

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const { loading, error, successMessage, isLogged } = useAppSelector((state) => state.login);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<LoginRequest>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: LoginRequest) => {
        dispatch(clearData());
        try {
            await dispatch(fetchLogin(data)).unwrap();
            reset();
        } catch {
            // error ya reflejado en el estado de Redux
        }
    }

    return (
        <div>
            {
                isLogged ?
                    redirect("/admin")
                    :
                    <form
                        className="mt-8 space-y-5"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email
                            </Label>

                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="tuemail@ejemplo.com"
                                disabled={loading}
                                className={inputClass}
                                {...register("email", {
                                    required: "El email es obligatorio",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.(com|net|org|es)$/,
                                        message:
                                            "El email debe terminar en .com, .net, .org o .es",
                                    },
                                })}
                            />

                            <FieldError>{errors.email?.message}</FieldError>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Contraseña
                            </Label>

                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                disabled={loading}
                                className={inputClass}
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 6,
                                        message: "Debe tener al menos 6 caracteres",
                                    },
                                    pattern: {
                                        value: /^[^?\¿:\s]+$/,
                                        message:
                                            "La contraseña no puede contener ?, ¿, : ni espacios",
                                    },
                                    validate: {
                                        notOnlyNumbers: (value) =>
                                            !/^\d+$/.test(value) ||
                                            "La contraseña no puede ser solo números",
                                    },
                                })}
                            />

                            <FieldError>{errors.password?.message}</FieldError>
                        </div>

                        <Alert variant="error">{error}</Alert>

                        <Alert variant="success">{successMessage}</Alert>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                        >
                            {loading ? "Iniciando sesión…" : "Iniciar sesión"}
                        </button>
                    </form>
            }
        </div>
    )
}