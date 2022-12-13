import React from 'react'
import './portfolio.css'
import PORTFOLIO1 from '../../assets/portfolio1.jpg'
import ZAKU from '../../assets/zaku.jpg'
import MEDINSPECT from '../../assets/medinspect.jpg'
import IVIS from '../../assets/ivis.jpg'
import INTERNETTER from '../../assets/internetter.jpg'


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Einblick in meine Arbeiten</h5>
      <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {/*

      <article className='portfolio__card'>
        <div className="portfolio__content">
          <div className=''>
          <img src={PORTFOLIO1} alt="Portfolio1" className='portfolio__image'/>
                   </div>
          <h3>Titel der Beachelor Thesis <span>Bachelor Thesis</span></h3>
          <h4>Tech Stack: React, React Native, Spring Boot, MongoDB</h4>
          <div className='portfolio__buttons'>
            <a href="" target="_blank" className='portfolio__btn portfolio__btn-primary'>Figma</a>
            <a href="" target="_blank" className='portfolio__btn'>AppStore</a>
          </div>
        </div>
      </article>
      */}

<article className='portfolio__card'>
        <div className="portfolio__content">
          <div className=''>
          <img src={INTERNETTER} alt="Portfolio1" className='portfolio__image'/>
                   </div>
          <h3>Firmengründung internetter.ch</h3>
          <h4>Tech Stack: Wordpress, HTML, CSS</h4>
          <div className='portfolio__buttons'>
            <a href="" target="_blank" className='portfolio__btn portfolio__btn-primary'>internetter.ch</a>
            <a href="" target="_blank" className='portfolio__btn'>AppStore</a>
          </div>
        </div>
      </article>

       <article className='portfolio__card'>
        <div className="portfolio__content">
          <div className=''>
          <img src={ZAKU} alt="Portfolio1" className='portfolio__image'/>
                   </div>
          <h3>Wordpress Websiten für viele Kleinkunden</h3>
          <h4>Tech Stack: Wordpress, HTML, CSS, Figma</h4>
          <div className='portfolio__buttons'>
            <a href="https://www.raphaeljost.ch/" target="_blank" className='portfolio__btn'>raphaeljost.ch</a>
            <a href="https://zakudesign.ch/" target="_blank" className='portfolio__btn'>zakudesign.ch</a>
            <a href="https://picboxi.ch/" target="_blank" className='portfolio__btn'>picboxi.ch</a>
            <a href="https://bawatec.ch/" target="_blank" className='portfolio__btn'>bawatec.ch</a>
            <a href="https://bawatec.ch/" target="_blank" className='portfolio__btn'>nexustelecom.com (Joomla)</a>
          </div>
        </div>
      </article>

     

      <article className='portfolio__card'>
        <div className="portfolio__content">
          <div className=''>
          <img src={IVIS} alt="Portfolio1" className='portfolio__image'/>
                   </div>
          <h3>Informationsvisualisierung Wirtschaftsförderung</h3>
          <h4>Tech Stack: Java Script, D3, HTML, CSS</h4>
          <div className='portfolio__buttons'>
            <a href="https://ivis.eliasbraem.ch/" target="_blank" className='portfolio__btn portfolio__btn-primary'>Live Demo</a>
            <a href="https://github.com/belibasCH/informationsvisualisierung" target="_blank" className='portfolio__btn'>GitHub</a>
          </div>
        </div>
      </article>

  
      <article className='portfolio__card'>
        <div className="portfolio__content">
          <div className=''>
          <img src={MEDINSPECT} alt="Portfolio1" className='portfolio__image'/>
                   </div>
                   <h3>App für chronisch kranke Personen</h3>
          <h4>Tech Stack: Flutter, Dart, SQlite, Figma</h4>
          <div className='portfolio__buttons'>
            <a href="" target="_blank" className='portfolio__btn portfolio__btn-primary'>Figma</a>
            <a href="" target="_blank" className='portfolio__btn'>AppStore</a>

          </div>
        </div>
      </article>
 
      
    </div>
    </section>
  )
}

export default Portfolio