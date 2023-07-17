"use client"

import { signOut, useSession } from 'next-auth/react'

export default function Avatar() {

  const { data: session } = useSession()
  
  return (
    <div className='flex items-center justify-center w-full'>
        <img
        onClick={() => signOut()}
        className='w-14 h-14 rounded-full cursor-pointer hover:opacity-50'
         src={session?.user?.image!} 
         alt="user img" 
         />
    </div>
  )
}
