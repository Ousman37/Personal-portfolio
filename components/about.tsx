"use client" //🚀
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView} from "@/lib/hooks";
import dynamic from "next/dynamic";


const About = () => {
  const {ref } = useSectionInView("About")


  return (
    <motion.section
  ref={ref}
  className="mb-28 max-w-[45rem] text-left leading-7 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.125 }}
  id="about"
>
  <SectionHeading>About me</SectionHeading>
  <p className="mt-4">
    Experience: Hailing from North Africa, specifically Mauritania, I bring a rich and diverse background to my journey. I began my career as a chef, instilling in me discipline, time management, and an unwavering commitment to every task. Extensive travels across Europe have nurtured my profound love for exploration. In my free time, I&apos;m an avid enthusiast of both physical fitness and meditation.
  </p>
  <p className="mt-2">
    Now, as a passionate front-end developer, I leverage this multicultural and multidisciplinary perspective to craft intuitive web experiences. My focus is on front-end development, utilizing HTML, CSS, JavaScript, and JavaScript <span className="italic">Frameworks</span> to create responsive, user-friendly websites.
  </p>
  <p className="mt-2">
    Projects: I&apos;ve had the privilege of working on a variety of projects that showcase my skills and my <span className="underline">love</span> for web development. Each project narrates a unique story of creativity and innovation.
  </p>
  <p className="mt-2">
    Connect: Let&apos;s engage, collaborate, or delve into the latest trends in web development. Don&apos;t hesitate to reach out to me on <a href="https://www.linkedin.com/in/ethmane-ousman-34885844/" className="text-blue-500 underline"><i className="fab fa-linkedin"></i> LinkedIn</a> or <a href="https://github.com/Ousman37" className="text-blue-500 underline"><i className="fab fa-github"></i> GitHub</a>. I&apos;m always open to discussions, collaborations, and <span className="font-bold">new opportunities!</span>
  </p>
  <p className="mt-4">
    Ready to embark on a project together? Connect with me on LinkedIn or GitHub!
  </p>
</motion.section>
  )
}
export default dynamic (() => Promise.resolve(About), {ssr: false})

// export default About