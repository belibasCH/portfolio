import React from 'react'
import './portfolio.css'
import ZAKU from '../../assets/zaku.jpg'
import MEDINSPECT from '../../assets/medinspect.jpg'
import IVIS from '../../assets/ivis.jpg'
import INTERNETTER from '../../assets/internetter.jpg'
import TISCHMESSE from '../../assets/Tischmesse.png'
import SEVENSAT from '../../assets/sevenSat.jpg'


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Einblick in meine Arbeiten</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={TISCHMESSE} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>Digitales Firmenverzeichniss für Messe</h3>
            <h4>Tech Stack: React, Airtable </h4>
            <div className='portfolio__buttons'>
              <a href="https://firmen.tischmesse.sh/" target="_blank" className='portfolio__btn portfolio__btn-primary'>Website</a>
              <a href="https://github.com/belibasCH/tischmesse_react.git" target="_blank" className='portfolio__btn'>GitHub</a>
            </div>
          </div>
        </article>

        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={INTERNETTER} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>Bildergalerie für Events</h3>
            <h4>Tech Stack: React, Firebase</h4>
            <div className='portfolio__buttons'>
              <a href="https://github.com/belibasCH/webgalery" target="_blank" className='portfolio__btn portfolio__btn-primary'>GitHub</a>
              <a href="https://webgalery.eliasbraem.ch/" target="_blank" className='portfolio__btn portfolio__btn-primary'>Live Demo</a>

            </div>
          </div>
        </article>

        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={ZAKU} alt="Portfolio1" className='portfolio__image' />
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
              <img src={MEDINSPECT} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>App "7Sat" - Projektteam (3 Pers)</h3>
            <h4>Tech Stack: Kotlin, Jetpack Compose</h4>
            <div className='portfolio__buttons'>
              <a href="https://play.google.com/store/apps/details?id=seven.sat&hl=de&gl=US" target="_blank" className='portfolio__btn'>PlayStore</a>
              <a href="https://github.com/emoba-fhnw/ws6c-7sat" target="_blank" className='portfolio__btn'>GitHub</a>
              <a href="https://www.figma.com/proto/HTHiQvk56sKBFZPzemw6uc/Gruppe-7---Andri%2C-Tobi%2C-Elias?page-id=9%3A60&node-id=73-5498&starting-point-node-id=87%3A5465&mode=design&t=Cy8riQnhuT0D929s-1" target="_blank" className='portfolio__btn portfolio__btn-primary'>Figma</a>

            </div>
          </div>
        </article>

        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={MEDINSPECT} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>App für chronisch kranke Personen - Projektteam (8 Pers)</h3>
            <h4>Tech Stack: Flutter, Dart, SQlite, Figma</h4>
            <div className='portfolio__buttons'>
              <a href="https://gotomo.ch/en/portfolio/medinspect-ehealth-app/" target="_blank" className='portfolio__btn portfolio__btn-primary'>Figma</a>
            </div>
          </div>
        </article>
        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={IVIS} alt="Portfolio1" className='portfolio__image' />
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
              <img src={IVIS} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>End-to-end verschlüsselter Webchat</h3>
            <h4>Elm, Haskell, Docker</h4>
            <div className='portfolio__buttons'>
              <a href="" target="_blank" className='portfolio__btn portfolio__btn-primary'>Demo Video</a>
              <a href="" target="_blank" className='portfolio__btn'>Figma</a>
            </div>
          </div>
        </article>




      </div>
      <h5>Software ist ein Teamsport</h5>
      <h2>Arbeiten im Team</h2>
      <div className="container portfolio__container">






        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={IVIS} alt="Portfolio1" className='portfolio__image' />
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
              <img src={SEVENSAT} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>App "7Sat"</h3>
            <h4>Tech Stack: Kotlin, Jetpack Compose</h4>
            <div className='portfolio__buttons'>
              <a href="" target="_blank" className='portfolio__btn portfolio__btn-primary'>Figma</a>
              <a href="" target="_blank" className='portfolio__btn'>AppStore</a>


            </div>
          </div>
        </article>

        <article className='portfolio__card'>
          <div className="portfolio__content">
            <div className=''>
              <img src={MEDINSPECT} alt="Portfolio1" className='portfolio__image' />
            </div>
            <h3>App für chronisch kranke Personen</h3>
            <h4>Tech Stack: Flutter, Dart, SQlite, Figma</h4>
            <h4>Mit Agile Coach Peter Spörri</h4>
            <div className='portfolio__buttons'>
              <a href="https://gotomo.ch/en/portfolio/medinspect-ehealth-app/" target="_blank" className='portfolio__btn portfolio__btn-primary'>Gotomo (Auftraggeber)</a>


            </div>
          </div>
        </article>




      </div>
    </section>
  )
}

export default Portfolio