"use client"

import { db } from '@/config/firebase '
import { PlusIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function NewChat() {

  const { data: session } = useSession()
  const router = useRouter()

  const addNewChat = async() => {
    const doc = await addDoc(collection(db,'users',session?.user?.email!,'chats'),{
      userId: session?.user?.email,
      createdAt: serverTimestamp(),
    })
    router.push(`/chat/${doc.id}`)
  }

  return (
    <div 
    onClick={addNewChat}
    className="flex items-center justify-center space-x-1 md:space-x-2 p-3 text-white border-2
    rounded-lg border-gray-700 hover:bg-gray-700/50 transition-all duration-200 cursor-pointer"
       >
        <PlusIcon className="h-4 w-4 " />
        <p className=" text-sm">New Chat</p>
      </div>
  )
}
