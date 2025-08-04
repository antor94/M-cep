import React from 'react'
import footerimg from '../assets/images/footer-logo.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    
    
    <section id='footer' className='bg-main pt-[116px] pb-[120px]'>
        <div className="container">
            <div id='footer-row' className='text-center'>
                <div className='flex justify-center'><img src={footerimg} alt="footer-img" /></div>
                <div className='pt-[15px] pb-[48px] border border-b-amber-50'><h2 className='text-[16px] font-normal font-inter text-[#fff]'>© 2022 Elliana Mary  All Rights Reserved</h2></div>
                {/* -------------- footer-item */}
                 <div className='py-[36px] flex justify-center border border-b-amber-50 '>
                    <ul className='flex items-center gap-[50px]'>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>About</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Project</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Blog</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Pricing</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Studio</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Contact</Link></li>

                    </ul>
                </div>

{/* ---------------- footer-link */}
               <div className='pt-[36px] flex justify-center'>
                    <ul className='flex items-center gap-[80px]' >
                        <li><Link className='text-[18px] font-medium font-com text-[#fff]'>Facebook</Link></li>
                        <li><Link className='text-[18px] font-medium font-com text-[#fff]'>Twitter</Link></li>
                        <li><Link className='text-[18px] font-medium font-com text-[#fff]'>Instagram</Link></li>
                        <li><Link className='text-[18px] font-medium font-com text-[#fff]'>Linkedin</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Footer