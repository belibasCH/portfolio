import React from 'react'
import './header.css'
import CTA from './CTA'

function Header() {
  return (
   <header>
     <div className="container header__container">
       <h5>Hallo, Ich bin</h5>
       <h1>Elias Bräm</h1>
       <h5 className='text-light'>Frontend Developper</h5>
      <CTA />
     </div>
   </header>
  )
}

export default Header