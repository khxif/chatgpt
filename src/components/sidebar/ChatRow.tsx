'use client'

import { db } from "@/config/firebase "
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"

export default function ChatRow({id}: {id: string}) {

  const { data: session } = useSession()
  const router = useRouter();
  const pathname = usePathname()

  const[active,setActive] = useState(false)
  const[message] = useCollection(
    collection(db,'users',session?.user?.email!,'chats',id,'messages')
  )

  const deleteChat = async() => {

    await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
    router.replace('/')
    
  }
  useEffect(()=>{
    if(!pathname) return;
    setActive(pathname.includes(id))
  },[pathname,id])
  
  return (
    <Link href={`/chat/${id}`} className={`flex items-center justify-between text-white 
    rounded-lg  hover:bg-gray-700/50 transition-all duration-200 cursor-pointer p-4 
    ${active ? 'bg-gray-700/50' : 'bg-transparent'}`}>
      <ChatBubbleLeftIcon className="h-6 w-6" />
      <p className="hidden md:inline overflow-hidden truncate max-w-[70%]">{message?.docs[message.docs.length - 1]?.data().text || 'New Chat'}</p>
      <TrashIcon onClick={deleteChat} className="h-6 w-6 hover:text-red-600" />
    </Link>
  )
}
