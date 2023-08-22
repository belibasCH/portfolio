import React from 'react'
import './about.css'
import ME from '../../assets/ebr.png'
import {FaAward} from 'react-icons/fa'
import {HiThumbUp} from 'react-icons/hi'


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
          <h5>Studium</h5>
          <small>Inforormatik mit Verfiefung in Design und Management</small><br></br>
          <small>Semester 7 von 8 <br></br></small>
          <small>Abschluss Sommer 2024</small>
        </article>
        <article className='about__card'>
          <HiThumbUp className='about__icon'/>
          <h5>Web-Erfahrung</h5>
          <small>5 Jahre Wordpress<br></br></small>
          <small>1 Jahr React</small>
        </article>
                
      </div>
           <p>
            Seit meiner Lehre zum Mediamatiker begeistert mich die Webentwicklung. 
            In meinem Studium zum Informatiker, welches ich momentan an der Fachhoschule 
            Nordwestschweiz in Brugg absolviere, hat mich das Coding-Fieber so richtig 
            gepackt.
            <br></br><br></br>
            In verschiedenen Studiumsprojekten konnte ich bereits Erfahrungen mit verschiedenen
            Technologien sammeln. Am meisten begeistert mich die Frontendentwicklung. Dort 
            kann ich meine Kentnisse im Bereich Design und User Experience einbringen.
            Ich bin sehr motiviert, mit einem coolen Team interssante  
            Problemstellungen anzugehen und richtig cooles Zeug zu bauen.
            
          </p>
      </div>
    </div>
    

    </section>
  )
}

export default About