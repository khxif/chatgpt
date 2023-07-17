"use client"

import toast from 'react-hot-toast';
import { db } from '@/config/firebase '
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'

type Props = {
  id: string
}


export default function ChatInput({id}: Props) {

  const {data: session} = useSession()
  const[input,setInput] = useState('')
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    if(!input) return
    const prompt = input.trim()
    setInput('')
    
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user:{
        _id: session?.user?.email!,
        name: session?.user?.name!,
        image: session?.user?.image!
      }
    }

    await addDoc(collection(db,'users',session?.user?.email!,'chats',id,'messages'),message)

    const notification = toast.loading('ChatGPT is cooking!');

    const res = await fetch('/api/askQuestion',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({prompt,id,session})
    }).then(() => toast.success('ChatGPT has responded',{
      id: notification,
    }) )
    
  }

  return (
      <form 
      onSubmit={handleSubmit}
      className='w-full bg-gray-700/50 text-gray-400 flex p-4 space-x-4 focus:outline-none'
      >
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text" 
        placeholder='Enter your message...'
        className='md:flex-1 bg-transparent outline-none' 
        />
        <button
        disabled={!input}
        className='disabled:bg-gray-500/50 bg-[#11A37F] px-4 py-3 rounded-lg font-bold hover:opacity-50'>
        <PaperAirplaneIcon className="h-4 w-4 -rotate-45 " />
        </button>
      </form>
  )
}
