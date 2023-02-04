import Link from 'next/link'
import React from 'react'
import User from '@mui/icons-material/ContactPage'
import Image from 'next/image'
import VectorImg from 'public/asset/Signup/images.png'
import SignupImg from 'public/asset/Signup/respo.png'

export default function Signup() {
  return (
    <div className='md:flex justify-start xl:justify-around gap-10' >
        <div className='flex flex-col p-10 bg-white h-screen  '>
            
            <div className=' flex items-center flex-col '>
                <p className='  pt-10 font-bold text-[60px] text-primary font-montez '>Semonun</p>
                <div className='md:max-w-7xlxl sm:max-w-xl'>
                <p className=' text-[30px] md:text-[50px] font-righteous '>
                    Signup to create and 
                </p>
                <p className='text-[30px] md:text-[50px] font-righteous px-6 '>sell your ticket</p>
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
                <div className='-mt-6 flex ' >
                    <input type={'checkbox'} className='h-7 w-7' />
                    <p className='px-3 font-medium text-[20px]'>I agree to all the <span className='text-primary'>Term</span> and <span className='text-primary'>Privacy Policies</span></p>

                </div>
                <div className='my-14 ml-14 bg-primary  border-2 border-gray-300 rounded-xl'>
                    <Link className='text-center' href={'/'}>
                        <p className=' py-3 font-medium uppercase text-[25px] text-white'>Sign up</p>
                    </Link>
                    
                </div>
                
                
                <div className=' bg-white  border-4 border-green-400 rounded-2xl my-4'>
                    <Link className='text-center flex items-center pl-9' href={'/'}>
                        <Image src={VectorImg} className='w-7 h-7  ' alt ='/' />
                        <p className=' py-5 text-[25px]  font-bold pl-9 text-black'>Sign up with Google</p>
                    </Link>
                </div>
                <div className=' bg-white  border-4 border-green-400 rounded-2xl  '>
                    <Link className='text-center flex items-center pl-9' href={'/'}>
                        <Image src={VectorImg} className='w-7 h-7  ' alt ='/' />
                        <p className=' py-5 text-[25px]  font-bold md:pl-9  text-black'>Sign up with Feacbook</p>
                    </Link>
                </div>
                <div className='py-5 '>
                    <p className='sm:text-[20px] md:text-[25px] pl-3'>already have an account ? <span className='text-primary'>Sign in</span></p>
                </div>
                
            </div>
            
        </div>
        <div className='hidden md:flex'>
          <div className='  md:pt-64  '>
            <Image className='' src={SignupImg} />
          </div>  
        </div>  
    </div>
  )
}
