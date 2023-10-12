"use client" //🚀
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa'; 
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import TypewriterComponent from './typewriter-component';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center space-y-4">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/ousman.png"
              alt="Portrait of Ethmane"
              width="192"
              height="192"
              quality="95"
              objectFit="cover"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.1rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {" "}
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className="mb-10 mt-4 font-bold font-md text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-600 dark:text-gray-50 dark:bg-transparent">
        <TypewriterComponent />
      </motion.h1>
      <motion.p
  className="mb-10 mt-4 px-4 text-[1.2rem] font-medium !leading-[1.5] sm:4-xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  I&apos;m a recent <span className="text-blue-500">web development graduate</span> and passionate <span className="text-blue-500">front-end developer</span> with a strong commitment to crafting <span className="text-blue-500">innovative web solutions</span> and turning ideas into code. My goal is to push creative boundaries and deliver exceptional digital experiences. Explore my{" "}
  <span className="underline">portfolio</span> to see how I&apos;ve tackled challenges and honed my skills. I&apos;m excited to connect with fellow developers and enthusiasts as I embark on new coding endeavors.
</motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-blue-500 hover:bg-blue-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-10"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition ml-2 font-bold opacity-70" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-300 text-gray-800 px-7 py-3 flex items-center gap-2 rounded-full transition focus:scale-110 hover:scale-110 cursor-pointer border border-black/5 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{" "}
          <HiDownload className="ml-2 opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/ethmane-ousman-34885844/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Ousman37"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;

