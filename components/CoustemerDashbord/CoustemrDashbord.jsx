import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import Layout from '../Layout';

export default function CoustemrDashbord() {
  return (
    <>
    
    <div className='w-full'>
        <div className='flex justify-between '>
            <div className='w-[300px] h-screen bg-primary  '>
                <div>
                  <div className='p-7 text-[20px] '>
                  <p>Semonun</p>
                 </div>
                 <div className='bg-white'>
                {/**horizontal line */}
                <p></p>
                 </div>
                 </div>

                 {/**bottem */}
                 <div className=' flex flex-col pt-64 pl-[50px]'>
                    <div className='flex px-3 py-2 text-[#FFA26B]  '>
                        <HomeIcon />
                        <Link href={'/'}>
                        <p className='px-3 text-xl uppercase '  >home</p>
                        </Link>
                        
                    </div>
                    <div className='flex px-3 py-2'>
                        <HomeIcon />
                        <p className='px-3 text-xl '  > Add event</p>
                    </div>
                    <div className='flex px-3 py-2'>
                        <HomeIcon />
                        <p className='px-3 text-xl  '  >Subscription</p>
                    </div>
                    <div className='flex px-3 py-2'>
                        <HomeIcon />
                        <p className='px-3 text-xl '  >tickets</p>
                    </div>


                 </div>

                 <div>

                </div>
            </div>
            <div className='flex flex-col '>
              <div className='flex justify-center items-center h-11 p-10  shadow-xl shadow-gray-300  rounded-full m-10  '>
                    <div className='shadow-xl bg-[#0B5695] rounded-full h-10 w-10 '>
                      <div className='text-[30px] text-white '>
                        <p className='text-center'>A</p>
                      </div>
                    </div>
                 <div className=''>
                     <p className='pl-5 text-[#355C7D] '>asrat adane</p>

                  </div>
                </div>
                <div className=''>
                    <p>d</p>
                </div>
             </div>

        </div>
      
    </div>
    <p>h</p>
    
    
    </>
    
  )
}
