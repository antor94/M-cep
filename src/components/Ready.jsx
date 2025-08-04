import React from 'react'
import ready from '../assets/images/readybanner.png'
import { Link } from 'react-router'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Ready = () => {
  return (
    <>
    
    <section id='ready' className='pb-[150px]'>
        <div className="container">
            <div id='ready-row' className='flex items-center gap-[100px] justify-center'>
                <div><img src={ready} alt="ready-img" /></div>
                {/* ------------------ text */}
                <div>
                    <div className='w-[442px]'><h2 className='text-[64px] leading-[54px] font-medium font-com text-main'>Ready to make your <span className='border-b-2'> moment memorable?</span></h2></div>
                    <div className='w-[124px]  pt-[64px] '> <Link className='mt-[64px] flex gap-[10px] justify-between text-[18px] font-semibold font-inter text-red  border-b-2 border-red items-center' >Book Now <HiOutlineArrowNarrowRight /></Link> </div>
                </div>
                <div>
                    <h2 className='w-[123px] mb-[12px] text-[18px] border-b-2 font-semibold font-inter text-main'>514 905 9958</h2>
                    <h2 className='text-[18px] border-b-2 font-semibold font-inter text-main'>hello@support.com</h2>
                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Ready