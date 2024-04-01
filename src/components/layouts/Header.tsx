// import React, { useState } from 'react'
import { useState } from 'react';
import tailwindConfig from '../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig'

import { Link } from 'react-router-dom'
import Icons from '../../assets/images/icons/Icon'

// import Logo from '../../assets/images/Logo';
import Sun from '../../assets/images/Sun';
import Moon from '../../assets/images/Moon';

interface NavLink {
  path: string;
  label: string;
}

const fullConfig = resolveConfig(tailwindConfig)

const Header = () => {

  const navLinks: NavLink[] = [
    { path: '/#solutions', label: 'Solutions' },
    { path: '/#company', label: 'Company' },
    { path: '/#features', label: 'Features' },
    { path: '/#testimonials', label: 'Testimonials' },
    { path: '/#pricing', label: 'Pricing' },
  ];

  const [, setIsDarkMode] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark');
  };

  const toggleNavbar = () => {
    setIsNavbarActive(prevState => !prevState);
  }
    
  return (
    <header>
      <nav id="navbar" className={`fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80 ${isNavbarActive ? 'navbar-active' : ''}`}>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link to="/#home" aria-label="HAUS Property Services Logo" className="nav-link flex items-center space-x-2">
                {Icons.Logo(document.body.classList.contains('dark') ? fullConfig.theme.colors.white : fullConfig.theme.colors.black)}
              </Link>

              <button aria-label="hamburger" id="hamburger" className="relative -mr-6 p-6 lg:hidden" onClick={toggleNavbar}>
                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
              </button>
            </div>
            <div aria-hidden="true" id="layer" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"></div>
            <div id="navlinks" className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} onClick={toggleNavbar} className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4">
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                <Link to="/contact/" onClick={toggleNavbar} className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                  <span className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white">Get started</span>
                </Link>
              </div>
              <button onClick={toggleDarkMode} className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                <Sun />
                <Moon />
              </button>
            </div>
            <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
              <button onClick={toggleDarkMode} className="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                <Sun />
                <Moon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header