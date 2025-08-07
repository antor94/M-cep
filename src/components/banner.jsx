import React from 'react'
import bannerimg from '../assets/images/banner-img.png'
import { Link } from 'react-router'

const banner = () => {
  return (
    <>
 <section id='banner' className="pb-[120px] relative flex flex-col md:flex-row h-[1000px] w-full">



      {/* ----------- Left Side - Name */}
      <div className="bg-gray-300 flex items-end p-8 w-[700px]">
        <div>
          <h1 className="text-[30px] font-semibold font-inter text-[#fff]">ELLIANA MARY</h1>
          <p className="text-[16px] font-medium font-inter text-[#fff]">Professional Photographer</p>
        </div>
      </div>

      {/* Middle - Text */}
      <div className= " w-[440px] bg-red-700 text-white overflow-hidden">
      <div>

      <div className='w-[900px] z-[999px]  pb-[40px] pt-[200px] pl-[200px]'>
        <h2 className="text-[96px] leading-[80px] font-medium font-com text-[#fff]">Love to <span className=" italic underline">capture</span> <span>the</span> </h2>
        <p className='text-[96px] leading-[80px] font-medium font-com text-[#fff'>best <span className='italic underline'>moments</span> </p>
      </div>
      </div>
      <div className='w-[900px] pl-[200px]'>  <p className="text-[18px] font-normal font-dm text-[#fff]"> Distinctively re-engineer process-centric growth strategies without granular process improvements. </p>  </div>
      </div>

      {/* ----------- Right Side - Video + Social */}
      <div className="bg-black text-white relative flex items-center justify-center w-[800px]">
        {/* ------------ Fake video box */}
      <div className='w-[470px] h-[300px] bg-[#C4C4C4] mt-[500px] ml-[-450px]'></div>

        {/* Social Links */}
        <div className="absolute right-4 top-1/3 flex flex-col space-y-4 text-xs text-gray-400 tracking-widest">
          <a href="#" className='text-[18px] font-medium font-com text-[#fff]'>LinkedIn</a>
          <a href="#" className='text-[18px] font-medium font-com text-[#fff]'>Instagram</a>
          <a href="#" className='text-[18px] font-medium font-com text-[#fff]'>Twitter</a>
          <a href="#" className='text-[18px] font-medium font-com text-[#fff]'>Facebook</a>
        </div>
      </div>


    </section>
    
    
    
    </>
  )
}

export default banner