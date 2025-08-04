import React from 'react'
import { Link } from 'react-router'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Lovely = () => {
  return (
    <>
    
    <section id='Lovely' className='py-[150px]'>
        <div className="container">
            <div id='lovely-row'>
                <div className='flex justify-between items-center'>

                <div className='w-[500px] '><h2 className='text-[80px] leading-[70px] font-medium font-com text-main'>Lovely <span className=' underline'>words</span> <span>from my clients</span> </h2></div>
                <Link className='w-[184px] flex  justify-between text-[18px] font-semibold font-inter text-red items-center border-b-1'>View All Reviews <HiOutlineArrowNarrowRight /></Link>
                </div>
                <div className='flex justify-center gap-[170px] items-center'>
                    <div className='w-[370px] h-[450px] bg-[#C4C4C4] mt-[48px]'></div>
                    <div className='w-[500px]'>
                        <h2 className='text-[24px] font-medium font-dm text-main'>Jenifer Lofez <p className='font-normal text-[#0b01099f]'>"is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive,
My entire family was impressed by her 
and photographs.</p></h2>
<div><h2 className='text-[24px] font-semibold font-inter text-main pt-[40px]' >-Jason & Guidry</h2></div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Lovely