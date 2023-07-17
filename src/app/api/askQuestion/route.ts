import { admindb } from "@/config/firebaseAdmin ";
import query  from "@/lib/queryAi ";
import admin from 'firebase-admin'
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    
    const { prompt, id, session } = await req.json()

    // if(!prompt) return;
    // if(!id) return;
    // if(!session) return;
    // if(!model) return;
    
    const text = await query(prompt)
    // console.log(text);

    const message: Message = {
        text: text || 'ChatGPT has failed to think!',
        createdAt: admin.firestore.Timestamp.now(),
        user:{
          _id: 'ChatGPT',
          name: 'ChatGPT',
          image: 'https://links.papareact.com/89k',
        }
      }

    await admindb.collection('users').doc(session?.user?.email!).collection('chats').doc(id).collection('messages').add(message)

    return NextResponse.json({text})
    
}