"use client" //🚀
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 '
      id='skills'
    >
      <SectionHeading>Tech Stacks.</SectionHeading>
      {skillsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mb-4'>
          <h2 className='text-xl font-semibold text-gray-700 dark:text-white/70'>
            {section.section}
          </h2>
          <ul className='flex flex-wrap justify-center gap-2 text-sm text-gray-800 mb-10'>
            {section.skills.map((skill, skillIndex) => (
              <motion.li
                className='bg-gray-100 border-black-[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                key={skillIndex}
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={sectionIndex * section.skills.length + skillIndex}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;


