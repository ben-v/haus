import { useContext } from "react";
import { HashLink } from "react-router-hash-link"
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../../../tailwind.config';
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
// import SvgServiceAreaMap from "../../../components/images/sections/SvgServiceAreaMap"
import SvgMapLocationDotSolid from "../../../components/images/icons/SvgMapLocationDotSolid"
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
// import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import GenericContentContainer from "../../../components/containers/GenericContentContainer";

// const fullConfig = resolveConfig(tailwindConfig)

const ServiceAreaDetail = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <ContentSectionContainer flexDirection="Center">
      <GenericContentContainer padding="None" bodyClassNames="gap-8">
        <ContentIconContainer title="Communities We Serve">
          <SvgMapLocationDotSolid fill={theme === THEMES.DARK ? 'white' : 'dark'} className="m-auto w-auto" width={40} height={48} />
        </ContentIconContainer>
        <div className="grid grid-cols-2 rounded-3xl border dark:border-gray-700 general-body-text border-gray-200 [&>*]:dark:border-gray-700 [&>*]:p-4 [&>*]:text-xs md:[&>*]:text-sm lg:[&>*]:text-lg [&>*]:border-gray-200">
          <div className="flex justify-center items-center gap-2 border-b">
            Bozeman
          </div>
          <div className="flex justify-center items-center gap-2 border-b border-l">
            Belgrade
          </div>
          <div className="flex justify-center items-center gap-2">
            Gallatin Gateway
          </div>
          <div className="flex justify-center items-center gap-2 border-l">
            Big Sky
          </div>
        </div>

        <p className="general-body-text">Communities outside the Bozeman, Belgrade, Gallatin Gateway city/community limits have a scaling trip fee.</p>

        <p className="general-body-text">Don't see your community listed or have questions about our service area? Feel free to reach out to us for more information. We're here to help!</p>

        <HashLink to="/contact/#" className="relative flex h-11 w-full items-center justify-center px-6 mb-4 md:mb-auto before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
          <span className="relative text-base font-semibold text-white dark:text-dark">Contact Us</span>
        </HashLink>
      </GenericContentContainer>
    </ContentSectionContainer>
  )
}

export default ServiceAreaDetail
