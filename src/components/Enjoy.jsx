import React from 'react'
import Enjoybanner from '../assets/images/enjoy-banner.png'
import { IoHandLeft } from "react-icons/io5";
import { Link } from 'react-router';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";

const Enjoy = () => {


  const text = 'with jeniferlofez Connect';

  return (
    <>
    
    
    <section id='Enjoy' className='pt-[120px]'>
        <div className="container">
            <div id='enjoy_row' className='flex  justify-around'>
                {/* ----------------- h2 */}
                <div>

                <div className='w-[535px]'>
              <h2  className='text-[80px] leading-[62px] font-medium text-main font-com'>I enjoy <span className='underline font-italic'>capturing</span>  people</h2>
                <p  className='text-[24px] font-semibold font-inter text-main pt-[48px] flex justify-end'>-Ellina mary</p>
            </div>
            <div className='w-[370px] mt-[73px] h-[350px] bg-[#C4C4C4]'></div>
                </div>

{/* ------------------- enjoy-banner */}
            <div><img src={Enjoybanner} alt="enjoy-banner" />

            
                <button id='enjoy_btn' className="button btn2 ">
                  <p className="button__text flex">
                    {text.split('').map((char, index) => (
                      <span key={index} style={{ '--index': index }}>
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </p>
            
                  <div className="button__circle btn_circle">  <CgArrowLongRight />  </div> 
                 </button>
            
            </div>

            </div>
            <div className='flex justify-center pt-[60px]'>

            <div className='w-[1040px] flex justify-between '>
                <div className='flex gap-[16px]'><h2 className='text-[24px] font-bold font-com text-main'>Hi there!</h2><IoHandLeft className='text-[36px] text-[#FFDD67]' /></div>
                <div className='w-[432px]'><p className='text-[20px] font-normal font-dm text-main'>You can express yourself however you want and whenever you want, for free. 
                    You can customize a template or make your own from scratch, with an immersive library at your disposal. 
                    You can express yourself however you want and whenever you  free.</p></div>
                    <div>
                    <div className='w-[370px]'><p className='text-[20px] font-normal font-dm text-main'>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p></div>
                    <Link className='w-[180px] border-b-2 border-[#EF0101] pt-[40px] flex justify-between ' ><p className='text-[18px] font-semibold font-inter text-[#EF0101]'>Contact with Me</p><HiOutlineArrowNarrowRight className='text-[24px] text-[#EF0101]' /></Link>

                    </div>
            </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Enjoy