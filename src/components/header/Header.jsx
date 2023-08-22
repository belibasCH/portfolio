import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ebr_seite.png'
import Background from '../../assets/background.jpg'
import HeaderSocial from './HeaderSocials'
import SCROLL from '../../assets/scroll.svg'



function Header() {
  return (
   <header>
     <div className="container header__container">
       <h5>Hallo, Ich bin</h5>
       <h1>Elias Bräm</h1>
       <h5 className='text-light'>Junior Software Entwickler</h5>
      <CTA />
      <HeaderSocial />
      <div className='you'>
      <p className='panter'>panter</p>
      <p className='panter'>panter</p>
      <p className='panter'>panter</p>
      <p className='panter-primary'>panter</p>
      </div>
      
<div className='me'>
      <img src={ME} alt="Elias Braem" />
      </div>
      <a href="#experience" className='scroll__down'><img src={SCROLL} alt="Scroll image"></img></a>
      
     </div>
   </header>
  )
}

export default Header