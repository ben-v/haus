import { useContext } from "react";

import { ThemeContext, THEMES } from "../../contexts/ThemeContext";

import PageSection from "../../components/layouts/PageSection"
import PageHeader from "../../components/layouts/PageHeader"
import SvgIntroDark from "../../components/images/sections/SvgIntroDark";
import SvgIntroLight from "../../components/images/sections/SvgIntroLight";
import SvgIntroSuccessLight from "../../components/images/sections/SvgIntroSuccessLight";
import SvgIntroSuccessDark from "../../components/images/sections/SvgIntroSuccessDark";

const LandingPage = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <PageSection id="landing" width="Wide">
      <PageHeader titlePartA="Comfortable, Functional,&nbsp;" titlePartB="Happy Homes" highlightType="Vibrant" titleAlignment="Left" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-7/12 w-auto">
          <p className="m-2 md:m-6 lg:mt-12 lg:ml-3 text-gray-600 dark:text-gray-300 text-lg text-center md:text-left"><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.</p>
        </div>
        <div className="lg:w-5/12 w-auto px-4 mt-2 lg:mt-6">
          {(theme === THEMES.DARK) ? <SvgIntroDark className="w-full" /> : <SvgIntroLight className="w-full" />}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-8/12 w-auto p-2">
          <div className="py-2 px-0 md:p-2 w-auto text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">Where old school meets new</h2>
          </div>
          <p className="m-2 md:m-6 lg:mt-12 lg:ml-3 text-gray-600 dark:text-gray-300 text-lg text-center md:text-left">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project...in corporate America or in the home.</p>
        </div>
        <div className="lg:w-4/12 w-auto px-4 mt-2 lg:mt-6">
          {(theme === THEMES.DARK) ? <SvgIntroSuccessDark className="w-full" /> : <SvgIntroSuccessLight className="w-full" />}
        </div>
      </div>
      {/*
        
        Might leave services section on the landing page because want that to be readily avaible to user; the menu option, although the hamburger menu is normal on mobile, is not super obvious. 
        By keeping this secton on landing page, I'm betting this is information the user wants right away.
        
        <Services />
        
        */}
    </PageSection>
  )
}

export default LandingPage