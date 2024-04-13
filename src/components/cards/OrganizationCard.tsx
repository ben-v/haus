import { HashLink } from 'react-router-hash-link'

import SvgMapLocation from '../images/icons/SvgMapLocation'

const OrganizationCard = () => {
  return (
    <div className="relative mx-4 rounded-3xl rounded-b-none border border-gray-700 bg-gray-800 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-white dark:shadow-none md:mx-0 md:w-6/12 md:rounded-r-none md:rounded-l-3xl lg:w-7/12">
      <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-9 lg:p-16 lg:pl-[4.375rem]">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gradient-to-br from-primaryLight to-yellow-500 dark:from-primary dark:to-yellow-400">
            <div className="flex h-16 w-16 scale-[0.96] rounded-full bg-gray-900 dark:bg-white">
              <SvgMapLocation className="m-auto h-8 w-auto" />
              {/* <img src="https://tailus.io/sources/blocks/comparator/preview/images/organization.webp" className="m-auto h-8 w-auto" alt="organization icon" width="512" height="512" /> */}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white dark:text-gray-800">Communities We Service</h3>
          </div>
        </div>

        {/* <p className="my-8 text-white dark:text-gray-700">Voluptatum iure rerum qui Voluptates dignissimos quibusdam reiciendis soluta tempore illum possimus esse.</p> */}

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
      </div>
    </div>
  )
}

export default OrganizationCard