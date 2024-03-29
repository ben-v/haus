// import React from 'react'
// import Icons from '../../assets/images/icons/Icon'

import FeatureCard from '../../../components/cards/FeatureCard';

const TechnologyApproach = () => {
  const features = [
    {
      title: 'First Feature',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/584/584796.png',
    },
    {
      title: 'Second Feature',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/6106/6106288.png',
    },
    {
      title: 'Third feature',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/4727/4727266.png',
    },
  ];


  return (
    <section className="relative mb-32 pt-32">
      <div aria-hidden="true" className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
        <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white xl:text-5xl">A technology-first approach</h2>
          <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default TechnologyApproach