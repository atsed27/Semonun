import React from 'react'
import Backimg from 'public/asset/login/back.png'
import Link from 'next/link'
import Image from 'next/image'


export default function Verification() {
  return (
    <div className=' w-full p-16 flex  justify-center items-center'>
        <div className='flex-col pt-12'>
        
        
        <div className='m-10 '>
            <p className='md:text-[50px] sm:text-[25px] py-3 font-medium font-righteous'>Enter Varfication code</p>
             
        </div>
        <div className='max-w-xl'>
                <p className='  sm:text-[15px] md:text-[25px]'>Enter code that we have sent to your email
                </p>
                <p className='py-10  sm:text-[15px] md:text-[25px] font-extrabold'>masti@gmail.com
                </p>
                
        </div>
        <div className='flex'>
        <form className='flex justify-center items-center '>
        <div className='ml-10'>
                        <input className=' border border-gray-300 outline-none bg-gray-400  rounded-2xl md:text-[40px] font-bold
                           md:w-32 md:h-32 md:p-10  sm:w-16 sm:h-16 sm:p-5 sm:text-[20px]  placeholder-black
                           ' type={'text'} placeholder='7'/>
                    </div>
                    <div className='ml-10'>
                        <input className=' border border-gray-300 outline-none bg-gray-400  rounded-2xl md:text-[40px] font-bold
                           md:w-32 md:h-32 md:p-10  sm:w-16 sm:h-16 sm:p-5 sm:text-[20px]  placeholder-black
                           ' type={'text'} placeholder='7'/>
                    </div>
                    <div className='ml-10'>
                        <input className=' border border-gray-300 outline-none bg-gray-400  rounded-2xl md:text-[40px] font-bold
                           md:w-32 md:h-32 md:p-10  sm:w-16 sm:h-16 sm:p-5 sm:text-[20px]  placeholder-black
                           ' type={'text'} placeholder='7'/>
                    </div>
                    <div className='ml-10'>
                        <input className=' border border-gray-300 outline-none bg-gray-400  rounded-2xl md:text-[40px] font-bold
                           md:w-32 md:h-32 md:p-10  sm:w-16 sm:h-16 sm:p-5 sm:text-[20px]  placeholder-black
                           ' type={'text'} placeholder='7'/>
                    </div>
                    
                    
                    
                    

                </form>

        </div>

        <div className='mt-16'>
             <form className='flex justify-center items-center flex-col py-10'>
                    <div className='relative'>
                    <Link className=''  href={'/'}>
                            <p className='uppercase text-center text-white  bg-primary 
                            rounded-xl text-[25px] pt-4
                           h-16 w-72
                           '>Verfiy</p>
                        </Link>
                    </div>
                    <div className='md:w-[500px] sm:[300px] py-10'>
                        <Link className=''  href={'/'}>
                            <p className=' text-center text-primary
                            text-[25px] pt-4
                           
                           '>Resend code</p>
                        </Link>
                    </div>

             </form>
        </div>

        </div>
      
    </div>
  )
}
