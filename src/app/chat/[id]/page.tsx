import Chat from "@/components/chat/Chat ";
import ChatInput from "@/components/chat/ChatInput ";

type Props = {
    params: {
        id: string;
    }
}

export default function page({params}: Props) {
  return (
    <div className="flex flex-col overflow-hidden max-w-full h-screen">
      <Chat id={params.id} />
      <ChatInput id={params.id} />
    </div>
  )
}
