import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'




function Experience() {
  return (
    <section id='experience'>
      <h5>Das kann ich gut</h5>
      <h2>Meine Skills</h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Web-Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              {/* <small>7 von 10</small> */}
              </div>
            </article>  

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>  

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon' />
              <div>
              <h4>HTML, CSS</h4>
              {/* <small>9 von 10</small> */}
              </div>
            </article>
           
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Wordpress</h4>
              {/* <small>4 von 10</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Java SpringBoot</h4>
              {/* <small>5 von 10</small> */}
              </div>
            </article>


          
          </div>

        </div>
        <div className="experience__backend">
        <h3>App-Development</h3>
          <div className="experience__content">
                     
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Flutter & Dart</h4>
              {/* <small>8 von 10</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Kotlin & Jetpack Compose</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>
            
          </div>

        </div>
        <div className="experience__other">
        <h3>Sonstiges</h3>
          <div className="experience__content">
                     
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Git</h4>
              {/* <small>8 von 10</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Figma / Ui Design</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>REST</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>SCRUM</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>
            
          </div>

        </div>
        <div className="experience__other">
        <h3>Als Mensch</h3>
        <h4 className='pantergene'>Meine Panter-Gene</h4>
          <div className="experience__content">
          <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Agile-Lover</h4>
              {/* <small>8 von 10</small> */}
              </div>
            </article>      
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Teamplayer</h4>
              {/* <small>8 von 10</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Ganzeheitliches Denken</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Noch lange nicht ausgelernt</h4>
              {/* <small>6 von 10</small> */}
              </div>
            </article>
            
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience