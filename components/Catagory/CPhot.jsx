import Image from 'next/image'
import React from 'react'
import Musix from 'public/asset/Catagory/cat1.png'
export default function CPhot() {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] relative '>
        <div className='absolute top-0 left-0 w-full h-[68vh]  z-10 '>
            <Image className='absolute z-1  ' layout='fill' objectFit='cover' src={Musix} alt = '/'/>
            <div className='absolute top-[50%]   left-[40%]  '>
              <h2 className='font-bold font-righteous md:text-[80px] sm:text-[30px] '>Music Festival</h2>
              
            </div>

        </div>

      </div>
    </div>
  )
}
