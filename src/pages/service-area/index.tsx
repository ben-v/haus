import { HashLink } from "react-router-hash-link"

import DetailCardWithImageCard from "../../components/cards/DetailCardWithImageCard"
import PageHeader from "../../components/layouts/PageHeader"
import SvgMapLocation from "../../components/images/icons/SvgMapLocation"
import SvgServiceAreaMap from "../../components/images/sections/SvgServiceAreaMap"

const ServiceAreaPage = () => {
  return (
    <section id="intro-service-area" className="overflow-x-clip pt-24 lg:pt-32 pb-10">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
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

              <HashLink to="/contact/#" className="block rounded-2xl border border-gray-700 bg-gray-700/50 p-6 text-center dark:border-primary/20 dark:bg-primary/5 md:-mx-6 md:-mb-6 lg:-mx-12 lg:-mb-12">
                <span className="text-xl font-semibold text-primaryLight dark:text-primary">Contact Us</span>
              </HashLink>
            </>
          }
          imageCard={<SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-300 object-cover object-top shadow-2xl" />}
        />
      </div>
    </section>
  )
}

export default ServiceAreaPage
