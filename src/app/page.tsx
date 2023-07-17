import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className=' flex flex-col justify-center items-center md:mt-20 text-white px-2'>
      <h1 className='text-white font-bold text-3xl md:text-5xl py-6'>ChatGPT</h1>

      <div className="flex flex-col space-y-8 md:space-y-4 md:flex-row space-x-3 max-w-3xl py-6 items-center justify-center">
      <div className="flex flex-col space-y-5 max-w-xl text-center ">
        <SunIcon className="h-8 w-8 mx-auto" />
        <div className="flex flex-col space-y-2">
        <span className='bg-[#363b49] p-4 rounded-lg'>&quot;Explain Something to me&quot;</span>
        <span className='bg-[#363b49] p-4 rounded-lg'>&quot;What is the difference between a dog and a cat?&quot;</span>
        <span className='bg-[#363b49] p-4 rounded-lg'>&quot;What is the color of the sun?&quot;</span>
        </div>
      </div>

      <div className="flex flex-col space-y-5 max-w-xl text-center">
        <BoltIcon className="h-8 w-8 mx-auto" />
        <div className="flex flex-col space-y-2">
        <span className='bg-[#363b49] p-4 rounded-lg'>Remembers what user said earlier in the conversation</span>
        <span className='bg-[#363b49] p-4 rounded-lg'>Allows user to provide follow-up corrections</span>
        <span className='bg-[#363b49] p-4 rounded-lg'>Trained to decline inappropriate requests</span>
        </div>
      </div>

      <div className="flex flex-col space-y-5 max-w-xl text-center">
        <ExclamationTriangleIcon className="h-8 w-8 mx-auto" />
        <div className="flex flex-col space-y-2">
        <span className='bg-[#363b49] p-4 rounded-lg'>May occasionally generate incorrect information</span>
        <span className='bg-[#363b49] p-4 rounded-lg'>May occasionally produce harmful instructions or biased content</span>
        <span className='bg-[#363b49] p-4 rounded-lg'>Limited knowledge of world and events after 2021</span>
        </div>
      </div>

      </div>
    </main>
  )
}
