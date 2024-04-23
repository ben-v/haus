import { useContext } from "react";
import { HashLink } from "react-router-hash-link"
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../../../tailwind.config';
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import SvgServiceAreaMap from "../../../components/images/sections/SvgServiceAreaMap"
import SvgMapLocationDotSolid from "../../../components/images/icons/SvgMapLocationDotSolid"
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ContentSection from "../../../components/layouts/ContentSection";

// const fullConfig = resolveConfig(tailwindConfig)

const ServiceAreaDetail = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <ContentSection flexDirection="Center">
      <div className="m-auto items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-1">
        <div className="relative mx-4 rounded-3xl rounded-b-none border border-gray-700 bg-gray-800 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-white dark:shadow-none md:mx-0 md:w-6/12 md:rounded-r-none md:rounded-l-3xl lg:w-7/12">
          <div className="relative z-10 p-4 md:p-6 pt-16 md:rounded-r-2xl lg:p-16 lg:pl-[4.375rem]">
            <ContentIconContainer title="Communities We Serve" invertContainerColors={true} titleSize="Large">
              <SvgMapLocationDotSolid fill={theme === THEMES.DARK ? 'dark' : 'white'} className="m-auto w-auto" width={40} height={48} />
            </ContentIconContainer>
            <div className="my-8 mb-8 grid grid-cols-2  rounded-3xl border border-gray-700 text-white dark:border-gray-200 dark:text-gray-600 [&>*]:border-gray-700 [&>*]:p-4 [&>*]:text-xs md:[&>*]:text-sm lg:[&>*]:text-lg [&>*]:dark:border-gray-200">
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

            <p className="my-8 text-white dark:text-gray-700">Communities outside the Bozeman, Belgrade, Gallatin Gateway city/community limits have a scaling trip fee.</p>

            <p className="my-8 text-white dark:text-gray-700">Don't see your community listed or have questions about our service area? Feel free to reach out to us for more information. We're here to help!</p>

            <HashLink to="/contact/#" className="relative flex h-11 w-full items-center justify-center px-6 mb-4 md:mb-auto before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
              <span className="relative text-base font-semibold text-white dark:text-dark">Contact Us</span>
            </HashLink>
          </div>
        </div>
        <RoundCornerContainer width="Fixed" useGradientBackground={true}>
          <div className='relative z-10'>
            <SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-300/100 object-cover object-top shadow-2xl" />
          </div>
        </RoundCornerContainer>
      </div>
    </ContentSection>
  )
}

export default ServiceAreaDetail
