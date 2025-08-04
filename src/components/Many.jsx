import React from 'react'
import banerframe from '../assets/images/banner-fame.png'

const Many = () => {
  return (
    <>
    
    <section id='many' className='pt-[150px]'>
        <div className="container">
            <div id='many_row ' className='flex justify-center gap-[60px] items-center'>
               
<div className=' relative'>

                    <div className= ''><h2 className='w-[314px] absolute top-[-184px] left-[-212px]  leading-[62px] text-[80px] font-medium font-com text-main'>Got many <span>valuable <span className='underline'>awards</span></span></h2></div>
</div>
            

                    <div><img src={banerframe} alt="banner-fame" /></div>
                    <div className=''>

                    <div className=' leading-[40px]'>
                        <p className='text-[20px] font-normal font-dm text-main'>2021 - The Artist Award</p>
                        <p className='text-[20px] font-normal font-dm text-main'>2020 - MKEL/Best Prir</p>
                        <p className='text-[20px] font-bold font-dm text-[#EF0101]'>2019 - Portrait Award</p>
                        <p className='text-[20px] font-normal font-dm text-main'>2018 - Berlin Talent</p>
                    
                    </div>

                    </div>
             
               
                </div>
            </div>
        
    </section>
    
    
    </>
  )
}

export default Many