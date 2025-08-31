import React from 'react'
import navBannar from '../assets/images/Header.png'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    
    <nav id="navbar" style={{ background: `URL(${navBannar})`,  backgroundRepeat: `no-repeat`, backgroundSize: `cover`, }}>
        <div className="container">
            <div>

    {/* ------------- logo */}

    <Link to={'/'}><img src={logo} alt="nav-logo" /> </Link>
    {/* ----------- nav-items */}
    <div>
        <ul>
            <li><Link to={'/'} >About</Link></li>
            <li><Link to={'/'} >Project</Link></li>
            <li><Link to={'/'} ></Link></li>
            <li><Link to={'/'} ></Link></li>
        </ul>
    </div>

           
            </div>
        </div>
    </nav>
    
    
    
    
    
    
    </>
  )
}

export default Navbar