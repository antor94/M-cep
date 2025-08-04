import React from 'react'
import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
    
    
    <section id='blog' className=' pb-[99px]'>
        <div className="container">
            <div id='blog-row' className=''>
              <div className='flex justify-around items-center'>
                <div><h2 className='text-[80px] font-medium font-com'>Latest <span className='border-b-2'>blog</span></h2></div>
                <div className='w-[150px] flex '><Link className='w-[150px] text-[18px] font-medium font-inter text-red border-b-2 flex justify-between  items-center' >View All Blog <FaArrowRightLong /></Link></div>
              </div>
              <div className='flex justify-center gap-[130px] items-center'>
                <div>


{/* ---------------- details div */}
                <div className='w-[470px] my-[48px] h-[382px]'>
                  <div className='w-full h-[250px] bg-[#C4C4C4]'></div>
                  <div className='flex gap-[24px] pt-[24px] pb-[8px]'>
                    <h2 className='text-[16px] font-normal font-inter text-main'>.05 Feb, 2022</h2>
                    <h2 className='text-[16px] font-normal font-inter text-main'>.5 min</h2>
                  </div>
                  <div className='w-[381px]'>
                    <h2 className='text-[30px] font-bold font-com text-main leading-[36px]' >Speech has never been free, and that’s good</h2>

                  </div>

                </div>
                 <div className='w-[470px] h-[382px]'>
                  <div className='w-full h-[250px] bg-[#C4C4C4]'></div>
                  <div className='flex gap-[24px] pt-[24px] pb-[8px]'>
                    <h2 className='text-[16px] font-normal font-inter text-main'>.05 Feb, 2022</h2>
                    <h2 className='text-[16px] font-normal font-inter text-main'>.5 min</h2>
                  </div>
                  <div className='w-[381px]'>
                    <h2 className='text-[30px] font-bold font-com text-main leading-[36px]' >Speech has never been free, and that’s good</h2>

                  </div>

                </div>
                </div>


                <div className='w-[570px] h-[632px]'>
                  <div className='w-full h-[480px] bg-[#C4C4C4]'></div>
                                    <div className='flex gap-[24px] pt-[24px] pb-[8px]'>
                    <h2 className='text-[16px] font-normal font-inter text-main'>.05 Feb, 2022</h2>
                    <h2 className='text-[16px] font-normal font-inter text-main'>.5 min</h2>
                  </div>
                  <div className='w-[508px]'>
                    <h2 className='text-[40px] font-bold font-com text-main leading-[36px]' >Speech has never been free, and that’s good</h2>

                  </div>

                </div>




              </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Blog