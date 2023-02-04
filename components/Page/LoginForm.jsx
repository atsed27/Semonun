import React from 'react'
import User from '@mui/icons-material/ContactPage'
import Image from 'next/image'
import Pageimg from 'public/asset/Page/under.png';
export default function LoginForm() {
  return (
    <div className=' bg-primary h-screen  py-12'>
      <div className=' justify-center items-center  md:flex '>
            <div className='bg-white max-w-xl  p-4  flex items-center justify-center flex-col   w-full md:w-1/2 '>
                <div className='py-12'>
                    <Image className='w-52' src={Pageimg} alt= '/' 
                    />
                </div>
            <form className='flex flex-col items-center space-y-4 py-8 text-black'>
                <div className='relative'>
                    <p className='py-2 font-medium text-2xl '>Full name</p>
                    <input className=' h-14 border border-gray-300 outline-none placeholder-gray-300 pl-9 pr-4 py-1 rounded-xl 
                    transition focus:ring-4 focus:ring-green-400' type={'text'}/> 
                 </div>
                 <div className='relative'>
                    <p className='py-2 font-medium text-2xl '>Hobby</p>
                    <input className=' h-14 border border-gray-300 outline-none placeholder-gray-300 pl-9 pr-4 py-1 rounded-xl 
                    transition focus:ring-4 focus:ring-green-400' type={'text'}/> 
                 </div>
                 <div className='relative'>
                    <p className='py-2 font-medium text-2xl '>Address</p>
                    <input className=' h-14 border border-gray-300 outline-none placeholder-gray-300 pl-9 pr-4 py-1 rounded-xl 
                    transition focus:ring-4 focus:ring-green-400' type={'text'}/> 
                 </div>
                 <div className='relative'>
                    <p className='py-2 font-medium text-2xl '>Phone number</p>
                    <input className=' h-14 border border-gray-300 outline-none placeholder-gray-300 pl-9 pr-4 py-1 rounded-xl 
                    transition focus:ring-4 focus:ring-green-400' type={'number'}/> 
                 </div>
                 <div className='relative'>
                    <p className='py-2 font-medium text-2xl '>email</p>
                    <input className=' h-14 border border-gray-300 outline-none placeholder-gray-300 pl-9 pr-4 py-1 rounded-xl 
                    transition focus:ring-4 focus:ring-green-400' type={'email'}/> 
                 </div>

                    

                </form>
               
                 
            </div>

        </div>
      
    
    </div>
  )
}
