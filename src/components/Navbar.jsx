import React from 'react'
import banner from '../assets/images/Header.png'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router'
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
    
    
    
    <section   style={{ background: `URL(${banner})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }} id='navbar' className='pt-[29px]'>
        <div className="container">
            <div id='navbar_row' className='flex  justify-between items-center'>

                {/* -------------------- nav-logo */}
                <Link className='w-[96px]'><img src={logo} alt="nav-logo" /></Link>

                {/* ----------------  nav-item */}
                <div>
                    <ul className='flex items-center gap-[50px]'>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>About</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Project</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Blog</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Pricing</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Studio</Link></li>
                        <li><Link className='text-[16px] font-normal font-inter text-[#fff]'>Contact</Link></li>
                    </ul>
                </div>

                {/* ------------------- nav-btn */}
                <button ><HiMiniBars3 className='text-[#fff] text-[32px]' /></button>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Navbar