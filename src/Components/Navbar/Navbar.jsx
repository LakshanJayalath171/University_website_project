
import './navbar.css'
import logo  from '../../Assest/logo.png'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [stikey,setStikey] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>75 ? setStikey(true):setStikey(false)
    })
  },[])


  
  return (
    <div>
      <nav className={`containeer ${stikey ? 'dark-nav':''} `}>
        <img src={logo} alt="Logo" className='logo'/>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            <button className='btn'>Contact Us</button>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar