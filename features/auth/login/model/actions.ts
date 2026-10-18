'use server'

import { cookies } from "next/headers"

export async function setLoginCookie(value: string) {
    const cookieStore = await cookies()
    cookieStore.set('access_token', value)
}

export async function outLoginCookie() {
    const cookieStore = await cookies()
    cookieStore.delete('access_token')
}