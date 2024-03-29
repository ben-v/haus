import React, { useState } from 'react'

const FormEmail = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email submitted:', email);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-12">
      <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark md:p-2 lg:pr-3">
        <div className="py-3 pl-4 lg:pl-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <input
          aria-label="your email"
          placeholder="Your mail address"
          className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:text-white dark:placeholder-white"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <div className="md:pr-1.5 lg:pr-0">
          <button type="submit" title="Start buying" className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
            <span className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block"> Get Started </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormEmail