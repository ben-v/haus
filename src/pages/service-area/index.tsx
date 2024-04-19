import { HashLink } from "react-router-hash-link"

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config';

import { ThemeContext, THEMES } from "../../contexts/ThemeContext";

import DetailCardWithImageCard from "../../components/cards/DetailCardWithImageCard"
import PageHeader from "../../components/layouts/PageHeader"
// import SvgMapLocation from "../../components/images/icons/SvgMapLocation"
import SvgServiceAreaMap from "../../components/images/sections/SvgServiceAreaMap"
import PageContainer from "../../components/layouts/PageContainer"
import SvgMapLocationDotSolid from "../../components/images/icons/SvgMapLocationDotSolid"
import { useContext } from "react";
import ContentIconContainer from "../../components/containers/ContentIconContainer";
// import CardHeader from "../../components/layouts/CardHeader";

const fullConfig = resolveConfig(tailwindConfig)

const ServiceAreaPage = () => {
  const { theme,  } = useContext(ThemeContext);
  
  return (
    <PageContainer id="intro-service-area">
      <PageHeader
        titlePartA="Service"
        titlePartB=" Area"
        description="Our primary service area encompasses the greater Bozeman area community and Gallatin County. Check out the list below for communities we commonly serve." />
      <DetailCardWithImageCard
        detailCard={
          <>
            <ContentIconContainer title="Communities We Serve" invertContainerColors={true} titleSize="Large">
              <SvgMapLocationDotSolid fill={theme === THEMES.DARK ? fullConfig.theme.colors.dark : fullConfig.theme.colors.white} className="m-auto w-auto" width={40} height={48} />
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
          </>
        }
        imageCard={<SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-300/100 object-cover object-top shadow-2xl" />}
      />
    </PageContainer>
  )
}

export default ServiceAreaPage
