import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/elias-br%C3%A4m-b52b6a189/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/belibasCH" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials