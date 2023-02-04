import React from 'react';
import Link from 'next/link';
import Backimg from 'public/asset/login/back.png';
import Image from 'next/image';
import LocationImg from 'public/asset/EventDicription/location.png'
import Pageimg from 'public/asset/Page/under.png';


export default function Ediscription() {
  return (
    <div className='m-4'>
        <div className=' md:flex  justify-center  '>
            {/**left */}
            <div className='flex flex-col '>
               <div className=' md:w-28 md:h-14 sm:w-20 h-10 border-[4px] border-primary rounded-2xl'>
                 <Link className='' href={'/'}>
                    <Image className='md:py-4 md:pl-4 sm:py-2 sm:pl-2' src={Backimg} alt ='' />
                 </Link>
               </div>
               <div className='m-10 '>
                  <p className='sm:text-[40px] lg:text-[50px] xl:text-[70px] py-3 font-medium font-righteous'>
                     Event Description
                  </p>
                  <div className='max-w-lg'>
                        <p className=' pl-3 md:text-[20px] sm:text-[17px]'>
                        No worries,you just need to type your email address and we will send the 
                          verification code.No worries,you just need to type your email address and we will send the 
                          verification code.No worries,you just need to type your email address and we will send the 
                          verification code.
                       </p>
                  </div>
                  <div className=''>
                     <p className='py-5 text-[25px] text-green-900 '>date : jan 23 2023</p>
                  </div>
                  <div className='text-[22px]'>
                    <p>location</p>
                    <p className='text-[#717275]'>addis abeba ,ken aron bet</p>
                  </div>
               </div>
               <div className='py-10 ml-10'>
                <Image src={LocationImg} alt = '/' />
               </div>

               


            </div>

            {/**right */}
            <div className='flex  flex-col ml-16 pb-7 items-center '>
                <div className='flex flex-col md:mt-52  md:my-64 sm:my-0 '>
                    <Link href={'/'}>
                       <div className='bg-primary border-2 rounded-xl my-9 md:w-64 lg:w-80  '>
                          <p className= 'py-5 px-20 sm:text-[25px]  md:text-[17px] lg:text-[25px] font-medium text-white text-center '>Buy ticket</p>
                       </div>
                    </Link>
                    <Link href={'/'}>
                        <div className='bg-primary border-2 rounded-xl   md:w-64 lg:w-80  '>
                           <p className= 'py-5 px-20 sm:text-[25px]   md:text-[17px] lg:text-[25px] font-medium text-white text-center '>Subscribe</p>
                        </div>
                    </Link>
                    
                    
                </div>
                <div className='sm:w-96 md:w-64 lg:w-96 xl:ml-20  sm:my-9 flex flex-col items-center  border-4 border-black shadow-xl shadow-black rounded-xl'>
                    <div className='md:pt-5 sm:pt-5 lg:py-2'>
                        <p className='md:text-[18px] lg:text-[25px] font-righteous'>About Event Organazer</p>
                    </div>

                    <div className='py-12 flex flex-col justify-center items-center'>
                       <Image className='w-44 rounded-full border-1' src={Pageimg} alt= '/'/>
                       <p className='font-bold text-[30px]'>student union</p>
                       <p className='text-[#908484] py-2 text-[20px] font-righteous'>169 follower</p>
                       <div className='rounded-2xl  my-6 sm:w-80 md:w-56 lg:w-[350px]  text-[#908484] p-3 text-[25px] text-center bg-[#D9D9D9]'>
                        <Link href={'/'}>
                           <p className=' '>see more detail</p>
                        </Link>
                       </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}
