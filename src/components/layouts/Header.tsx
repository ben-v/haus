import { useContext, useState } from 'react';
import tailwindConfig from '../../../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig'

import { HashLink, NavHashLink } from 'react-router-hash-link';
import DynamicImageManager from '../../managers/DynamicImageManager';

import { ThemeContext, THEMES } from "../../contexts/ThemeContext";
import Sun from '../images/Sun';
import Moon from '../images/Moon';
import { Tooltip } from "react-tooltip";
import SvgPhoneSolid from '../images/SvgPhoneSolid';
import SvgArrowUpRightFromSquareSolid from '../images/SvgArrowUpRightFromSquareSolid';
import { Link } from 'react-router-dom';
import SvgRectangleListSolid from '../images/SvgRectangleListSolid';
import SvgAddressBookSolid from '../images/SvgAddressBookSolid';

const fullConfig = resolveConfig(tailwindConfig)


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const navLinkGroup: NavLinkGroup = {
    links: [
      { url: '/#clients', label: 'Clients' },
      { url: '/#services', label: 'Services' },
      { url: '/#service-area', label: 'Service Area' },
      { url: '/faqs/#', label: 'FAQs' },
      { url: '/contact/#', label: 'Contact' },      
    ]
  }

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(prevState => !prevState);
  }
  
  const closeNavbar = () => {
    if (isNavbarActive) {
      toggleNavbar();
    }
  }

  return (
    <header>
      <nav id="navbar" className={`fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80 ${isNavbarActive ? 'navbar-active' : ''}`}>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <HashLink to="/#" smooth aria-label="HAUS Property Services Logo" className="nav-link flex items-center space-x-2" onClick={closeNavbar}>
                {DynamicImageManager.Logo(theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.black)}
              </HashLink>
              <button aria-label="hamburger" id="hamburger" className="relative -mr-6 p-6 lg:hidden" onClick={toggleNavbar}>
                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
              </button>
            </div>
            <div aria-hidden="true" id="layer" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"></div>
            <div id="navlinks" className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent">
                                           
              <div className="text-gray-600 dark:text-gray-300 lg:pr-1">
                <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {navLinkGroup.links.map((link, index) => (
                    <li key={index}>
                      <NavHashLink to={link.url} smooth onClick={closeNavbar} className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-3">
                        <span>{link.label}</span>
                      </NavHashLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-4 lg:space-y-0 lg:border-l lg:pl-4">
                <HashLink to="/request/#" smooth onClick={closeNavbar} data-tooltip-id="new-client-tooltip" className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                  <div className="pr-2">
                    <SvgRectangleListSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.primary} />
                  </div>
                  <div>
                    <span className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white whitespace-nowrap">Work Request</span>
                  </div>
                </HashLink>
                <Tooltip id="new-client-tooltip" className='react-tooltip'>
                  New client? Best way to get things started is to fill<br />out a new work request for us to review.
                </Tooltip>

                <HashLink to="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" onClick={closeNavbar} data-tooltip-id="existing-client-tooltip" className="relative ml-4 flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                  
                  <div className="inline-flex items-center justify-left">
                    <div className="pr-2">
                      <SvgAddressBookSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.primary} />
                    </div>
                    <div>
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white whitespace-nowrap">
                        Client Hub
                      </span>
                    </div>
                    <div className="pl-2">
                      <SvgArrowUpRightFromSquareSolid width={10} height={10} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.primary} />
                    </div>
                  </div>
                </HashLink>
                <Tooltip id="existing-client-tooltip" className="bg-primary">
                  Are you already working with us? If so, visit the Client Hub<br />to approve quotes, check appointment details, pay invoices,<br />print receipts, or request more work—all in one place. 
                </Tooltip>

                <div className='ml-4'>
                  <Link to="tel:4063129989" onClick={closeNavbar} className="relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                    <SvgPhoneSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.primary} />
                  </Link>
                </div>
              </div>
              <div className="mt-12 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-4 lg:space-y-0 lg:border-l lg:pl-4">
                <button onClick={toggleTheme} className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                  <Sun />
                  <Moon />
                </button>
              </div>
            </div>
            <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
              <button onClick={toggleTheme} className="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
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