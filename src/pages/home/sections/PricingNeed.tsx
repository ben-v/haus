// import React from 'react'
// import { Link } from 'react-router-dom'
// import Icons from '../../assets/images/icons/Icon'
import PricingCard from '../../../components/cards/PricingCard'
import OrganizationCard from '../../../components/cards/OrganizationCard'

const PricingNeed = () => {
  return (
    <section id="pricing" className="overflow-x-clip pt-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
        <div className="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">A pricing for every need</h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300">Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse aspernatur impedit nihil quisquam, voluptates placeat architecto adipisci id cum enim.</p>
        </div>
        <div className="relative mt-20">
          <div className="absolute inset-0 -bottom-20 mx-auto mt-auto h-[50rem] w-[68rem] rounded-full bg-secondaryLight/50 blur-3xl dark:bg-secondary/40 md:m-auto"></div>
          <div className="m-auto items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-1">
            <PricingCard />

            <OrganizationCard />
          </div>

        </div>
      </div>
    </section>
  )
}

export default PricingNeed