import { DocumentData } from "firebase/firestore"

type Props = {
  message: DocumentData
}

export default function Message({message}: Props) {
  // console.log(message);
  const isChatGPT = message.user.name === 'ChatGPT'
  
  return (
    <div className={`flex py-4 px-10  space-x-4 ${isChatGPT && 'bg-gray-500/50 '}`}>
      <img src={message.user.image} alt="user" 
      className=" h-8 w-8" />
        <p className="my-auto">{message.text}</p>
    </div>
  )
}
