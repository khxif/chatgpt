"use client"

import { useCollection } from 'react-firebase-hooks/firestore'
import NewChat from "./NewChat";
import Avatar from "./Avatar";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/config/firebase ";
import { useSession } from "next-auth/react";
import ChatRow from './ChatRow';

export default function SideBar() {
  
  const { data: session } = useSession()
  const[chats,isLoading] = useCollection(
    query(collection(db,'users',session?.user?.email!,'chats'),orderBy('createdAt','asc'))
  )
  
  
  return (
    <div className='p-2  max-w-xs md:min-w-[20rem] flex flex-col h-screen space-y-2 overflow-y-auto'>
      <div className="">
        <NewChat />
      </div>
      <div className='flex items-center justify-center'>
        {isLoading && (
          <h1 className='text-white'>Loading messages</h1>
        )}
      </div>
      <div className='flex-1 space-y-2'>
        
        {
          chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))
        }
      </div>
     {
      session &&  <Avatar />
     }
    </div>
  )
}
