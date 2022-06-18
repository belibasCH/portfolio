import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'


function About() {
  return (
    <section id="about">
    <h5>Lerne mich kennen</h5>
    <h2>Über mich</h2>

    <div className="container about__container">
    <div className="about__me">
      <div className='about__me-image'>
    <img src={ME} alt="About Image" />
    </div>
    </div>
    
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Erfahrung</h5>
          <small>3 Jahre</small>
        </article>
        <article className='about__card'>
          <HiOutlineUsers className='about__icon'/>
          <h5>Kunden</h5>
          <small>10+</small>
        </article>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Projekte</h5>
          <small>20</small>
        </article>
      </div>
      
      <p>
        Ich weiss, 10 Projekte sind noch nicht gerade viel, ich konnte aber in jedem von ihnen sehr viel lernen. Vom Offerien übers Design bis hin zur technischen Umsetzung. Web ist meine absolute Leidenschaft. 
        In meinem Studium zum Bachelor Informatik erhalte ich Einblick in viele verschiedene Technologien. Keine begeisterte mich So sehr wie die Webentwicklung. Um meine Skills nun zu verbessern, möchte ich noch mehr Erfahrung im Arbeitsalltag dazugewinnen.  
           </p>
      <a href="#contact" className='btn btn-primary'>Kontaktiere mich!</a>
    </div>
    </div>
    

    </section>
  )
}

export default About