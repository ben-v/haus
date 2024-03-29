// import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../assets/images/icons/Icon'

const OrganizationCard = () => {
  return (
    <div className="relative mx-4 rounded-3xl rounded-t-none border border-gray-700 bg-gray-800 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-white dark:shadow-none md:mx-0 md:w-6/12 md:rounded-l-none md:rounded-tl-none md:rounded-tr-3xl lg:w-7/12">
      <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-9 lg:p-16 lg:pl-[4.375rem]">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gradient-to-br from-primaryLight to-yellow-500 dark:from-primary dark:to-yellow-400">
            <div className="flex h-16 w-16 scale-[0.96] rounded-full bg-gray-900 dark:bg-white">
              <img src="https://tailus.io/sources/blocks/comparator/preview/images/organization.webp" className="m-auto h-8 w-auto" alt="organization icon" width="512" height="512" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white dark:text-gray-800">Organizations</h3>
            <p className="mt-1 text-gray-400 dark:text-gray-600">For teams with 100+ employees</p>
          </div>
        </div>

        <p className="my-8 text-white dark:text-gray-700">Voluptatum iure rerum qui Voluptates dignissimos quibusdam reiciendis soluta tempore illum possimus esse.</p>

        <div className="mb-8 grid grid-cols-2 rounded-3xl border border-gray-700 text-white dark:border-gray-200 dark:text-gray-600 [&>*]:border-gray-700 [&>*]:p-4 [&>*]:dark:border-gray-200">
          <div className="flex justify-center gap-2 border-b">
            {Icons.shine()}
            Shine
          </div>
          <div className="flex justify-center gap-2 border-b border-l">
            {Icons.Feature()}
            Feature
          </div>
          <div className="flex justify-center gap-2">
            {Icons.Boost()}
            Boost
          </div>
          <div className="flex justify-center gap-2 border-l">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 opacity-60">
              <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>
            Build
          </div>
        </div>

        <Link to="#" className="block rounded-2xl border border-gray-700 bg-gray-700/50 p-6 text-center dark:border-primary/20 dark:bg-primary/5 md:-mx-6 md:-mb-6 lg:-mx-12 lg:-mb-12">
          <span className="text-xl font-semibold text-primaryLight dark:text-primary">Contact sales</span>
        </Link>
      </div>
    </div>
  )
}

export default OrganizationCard