import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import YOU from '../../assets/ownbit.svg'
import HeaderSocial from './HeaderSocials'



function Header() {
  return (
   <header>
     <div className="container header__container">
       <h5>Hallo, Ich bin</h5>
       <h1>Elias Bräm</h1>
       <h5 className='text-light'>Frontend Developper</h5>
      <CTA />
      <HeaderSocial />
      <div className='you'>
      <img src={YOU} alt="Elias Braem" />
      </div>
      
<div className='me'>
      <img src={ME} alt="Elias Braem" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll down</a>
      
     </div>
   </header>
  )
}

export default Header