import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config';

import { ThemeContext, THEMES } from "../../contexts/ThemeContext";
import { Tooltip } from "react-tooltip";

import SvgPhoneSolid from '../images/SvgPhoneSolid';
import SvgArrowUpRightFromSquareSolid from '../images/SvgArrowUpRightFromSquareSolid';
import SvgRectangleListSolid from '../images/SvgRectangleListSolid';
import SvgAddressBookSolid from '../images/SvgAddressBookSolid';
import SvgMoon from '../images/SvgMoon';
import SvgSun from '../images/SvgSun';
import SvgLogo from '../images/SvgLogo';

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

  const toggleThemeCloseMenu = () => {
    closeNavbar();

    if (toggleTheme) {
      toggleTheme();
    }
  }

  return (
    <header>
      <nav id="navbar" className={`fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80 ${isNavbarActive ? 'navbar-active' : ''}`}>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <HashLink to="/#" smooth aria-label="HAUS Property Services Logo" className="nav-link flex items-center space-x-2" onClick={closeNavbar}>
                <SvgLogo fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.black} className="bi bi-logo h-9 w-auto" />
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
              <div className="hidden lg:flex">
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
              </div>
              <div className="mt-12 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-4 lg:space-y-0 lg:border-l lg:pl-4 sm:hidden md:hidden">
                  <button onClick={toggleTheme} className="switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                    <SvgSun fill="currentColor" className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" />
                    <SvgMoon fill="currentColor" className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" />
                  </button>
              </div>
              <div className="mt-12 w-full space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row lg:mt-0 lg:mr-4 lg:space-y-0 lg:border-l lg:pl-4 inline-flex items-center justify-left">
                <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                onClick={toggleThemeCloseMenu}
                checked={theme === THEMES.DARK}
                role="switch"
                id="flexSwitchCheckDefault" />
                <label
                    className="inline-block pl-2 hover:cursor-pointer text-gray-600 dark:text-gray-300"
                    htmlFor="flexSwitchCheckDefault">Switch To {theme === THEMES.DARK ? "Bright" : "Dark"} Colors</label>
              </div>
            </div>

            {/* Quick access menu items for smaller displays */}
            <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
              <Link to="/request/#" onClick={closeNavbar}>
                <button className="ml-2 switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                  <SvgRectangleListSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.gray[300] : fullConfig.theme.colors.gray[600]} />
                </button>
              </Link>
              <Link to="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" onClick={closeNavbar}>
                <button className="ml-2 switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                  <SvgAddressBookSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.gray[300] : fullConfig.theme.colors.gray[600]} />
                </button>
              </Link>
              <Link to="tel:4063129989" onClick={closeNavbar}>
                <button className="ml-2 switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                  <SvgPhoneSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.gray[300] : fullConfig.theme.colors.gray[600]} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header