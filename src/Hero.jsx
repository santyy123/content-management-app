import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>
            Contentful CMS
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, assumenda! Aut officiis veritatis, maxime at repudiandae consequatur explicabo nisi perferendis laborum nesciunt aspernatur exercitationem deleniti asperiores eius minus autem facilis?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt="woman and the browser"
          className='img'/>  
        </div>
      </div>
    </section>
  )
}

export default Hero
