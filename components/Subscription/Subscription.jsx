import React from 'react'
import Link from 'next/link'
export default function Subscription() {
  return (
    <div >
        <div className='w-screen h-full flex justify-between items-center p-8  bg-primary '>
            <p className=' px-4 text-[60px] font-montez '><span>S</span>emo<span className='text-white'>nun</span></p>
            <div>
                <ul className='hidden md:flex m-10 '>
                   <Link className='ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    <li className=''>Home</li>
                    </Link>
                    <Link className='ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    <li className=' '>Events</li>
                    </Link>
                    
                    
                </ul>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center py-32'>
           <form className='flex flex-col py-10'>
                    <div className='relative'>
                        <p className='py-3 text-[25px] font-medium' >Email Address</p>
                        <input className=' border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[500px] sm:[300px]
                           ' type={'text'} placeholder='enter email'/>
                    </div>
                    <div className='relative py-5'>
                        <p className='py-3 text-[25px] font-medium' >Phone Number</p>
                        <input className=' border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[500px] sm:[300px]
                           ' type={'text'} placeholder='Enter contact'/>
                    </div>
                    <div className='relative py-10'>
                    <Link className=''  href={'/'}>
                            <p className='uppercase text-center text-white  bg-primary 
                            rounded-xl text-[25px] pt-4
                           h-16 md:w-[500px] 
                           '>notify me</p>
                        </Link>
                    </div>

                </form>
        </div>
      
    </div>
  )
}
