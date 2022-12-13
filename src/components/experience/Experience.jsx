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
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small>8 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small>8 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>JS</h4>
              <small>5 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Wordpress</h4>
              <small>8 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small>7 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Flutter</h4>
              <small>8 von 10</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small>5 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>

              <h4>PHP</h4>
              <small>3 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>MySql</h4>
              <small>3 von 10</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Dart</h4>
              <small>5 von 10</small>
              </div>
            </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience