'use client'; //🚀
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { links } from '@/lib/data';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full max-w-screen-xl mx-auto sm:top-6 sm:h-[3.25rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-0 left-0 right-0 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-lg font-bold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 18l6-6-6-6M8 6l-6 6 6 6"
            />
          </svg>
          Ethmane Didi
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        <ul
          className={clsx(
            'absolute sm:relative sm:flex w-full sm:w-auto flex-col sm:flex-row top-full left-0 right-0 transform transition ease-out duration-300',
            isMenuOpen ? 'flex bg-gray-800 bg-opacity-90 px-5 py-2' : 'hidden', // Apply background only when menu is open
            'items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:text-gray-950 dark:sm:text-gray-200 sm:flex-nowrap sm:gap-5 z-10',
          )}
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false); // Close menu on click
                }}
                passHref
              >
                <motion.a
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 transition-colors duration-300',
                    {
                      'bg-blue-600 text-white rounded-lg':
                        activeSection === link.name,
                      'hover:bg-blue-500 hover:text-white':
                        activeSection !== link.name,
                      'dark:text-gray-300': activeSection !== link.name,
                    },
                  )}
                >
                  {link.name}
                </motion.a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
