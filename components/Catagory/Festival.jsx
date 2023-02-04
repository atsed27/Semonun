import Image from 'next/image'
import React from 'react'
import MusicF from 'public/asset/Catagory/music F.png'
import Link from 'next/link'
export default function Festival() {
  return (
    <div>

    
    <div className='mt-[500px] py-4 w-full pr-10 grid gap-4 md:grid-cols-2  lg:grid-cols-4'>
      <div className='ml-10  flex flex-col border-b-4 border-r-4  border-b-red-900 border-r-red-900 rounded-xl'>
        <Image src={MusicF} alt='/' />
        <div className='py-3'>
          <p className='text-[20px] font-bold pb-2 '>Music Festival </p>
          <p className='text-blue-700'>sat,Jan 21,7:00 PM</p>
        </div>
        <div className='py-3 uppercase text-[20px] font-bold'>
          <p>Daniel - Addis Abeba</p>
        </div>
        <div className='py-10'>
          <p className='font-bold'>190 follower</p>
        </div>
      </div>
      <div className='ml-10 flex flex-col border-b-4 border-r-4  border-b-red-900 border-r-red-900 rounded-xl'>
        <Image src={MusicF} alt='/' />
        <div className='py-3'>
          <p className='text-[20px] font-bold pb-2 '>Music Festival </p>
          <p className='text-blue-700'>sat,Jan 21,7:00 PM</p>
        </div>
        <div className='py-3 uppercase text-[20px] font-bold'>
          <p>Daniel - Addis Abeba</p>
        </div>
        <div className='py-10'>
          <p className='font-bold'>190 follower</p>
        </div>
      </div>
      <div className='ml-10 flex flex-col border-b-4 border-r-4  border-b-red-900 border-r-red-900 rounded-xl'>
        <Image src={MusicF} alt='/' />
        <div className='py-3'>
          <p className='text-[20px] font-bold pb-2 '>Music Festival </p>
          <p className='text-blue-700'>sat,Jan 21,7:00 PM</p>
        </div>
        <div className='py-3 uppercase text-[20px] font-bold'>
          <p>Daniel - Addis Abeba</p>
        </div>
        <div className='py-10'>
          <p className='font-bold'>190 follower</p>
        </div>
      </div>
      <div className='ml-10 flex flex-col border-b-4 border-r-4  border-b-red-900 border-r-red-900 rounded-xl'>
        <Image src={MusicF} alt='/' />
        <div className='py-3'>
          <p className='text-[20px] font-bold pb-2 '>Music Festival </p>
          <p className='text-blue-700'>sat,Jan 21,7:00 PM</p>
        </div>
        <div className='py-3 uppercase text-[20px] font-bold'>
          <p>Daniel - Addis Abeba</p>
        </div>
        <div className='py-10'>
          <p className='font-bold'>190 follower</p>
        </div>
      </div>
      
    </div>
    <div className='md:py-14 text-center '>
      
      <Link className='text-[20px]  ml-10 shadow-xl text-[#2A363B] font-bold font-Poppins text-xl bg-green-200 rounded-3xl  pr-7 pl-3 pt-2 pb-3' href={'/'}>
                    See more
                    </Link>
     
      
    </div>
  </div>  
  )
}
