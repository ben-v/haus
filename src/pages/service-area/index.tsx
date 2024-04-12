import SvgServiceAreaMap from "../../components/images/sections/SvgServiceAreaMap"

const ServiceArea = () => {
    return (
        <section className="py-32 sm:pt-32 md:pt-32 lg:pt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                <div className="relative z-10 text-start">
                    <h1 className="relative text-start text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">Service Area</h1>
                </div>
                <div className="mt-12">
                    <div className="relative">
                        <div className="relative">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">To do</h2>
                        </div>
                        <div className="md:flex md:flex-col md:gap-24">
                            <div className="w-auto">
                                <div className="space-y-12 md:flex md:space-y-0 gap-4">
                                    <div className="relative w-full">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">Are you a new client?</h3>
                                            {/* <p className="mt-8 text-gray-600 dark:text-gray-300">An easy way to get started, is to send us a new work request. Once received, we will review and follow up with you regarding next steps.</p>
                                            <div className="mt-12 space-y-6">
                                                <div className="flex items-center gap-6">
                                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-1 align-middle dark:border-gray-600/60 dark:bg-gray-900/40">
                                                        <SvgTodo className="m-auto w-auto" width={64} height={64} />
                                                    </div>
                                                    <div className="w-[calc(100%-7.5rem)]">
                                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">To do list...</h4>
                                                        <p className="mt-1 text-gray-600 dark:text-gray-400">Have a to do list that keeps growing?</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-6">
                                                    <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-1 align-middle dark:border-gray-600/60 dark:bg-gray-900/40">
                                                        <SvgQuestion className="m-auto w-auto" width={64} height={64} />
                                                    </div>
                                                    <div className="w-[calc(100%-7.5rem)]">
                                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Questions?</h4>
                                                        <p className="mt-1 text-gray-600 dark:text-gray-400">Have some questions you'd like addressed before moving forward?</p>
                                                    </div>
                                                </div>
                                                <a href="/request/#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                                                    <span className="relative text-base font-semibold text-white dark:text-dark">New Client Work Request</span>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                                        <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                                            <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                                                <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex items-center px-6 sm:px-10">
                                                    {/* <img src="./images/screenshots/new-request.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="new client work request screenshot" width="850" height="1780" /> */}
                                                    <SvgServiceAreaMap />
                                                </div>
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

export default ServiceArea