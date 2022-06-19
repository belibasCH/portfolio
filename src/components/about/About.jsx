import React from 'react'
import './about.css'
import ME from '../../assets/ebr.png'
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
          <small>5 Jahre</small>
        </article>
        <article className='about__card'>
          <HiOutlineUsers className='about__icon'/>
          <h5>Kunden</h5>
          <small>10+</small>
        </article>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Projekte</h5>
          <small>20+</small>
        </article>
      </div>
           <p>
            Seit meiner Lehre zum Mediamatiker begeistert mich die Webentwicklung. In meinem Studium zum Informatiker, welches ich momentan an der Fachhoschule Nordwestschweiz in Brugg absolviere, hat sich dieses Interesse zu einer leidenschaft entwicklet. 
            Nun möchte ich den nächsten Schritt machen und von einfachen Webseiten zu komplexeren Anwendungen und integrationen fortschreiten. Ich bin mega motiviert, gemeinsam mit den Profis von Ownbit solche Problemstellungen anzugehen und richtig cooles Zeug zu produzierten!
          </p>
      <a href="#contact" className='btn btn-primary'>Kontaktiert mich!</a>
    </div>
    </div>
    

    </section>
  )
}

export default About