import SideBar from '@/components/sidebar/SideBar '
import './globals.css'
import type { Metadata } from 'next'
import Provider from '@/components/auth/Provider '
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Login from '@/components/auth/Login '
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'ChatGPT',
  description: 'Ask to anything to AI!',
}

type Props = {
  children: React.ReactNode;
}

export default async function RootLayout({children}: Props) {

  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body className='max-h-screen'>
        <Provider session={session}>
        {
          session? (
            <div className="flex overflow-hidden h-screen">
              <div className='bg-[#202123]'>
                <SideBar />
              </div>
            <div className='flex-1 bg-[#343541] overflow-y-auto scrollbar-hide'>
              <Toaster position='top-right' />
              {children}
            </div>
          </div>
          ):(
            <Login />
          )
        }
        </Provider>
      </body>
    </html>
  )
}
