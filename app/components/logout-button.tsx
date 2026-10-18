'use client'

import { outLoginCookie } from "@/features/auth/login/model/actions"
import { logout } from "@/features/auth/login/model/slice"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "../_store/hooks"

export default function LogoutButton() {

    const dispatch = useAppDispatch()
    const router = useRouter()

    const onLogout = async () => {
        dispatch(logout())
        await outLoginCookie()
        router.push('/login')
    }

    return (
        <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-red-500/10 hover:text-red-300"
            onClick={onLogout}
        >
            Cerrar sesión
        </button>
    )
}