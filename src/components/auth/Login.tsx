'use client'

import { signIn } from "next-auth/react"
import Logo from '../../../public/logo.png'
import Image from "next/image"

export default function Login() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-[#12a37f]">
      <Image 
      src={Logo}
      alt="logo"
      />
      <button 
      className="text-white font-bold text-3xl italic animate-pulse"
      onClick={() => signIn('google')}
      >
        Login to continue
      </button>
    </div>
  )
}
