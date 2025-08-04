import React from 'react'
import bannerimg from '../assets/images/banner-img.png'
import { Link } from 'react-router'

const banner = () => {
  return (
    <>
    
    <section id='banner-logo' className='py-[120px] '>
        <div className="container">
            <Link className='flex justify-center '><img className='dark:text-white' src={bannerimg} alt="" /></Link>
        </div>

    </section>
    
    
    
    
    
    </>
  )
}

export default banner