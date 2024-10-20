'use server'
import { redirect } from 'next/navigation'

export async function authenticate(prevState: { status: string}, data: FormData) {
    const uname = data.get('username')
    const pass = data.get('password')
    if (uname === 'admin' && pass === 'admin') {

        redirect('/dashboard')
    }
    return {
        status: "Success"
    }
}