"use client"

import { db } from "@/config/firebase "
import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import Message from "./Message"

type Props = {
  id: string
}


export default function Chat({id}: Props) {

  const {data: session} = useSession()
  const[messages,isLoading] = useCollection(
    query(collection(db,'users',session?.user?.email!,'chats',id,'messages'),orderBy('createdAt','asc'))
  )
  
  return (
    <div className='flex-1 overflow-y-auto text-white'>
       {
        messages?.empty && (
          <div className="flex items-center py-10 justify-center font-bold">
            <h1>Ask anything to ChatGPT!</h1>
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
