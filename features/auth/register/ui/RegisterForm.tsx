'use client'

import { useAppDispatch, useAppSelector } from '@/app/_store/hooks'
import { useForm } from 'react-hook-form'
import { RegisterRequest } from '../api/types'
import { clearData } from '../model/slice'
import { fetchRegister } from '../model/thunks'

const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-60'

export default function RegisterForm() {

    const dispatch = useAppDispatch()
    const { loading, error, successMessage } = useAppSelector((s) => s.register)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegisterRequest>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            role_id: 3
        }
    })

    const onSubmit = async (data: RegisterRequest) => {
        dispatch(clearData())
        try {
            await dispatch(fetchRegister(data)).unwrap()
            reset()
        } catch {
            // el error ya queda reflejado en el estado de Redux (state.register.error)
        }
    }

    return (
        <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="space-y-2">
                <label
                    htmlFor="username"
                    className="block text-sm font-medium text-zinc-300"
                >
                    Nombre de usuario
                </label>

                <input
                    id="username"
                    type="text"
                    autoComplete="username"
                    placeholder="Escribe tu nombre de usuario aquí"
                    disabled={loading}
                    className={inputClass}
                    {...register("username", {
                        required: "El nombre de usuario es obligatorio",
                        minLength: {
                            value: 4,
                            message: "El nombre de usuario debe tener al menos 4 caracteres",
                        },
                        pattern: {
                            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                            message: "El nombre de usuario solo puede contener letras y espacios",
                        },
                    })}
                />
                {errors.username && (
                    <p className="text-sm text-red-400">{errors.username.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300"
                >
                    Email
                </label>

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

                {errors.email && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-300"
                >
                    Contraseña
                </label>

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

                {errors.password && (
                    <p className="text-sm text-red-400">{errors.password.message}</p>
                )}
            </div>

            {error && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    {error}
                </p>
            )}

            {successMessage && (
                <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                    {successMessage}
                </p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
                {loading ? "Creando cuenta..." : "Registrarse"}
            </button>
        </form>
    )
}
