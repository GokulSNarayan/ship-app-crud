'use client'

import { useFormState } from "react-dom"
import { authenticate } from "./actions"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function Login() {
    const [, action] = useFormState(authenticate, { status: '' })
    return (
        <form className="flex flex-col justify-around max-w-lg mx-auto p-6 rounded-lg shadow-md bg-white min-h-60" action={action}>
            <Input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <Button
                type="submit"
                className="bg-black text-white p-2 rounded hover:bg-blue-700"
            >
                Login
            </Button>
        </form>
    )
}