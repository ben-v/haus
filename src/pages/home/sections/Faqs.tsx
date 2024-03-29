// import React from 'react'
import FaqsList from '../../../components/lists/FaqsList'

const Faqs = () => {
  return (
    <section id="faqs" className="my-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Frequently Asqued Questions</h2>

        <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          <FaqsList />
        </div>
      </div>
    </section>
  )
}

export default Faqs