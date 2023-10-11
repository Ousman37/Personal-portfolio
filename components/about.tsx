"use client" //🚀
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

import { useSectionInView} from "@/lib/hooks";

const About = () => {
  const {ref } = useSectionInView("About")


  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-7 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }} id='about'>
    
    <SectionHeading>About me</SectionHeading>
      <p className='mt-4'>
        Greetings! Allow me to introduce myself. I&apos;m Ethmane, a passionate front-end developer dedicated to crafting intuitive web experiences.
      </p>
      <p className='mt-2'>
        <span className='font-bold'>My Focus:</span> <span className='text-blue-500'><i className="fas fa-code"></i></span> I specialize in front-end development, using HTML, CSS, JavaScript and JavaScript <span className='italic'>Frameworks</span> to create responsive, user-friendly websites.
      </p>
      <p className='mt-2'>
        <span className='font-bold'>Projects:</span> I&apos;ve had the pleasure of working on a range of projects that showcase my skills and <span className='underline'>love</span> for web development. Each project tells a unique story of creativity and innovation.
      </p>
      <p className='mt-2'>
        <span className='font-bold'>Connect:</span> Let&apos;s chat, collaborate, or discuss the latest in web development. Feel free to connect with me on <a href="https://www.linkedin.com/in/ethmane-ousman-34885844/" className='text-blue-500 underline'><i className="fab fa-linkedin"></i> LinkedIn</a> or <a href="https://github.com/Ousman37" className='text-blue-500 underline'><i className="fab fa-github"></i> GitHub</a>. I&apos;m always open to discussions, collaborations, and <span className='font-bold'>new opportunities!</span>
      </p>
      <p className='mt-4'>
        Ready to start a project together? Reach out to me on LinkedIn or GitHub!
      </p>
    
  </motion.section>
  

  )
}

export default About