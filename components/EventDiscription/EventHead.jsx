import Image from 'next/image'
import React from 'react'
import Musix from 'public/asset/Catagory/cat1.png'
import ReImg from 'public/asset/EventDicription/re.png';
import FaImg from 'public/asset/EventDicription/fa.png'
import Link from 'next/link';

export default function EventHead() {
  return (
    
      <div className='lg:h-[68vh] md:h-[40vh] sm:h-[30vh]'>
      <div className='w-screen relative '>
        <div className='absolute top-0 left-0 w-full lg:h-[68vh] md:h-[40vh] sm:h-[30vh] z-10 '>
            <Image className='absolute z-1  ' layout='fill' objectFit='cover' src={Musix} alt = '/'/>
            <div className='relative flex items-center justify-between   top-[40%] '>
                <div className='relative left-[5%] '>
                    <Link href={'/'}>
                       <Image className='md:w-16 sm:w-9 ' src={ReImg} alt='/' />
                    </Link>
                   
                </div>
                <div className='relative right-[5%]'>
                    <Link href={'/'}>
                      <Image  className='md:w-16 sm:w-9'src={FaImg} alt ='/' />
                    </Link>
                  
                </div>
                
                
            </div>

        </div>

      </div>
      </div>
   
  )
}
