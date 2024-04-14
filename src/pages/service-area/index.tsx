import { HashLink } from "react-router-hash-link"

import DetailCardWithImageCard from "../../components/cards/DetailCardWithImageCard"
import PageHeader from "../../components/layouts/PageHeader"
import SvgMapLocation from "../../components/images/icons/SvgMapLocation"
import SvgServiceAreaMap from "../../components/images/sections/SvgServiceAreaMap"
import PageSection from "../../components/layouts/PageSection"

const ServiceAreaPage = () => {
  return (
    <PageSection id="intro-service-area">
      <PageHeader
        titlePartA="Service"
        titlePartB=" Area"
        Description="Our primary service area encompasses the greater Bozeman area community and Gallatin County. Check out the list below for communities we commonly serve." />
      <DetailCardWithImageCard
        detailCard={
          <>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-br from-primaryLight to-yellow-500 dark:from-primary dark:to-yellow-400">
                <div className="flex h-16 w-16 scale-[0.96] rounded-full bg-gray-900 dark:bg-white">
                  <SvgMapLocation className="m-auto h-8 w-auto" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white dark:text-gray-800">Communities We Serve</h3>
              </div>
            </div>
            <div className="my-8 mb-8 grid grid-cols-2 rounded-3xl border border-gray-700 text-white dark:border-gray-200 dark:text-gray-600 [&>*]:border-gray-700 [&>*]:p-4 [&>*]:dark:border-gray-200">
              <div className="flex justify-center gap-2 border-b">
                Bozeman
              </div>
              <div className="flex justify-center gap-2 border-b border-l">
                Belgrade
              </div>
              <div className="flex justify-center gap-2">
                Gallatin Gateway
              </div>
              <div className="flex justify-center gap-2 border-l">
                Big Sky
              </div>
            </div>

            <p className="my-8 text-white dark:text-gray-700">Communities outside the Bozeman, Belgrade, Gallatin Gateway city/community limits have a scaling trip fee.</p>

            <p className="my-8 text-white dark:text-gray-700">Don't see your community listed or have other questions about our service area? Please contact us to confirm if you're located within our broader service area.</p>

            <HashLink to="/contact/#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
              <span className="relative text-base font-semibold text-white dark:text-dark">Contact Us</span>
            </HashLink>
          </>
        }
        imageCard={<SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-300/100 object-cover object-top shadow-xl" />}
      />
    </PageSection>
  )
}

export default ServiceAreaPage
