"use client"

import { db } from "@/config/firebase "
import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import Message from "./Message"
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"

type Props = {
  id: string
}

export default function Chat({id}: Props) {

  const {data: session} = useSession()
  const[messages,isLoading] = useCollection(
    query(collection(db,'users',session?.user?.email!,'chats',id,'messages'),orderBy('createdAt','asc'))
  )
  
  return (
    <div className='flex-1 overflow-y-auto text-white scrollbar-hide'>
       {
        messages?.empty && (
          <div className="flex items-center py-10 justify-center font-bold p-1 text-center">
            <p className="flex items-center md:text-2xl justify-center flex-col gap-2">
              Ask anything to ChatGPT
              <ArrowDownCircleIcon className="h-8 w-8 md:h-10 md:w-10 animate-bounce" />
            </p>
          </div>
        )
      }
      {
        messages?.docs.map(message => (
          <Message key={message.id} message={message.data()} />
        ))
      }
    </div>
  )
}
