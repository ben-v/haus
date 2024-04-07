// import React from 'react'
import FormEmail from './FormEmail'
import { Link } from 'react-router-dom';
import Line from '../../../components/images/Line';

const Hero = () => {
  const avatars = [
    './images/avatars/avatar.webp',
    './images/avatars/avatar-1.webp',
    './images/avatars/avatar-2.webp',
    './images/avatars/avatar-3.webp',
    './images/avatars/avatar-4.webp',
  ];
  return (
    <section id="home" className="pt-32 sm:pt-32 md:pt-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="relative">
          <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
            Design, Build,
            <span className="relative">
              <Line />
              <span className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">Scale</span>
            </span>
          </h1>

          <div className="relative items-center gap-12 lg:flex">
            <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
              <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold great work back.</p>
              <FormEmail />
              <div className="mt-12 hidden lg:block">
                <span className="text-gray-700 dark:text-white">From the most talented <Link to="#" className="text-primary underline dark:text-primaryLight">Team</Link> !</span>
                <div className="mt-5 flex -space-x-1 *:h-10 *:w-10 *:rounded-full *:object-cover *:ring-4 *:ring-gray-100 dark:*:ring-gray-900">
                  {avatars.map((avatarSrc, index) => (
                    <img key={index} src={avatarSrc} alt={`user avatar ${index}`} className='w-10 h-10 rounded-full' />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
              <img className="w-full" src="./images/team.svg" alt="project illustration" height="600" width="800" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero