import Link from 'next/link'
import React from 'react'

export default function NavEvent() {
  return (
    <div className='w-screen '>
        <div className='flex justify-between m-8  border-4 border-primary bg-[#D9D9D9] '>
            
            <div className='bg-[#FB7C07] w-[500px] pl-20 rounded-r-[50px] '>
               <Link href={'/'}>
                  <p className='text-[#2A363B] font-medium text-[30px] font-righteous '>step 1</p>
                  <p className='py-3 text-[20px] font-medium'>event setting</p>
               </Link>
            </div>
            <div className='bg-[#FB7C07] w-[500px] text-center rounded-[50px] '>
               <Link href={'/'}>
                  <p className='text-[#2A363B] font-medium text-[30px] font-righteous '>step 1</p>
                  <p className='py-3 text-[20px] font-medium'>event setting</p>
               </Link>
            </div>
            <div className='bg-[#FB7C07] w-[500px] text-right pr-20 rounded-l-[50px] '>
               <Link href={'/'}>
                  <p className='text-[#2A363B] font-medium text-[30px] font-righteous '>step 1</p>
                  <p className='py-3 text-[20px] font-medium'>event setting</p>
               </Link>
            </div>
            

        </div>
      
    </div>
  )
}
