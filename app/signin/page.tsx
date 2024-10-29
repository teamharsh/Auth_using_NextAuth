'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function SignInComponent() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Sign In</h2>
        <button
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          onClick={async () => {
            await signIn("google")
          }}
        >
          Login with Google
        </button>
        <button
          className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          onClick={async () => {
            await signIn("github")
          }}
        >
          Login with GitHub
        </button>
        <button
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          onClick={async () => {
            const res = await signIn("credentials", {
              username: "",
              password: "",
              redirect: false,
            })
            console.log(res)
            router.push("/")
          }}
        >
          Login with Email
        </button>
      </div>
    </div>
  )
}