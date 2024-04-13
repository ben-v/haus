// import React from 'react';
// import { Link } from 'react-router-dom';
// import SvgPhoneSolid from '../images/SvgPhoneSolid';
import SvgServiceAreaMap from '../images/sections/SvgServiceAreaMap';

// interface PricingCardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   discount: number;
//   advantages: string[]; // Assuming advantages is an array of strings
//   phoneNumber: string;
// }

const PricingCard = () => {

  // const { title, description, imageUrl, discount, advantages, phoneNumber } = props;

  return (
    <div className="relative z-10 -mx-2 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none md:mx-0 md:w-6/12 lg:w-5/12">
      <div className="space-y-6 p-8 sm:p-12">
        <SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-300 object-cover object-top shadow-2xl" />
        {/* <div className="flex items-center justify-center gap-4">
          <div className="flex h-16 w-16 rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
            <img src={imageUrl} className="m-auto h-8 w-auto" alt="organization icon" width="512" height="512" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
        <div className="relative flex justify-around">
          <div className="flex items-end">
            <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">{discount}</span>
            <div className="pb-2">
              <span className="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
              <span className="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
            </div>
          </div>
        </div>
        <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
          {advantages.map((advantage, index) => (
            <li key={index} className="space-x-2">
              <span className="font-semibold text-gray-500">✓</span>
              <span>{advantage}</span>
            </li>
          ))}


        </ul>
        <p className="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300">
          <span>Call us at</span>
          <Link to={`tel:${phoneNumber}`} className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <SvgPhoneSolid fill="currentColor" width={24} height={24} />
            <span className="font-semibold">{phoneNumber}</span>
          </Link>
          <span>or</span>
        </p>
        <Link to="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
          <span className="relative text-base font-semibold text-white dark:text-dark">Send us an Email</span>
        </Link> */}
      </div>
    </div>
  );
};

export default PricingCard;
