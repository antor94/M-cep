import React from 'react'
import navBannar from '../assets/images/Header.png'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    
    <nav id="navbar" style={{ background: `URL(${navBannar})`,  backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }} className='py-[29px]'>
        <div className="container">
            <div id='navbar-row' className='flex justify-between items-center'>
<div className='flex gap-[129px]  items-center'>



    {/* ------------- logo */}

    <Link to={'/'}><img src={logo} alt="nav-logo" /> </Link>
    {/* ----------- nav-items */}
    <div>
        <ul className='flex items-center gap-[30px]'>
            <li className='text-[16px] font-normal font-inter text-[#fff]'><Link to={'/'} >About</Link></li>
            <li className='text-[16px] font-normal font-inter text-[#fff]'><Link to={'/'} >Project</Link></li>
            <li className='text-[16px] font-normal font-inter text-[#fff]'><Link to={'/'} >Blog</Link></li>
            <li className='text-[16px] font-normal font-inter text-[#fff]'><Link to={'/'} >Pricing</Link></li>
            <li className='text-[16px] font-normal font-inter text-[#fff]'><Link to={'/'} >Studio</Link></li>
            <li className='text-[16px] font-normal font-inter text-[#fff]'><Link to={'/'} >Contact</Link></li>
        </ul>
    </div>

</div>

    {/* <!-- From Uiverse.io by Cevorob -->  */}
<label class="burger" for="burger">
  <input type="checkbox" id="burger" />
  <span></span>
  <span></span>
  <span></span>
</label>

           
            </div>
        </div>
    </nav>
    
    
    
    
    
    
    </>
  )
}

export default Navbar