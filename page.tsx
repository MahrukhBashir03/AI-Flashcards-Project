import React from 'react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
import { SignOutButton } from '@clerk/nextjs'

const page = async () => {

  const user =  await currentUser()
  console.log(user)
  return (
    <nav className="p-5 bg-violet-800">
    <div className="container mx-auto p-1.3 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <a href="#" className="text-white font-bold ml-4">My Website</a>
      </div>
      <div className="hidden flex-start md:flex space-x-20  mr-37">
        <a href="#" className="text-white font-semibold text-lg hover:text-black">Home</a>
        <a href="#" className="text-white font-semibold text-lg hover:text-black">About</a>
        <a href="#" className="text-white font-semibold text-lg hover:text-black">Contact</a>
      </div>


      {
         user === null ?
               <Link href='/signin' className="bg-orange-300 text-black font-bold p-1 rounded hover:bg-inherit hover:text-white">Log in</Link> : 
               <> 
                   <SignOutButton className="bg-orange-300 text-black font-bold p-2 rounded hover:bg-inherit hover:text-white">Log out</SignOutButton>
               </>
        }
      
    </div>  

  </nav>
  )
}

export default page