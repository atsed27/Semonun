import React from 'react'
import VectorImg from 'public/asset/Signup/images.png'
import LoginImg from 'public/asset/login/login.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  return (
    <div className=' md:flex justify-start xl:justify-around gap-10 ' >
        <div className='flex flex-col p-10 bg-white h-screen  '>
            
            <div className=' flex items-center flex-col '>
                <p className='  pt-10 font-bold text-[60px] text-primary font-montez '>Semonun</p>
                <div className='md:max-w-7xlxl sm:max-w-xl'>
                   <p className=' text-[30px] md:text-[60px] font-righteous '>
                      Welcome back
                     </p>
                </div>
            </div>
            <div className='p-8 flex flex-col '>
                
                <form className='flex flex-col py-10'>
                    <div className='relative'>
                        <p className='py-3 text-[25px] font-medium' >Email Address</p>
                        <input className=' border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[500px] sm:[300px]
                           ' type={'text'} placeholder='enter email'/>
                    </div>
                    <div className='relative py-5'>
                        <p className='py-3 text-[25px] font-medium' >Password</p>
                        <input className=' border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[500px] sm:[300px]
                           ' type={'text'} placeholder='Enter your password'/>
                    </div>

                </form>
                <div className='-mt-6 flex items-center md:justify-center -ml-6' >
                    <input type={'checkbox'} className='h-7 w-7' />
                    <p className='px-4 font-medium text-[20px]'>Remember Me </p>
                    <Link href={'/'}>
                    <p  className=' md:pl-32 font-medium text-[20px] text-green-700 sm:pl-18'>Forget Password?</p>
                    </Link>

                </div>
                <div className='my-14  bg-primary  border-2 border-gray-300 rounded-2xl md:w-[500px] sm:[200px]'>
                    <Link className='text-center' href={'/'}>
                        <p className=' py-3 font-medium font-righteous uppercase text-[25px] text-white'>log in</p>
                    </Link>
                </div>

                <div className=' -mt-10'>
                  <p className='text-center text-[25px]'>or</p>
                </div>
                <div className='flex justify-center'>
                 <div className=' my-8  '>
                     <Link className=' flex  pl-9' href={'/'}>
                         <Image src={VectorImg} className='w-12 h-12 ' alt ='/' />
                     </Link>
                  </div>
                   <div className=' my-8  '>
                     <Link className=' flex pl-9' href={'/'}>
                         <Image src={VectorImg} className='w-12 h-12 ' alt ='/' />
                     </Link>
                   </div>
                </div>
                <div className='py-5 '>
                    <p className='sm:text-[20px] md:text-[25px] pl-3'>don't have an account ? <span className='text-primary'>Sign up</span></p>
                </div>

            </div>
            
        </div>
       <div className='hidden md:flex'>
          <div className='    '>
            <Image className='' src={LoginImg} />
          </div>  
        </div> 
    </div>
  )
}
