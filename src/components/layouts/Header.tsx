import { useContext, useState } from "react";
import { } from "@material-tailwind/react/theme/base/colors";

import { ThemeContext, THEMES } from "../contexts/ThemeContext";

import SvgPhoneSolid from "../images/icons/SvgPhoneSolid";
import SvgArrowUpRightFromSquareSolid from "../images/icons/SvgArrowUpRightFromSquareSolid";
import SvgRectangleListSolid from "../images/icons/SvgRectangleListSolid";
import SvgAddressBookSolid from "../images/icons/SvgAddressBookSolid";
import SvgMoon from "../images/icons/SvgMoon";
import SvgSun from "../images/icons/SvgSun";
import SvgLogo from "../images/SvgLogo";

import { Tooltip } from "react-tooltip";

import Toggle from "react-toggle";
import "react-toggle/style.css" // for ES6 modules
import { ICON_SIZES } from "../images/icons/IconConfig";
import { NavLinkGroup } from "../navigation/NavLinkProps";
import StandardLink from "../navigation/StandardLink";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const navLinkGroup: NavLinkGroup = {
    links: [
      { url: "clients", children: "Clients", isExternalRoute: false },
      { url: "services", children: "Services", isExternalRoute: false },
      { url: "service-area", children: "Service Area", isExternalRoute: false },
      { url: "faqs", children: "FAQs", isExternalRoute: false },
      { url: "contact", children: "Contact", isExternalRoute: false },      
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
      <nav id="navbar" className={`page-body-start-highlight-line fixed inset-x-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80 ${isNavbarActive ? "navbar-active" : ""}`}>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4 app-tooltip-container">
            <div className="relative z-50 flex w-full justify-between md:px-0 lg:w-max">
              <StandardLink url="/" aria-label="HAUS Property Services Logo" className="nav-link flex items-center space-x-2" onClick={closeNavbar}>
                <SvgLogo fill={theme === THEMES.DARK ? "white" : "black"} className="bi bi-logo h-9 w-auto" />
              </StandardLink>
              <button aria-label="hamburger" id="hamburger" className="relative -mr-6 p-6 lg:hidden" onClick={toggleNavbar}>
                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
              </button>
            </div>
            <div aria-hidden="true" id="layer" className="fixed inset-0 z-40 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"></div>
            <div id="navlinks" className="invisible absolute top-full left-0 z-50 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <ul className="space-y-6 sm:space-y-3 md:space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm md:gap-[18px]">
                  {navLinkGroup.links.map((link, index) => (
                    <li key={index}>
                      <StandardLink url={link.url ? link.url : "#"} onClick={closeNavbar} className="nav-link block transition nav-button">
                        <span>{link.children}</span>
                      </StandardLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex">
                <div className="mt-12 flex w-full flex-col gap-3 space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-4 lg:space-y-0 lg:border-l lg:pl-4">
                  <div>
                    <StandardLink url="/work-request" onClick={closeNavbar} data-tooltip-id="new-client-tooltip-selector-large" className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800 nav-button">
                      <div className="pr-2">
                        <SvgRectangleListSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className="relative m-auto nav-button-icon" />
                      </div>
                      <div>
                        <span className="relative text-sm font-semibold whitespace-nowrap">Work Request</span>
                      </div>
                    </StandardLink>
                  </div>
                  <div>
                    <a href="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" onClick={closeNavbar} data-tooltip-id="existing-client-tooltip-selector-large" className=" relative flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800 nav-button">
                      <div className="inline-flex items-center justify-left">
                        <div className="pr-2">
                          <SvgAddressBookSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className="relative m-auto" />
                        </div>
                        <div>
                          <span className="relative text-sm font-semibold whitespace-nowrap">
                            Client Hub
                          </span>
                        </div>
                        <div className="pl-2">
                          <SvgArrowUpRightFromSquareSolid width={10} height={10} className="relative m-auto" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <StandardLink url="tel:4063129989" isExternalRoute={true} onClick={closeNavbar} className="relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex nav-button">
                      <SvgPhoneSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className="relative m-auto" />
                    </StandardLink>
                    </div>
                </div>
              </div>
              <div className="mt-12 hidden flex-col space-y-2 border-primary/10 dark:border-gray-700 lg:mt-0 lg:space-y-0 lg:border-l lg:pl-4 lg:flex">
                  <button onClick={toggleTheme} className="switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                    <SvgSun fill="currentColor" className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300" />
                    <SvgMoon fill="currentColor" className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden" />
                  </button>
              </div>
              <div className="mt-6 w-full border-primary/10 dark:border-gray-700 sm:flex-row lg:hidden inline-flex items-center justify-start hover:cursor-pointer" onClick={toggleThemeCloseMenu}>
                <div className="nav-button md:mr-3 w-full">Dark Mode Is <span className="font-semibold">{theme === THEMES.DARK ? "On" : "Off" }</span></div>
                <Toggle
                  id="theme-switcher-small-displays"
                  defaultChecked={theme === THEMES.DARK}
                  checked={theme === THEMES.DARK}
                  icons={false}
                  onChange={toggleThemeCloseMenu} />                
                </div>
            </div>

            {/* Quick access menu items for smaller displays */}
            <div className="fixed top-3 right-14 z-50 sm:right-24 lg:hidden">
              <StandardLink url="/work-request" onClick={closeNavbar}>
                <button className="ml-2 switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex nav-button">
                  <SvgRectangleListSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className="relative m-auto" fill={theme === THEMES.DARK ? "white" : "primary"} />
                </button>
              </StandardLink>
              <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" onClick={closeNavbar} isExternalRoute={true}>
                <button className="ml-2 switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex nav-button">
                  <SvgAddressBookSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className="relative m-auto" fill={theme === THEMES.DARK ? "white" : "primary"} />
                </button>
              </StandardLink>
              <StandardLink url="tel:4063129989" onClick={closeNavbar} isExternalRoute={true}>
                <button className="ml-2 switcher group relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex nav-button">
                  <SvgPhoneSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className="relative m-auto" fill={theme === THEMES.DARK ? "white" : "primary"} />
                </button>
              </StandardLink>
            </div>    

            {/*
            4/8/24 - Do not display tooltips for menu items on mobile/smaller displays; user has to press on the StandardLink url activate and does not provide the user with 
            much additional guidance by that point. By removing, this improves the user experience by not having to coordinate the display of tooltips between small/large displays and
            orientation dchanges.
            */}        
            <Tooltip id="new-client-tooltip-selector-large" className="app-tooltip" opacity={1}>
              <p className="font-bold pb-2 text-base">New client?</p>
              <p>The best way to get started with us is to fill out a <span className="font-semibold">Work Request</span> for us to review.</p>
            </Tooltip>

            <Tooltip id="existing-client-tooltip-selector-large" className="app-tooltip" opacity={1}>
              <p className="font-bold pb-2 text-base">Are you already working with us?</p>
              <p>Visit the <span className="font-semibold">Client Hub</span> to approve quotes, check appointment details, pay invoices, print receipts, or request more work—all in one place.</p>
            </Tooltip>      
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header