import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config';

import SvgArrowUpRightFromSquareSolid from "../../../components/images/SvgArrowUpRightFromSquareSolid"
import PngExistingClientHub from "../../../../public/images/screenshots/client-hub.png"

const fullConfig = resolveConfig(tailwindConfig)

const ExistingClientsSection = () => {

    const { theme, } = useContext(ThemeContext);

    return (
        <section id="existing-clients" className="pt-0 md:pt-16 lg:pt-16 pb-10">
            <div className="mx-auto px-4 md:px-6 xl:max-w-6xl xl:px-0">
                <div className="relative w-auto flex flex-col">
                    <div className="md:flex md:flex-col md:gap-24">
                        <div className="w-auto">
                            <div className="space-y-12 md:flex md:flex-row-reverse md:space-y-0">
                                <div className="relative md:w-1/2 md:ml-16">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">Existing clients, the Client Hub is for you!</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">The client hub is a self-serve, online experience that allows HAUS clients to approve quotes, check appointment details, pay invoices, print receipts, or request more work—all in one place.</p>
                                        <div className="mt-12 space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
                                                </div>
                                            </div>

                                            <div>
                                                <Link to="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                                                    <div>
                                                        <span className="relative text-base font-semibold text-white dark:text-dark">
                                                            Existing Client Hub
                                                        </span>
                                                    </div>
                                                    <div className="pl-2">
                                                        <SvgArrowUpRightFromSquareSolid width={12} height={12} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.dark : fullConfig.theme.colors.white} />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                                    <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                                        <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                                            <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
                                                <img src={PngExistingClientHub} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="existing client hub screenshot" width="850" height="1780" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExistingClientsSection
