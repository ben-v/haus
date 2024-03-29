// import React from 'react'
import { Link } from 'react-router-dom'

const clients = [
  { src: './images/clients/airbnb.svg', alt: 'airbnb', width: '', height: '', className: 'h-8 w-auto lg:h-10 lg:w-auto' },
  { src: './images/clients/coty.svg', alt: 'coty', width: '', height: '', className: 'h-8 w-auto lg:h-10 lg:w-auto' },
  { src: './images/clients/ge.svg', alt: 'ge', width: '100', height: '100', className: 'h-8 w-auto lg:h-10 lg:w-auto' },
  { src: './images/clients/lilly.png', alt: 'lilly', width: '', height: '', className: 'h-8 w-auto lg:h-10 lg:w-auto' },
  { src: './images/clients/microsoft.svg', alt: 'microsoft', width: '', height: '', className: 'h-8 w-auto lg:h-10 lg:w-auto' }
];
const Companies = () => {
  return (
    <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
      <div className="mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20">
        <Link to="customers.html" className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</Link>
        <div className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className={client.className}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies