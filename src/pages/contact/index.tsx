
import PageSection from "../../components/layouts/PageSection"
import PageHeader from "../../components/layouts/PageHeader"
import { HashLink } from "react-router-hash-link"

const ContactPage = () => {
    return (
      <PageSection id="contact">
        <PageHeader
          titlePartA="Let's"
          titlePartB=" Connect"
          Description="If you have project ideas or general questions you'd like to talk about, please fill out the form below to send us a message; we are happy to discuss with you and will reply shortly." />
        <div className="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max lg:grid-cols-2">
          <div className="relative">
            <form action="" className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
              <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">What should we know ?</h2>
                <div className="mt-8 mb-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-gray-600 dark:text-gray-300">Name <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                    <input type="text" name="name" id="name" className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300">Email <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                    <input type="email" name="email" id="email" className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-gray-600 dark:text-gray-300">Phone <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                    <input type="tel" name="phone" id="phone" className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-gray-600 dark:text-gray-300">Message <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                    <textarea name="message" id="message" className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>

                    <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                  </div>
                </div>

                <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">By clicking submit below, you agree to the processing of your personal information by HAUS Property Services as described in our <HashLink to="/privacy/#">Privacy Policy</HashLink>.</p>

                <button type="submit" className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                  <span className="relative text-base font-semibold text-white dark:text-gray-900">Get started</span>
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:px-12">
              <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
              <div className="relative">
                <img className="h-12 w-auto dark:contrast-100 dark:grayscale dark:invert" src="./../images/clients/microsoft.svg" alt="microsoft" width="260" height="96" />
                <p className="mt-2 mb-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                <div className="flex gap-4">
                  <img className="h-12 w-12 rounded-full" src="./../images/avatars/avatar-2.webp" alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h2 className="leading-0 text-lg font-medium text-gray-700 dark:text-white">Randy Doe</h2>
                    <p className="leading-0 -mt-0.5 text-sm text-gray-500 dark:text-gray-400">Backend dev</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <span className="text-sm font-semibold tracking-widest dark:text-white">TRUSTED BY TOP TECHS COMPANIES</span>

              <div className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 lg:gap-x-24">
                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="" height="" />
                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/coty.svg" loading="lazy" alt="coty" width="" height="" />
                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/ge.svg" loading="lazy" alt="ge" width="" height="" />
                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/lilly.png" loading="lazy" alt="lilly" width="" height="" />
                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="./../images/clients/microsoft.svg" loading="lazy" alt="microsoft" width="" height="" />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    )
  }
  
  export default ContactPage