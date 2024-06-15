import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36' id='hero'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28  h-[80vh] w-[50vw]' fill='blue' />
      </div>

      {/* Grid background */}
        {/* <div className="h-screen w-full dark:bg-gray-space-dark 100 bg-white-apple dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute z-0 top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white-apple [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div> */}
      {/* Grid background */}

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] 
          flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest 
            text-xs text-center text-black-100 max-w-80'>
            Welcome to My Portfolio!
          </h2>

          <TextGenerateEffect
            className='text-center text-5xl md:text-6xl lg:text-7xl'
            words="My name is Khen Bo"
          />

          <p className='text-center text-black-100 md:tracking-wider
            mb-4 text-lg md:text-xl lg:text-2xl'>
            Self-intro: title, education, achievements
          </p>
          <a href='#about'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero