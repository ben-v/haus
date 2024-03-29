// import React from 'react'
import FormEmail from './FormEmail'

const WorkFlow = () => {
  return (
    <section className="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
      <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
        <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
          <div className="items-end justify-between md:flex">
            <div className="h-max py-16 md:w-6/12 xl:w-5/12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                  One step to improve <br />
                  your workflow
                </h2>
                <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">Praesentium, atque exercitationem dolorum, iste libero eaque animi illum magnam velit iusto quidem omnis quas! Ad expedita quaerat.</p>
                <FormEmail />
              </div>
            </div>

            <div className="md:w-[42%] lg:w-1/2">
              <img src="./../images/cta-cards.webp" alt="tailus stat cards components" loading="lazy" width="1299" height="678" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkFlow