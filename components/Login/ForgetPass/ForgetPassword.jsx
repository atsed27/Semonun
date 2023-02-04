import Image from 'next/image'
import React from 'react'
import Backimg from 'public/asset/login/back.png'
import Link from 'next/link'

export default function ForgetPassword() {
  return (
    <div className=' w-full p-16 flex  justify-center items-center'>
        <div className='flex-col'>
        <div className=' w-28 h-14 border-[4px] border-primary rounded-2xl'>
            <Link className='' href={'/'}>
              <Image className='py-4 pl-4' src={Backimg} alt ='' />
            </Link>
        </div>
        
        <div className='m-10 '>
            <p className='text-[50px] py-3 font-medium font-righteous'>Forget Your Password?</p>
             <div className='max-w-lg'>
                <p className=' pl-3 text-[20px]'>No worries,you just need to type your email address and we will send the 
                    verification code.
                </p>
             </div>
        </div>
        <div>
             <form className='flex flex-col py-10'>
                    <div className='relative'>
                        <p className='py-3 text-[25px] font-medium' >Email Address</p>
                        <input className=' border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[500px] sm:[300px]
                           ' type={'text'} placeholder='enter email'/>
                    </div>
                    <div className='md:w-[500px] sm:[300px] py-10'>
                        <Link className=''  href={'/'}>
                            <p className='uppercase text-center text-white  bg-primary 
                            rounded-xl text-[25px] pt-4
                           h-16 
                           '>reset password</p>
                        </Link>
                    </div>

             </form>
        </div>

        </div>
      
    </div>
  )
}
