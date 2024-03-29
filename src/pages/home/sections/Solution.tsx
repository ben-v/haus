// import React, { useState } from 'react';
import { useState } from 'react';

const Solution = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <section id="solutions" className="pt-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">For growing teams and organizations</h2>
          <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>
        </div>

        {/* Your existing JSX code */}
        <div role="tablist" aria-label="tabs" className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
          <div className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800" style={{ left: `${4 + activeTab * 33.3333}%` }}></div>
          {/* Mapping over tabs */}
          {['First Tab', 'Second Tab', 'Third Tab'].map((tab, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${index}`}
              title="tab item"
              className={`tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight ${activeTab === index ? 'active bg-white' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <span className="m-auto block w-max text-sm font-medium tracking-wider">{tab}</span>
            </button>
          ))}
        </div>
        <div className="mt-20">

          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`panel ${activeTab === index ? 'visible' : 'invisible'} inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500`}
              id={`panel-${index}`}
            >
              {activeTab === index && (
                <>
                  {index === 0 &&
                    <div className="gap-6 space-y-12 md:flex md:space-y-0">
                      <div className="relative md:w-1/2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
                          <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                          <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-6">
                              <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                              </div>
                              <div className="w-[calc(100%-7.5rem)]">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-6">
                              <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                              </div>
                              <div className="w-[calc(100%-7.5rem)]">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                        <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                          <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                            <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
                              <img src="./images/screenshots/tailus-home.webp" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" width="850" height="1780" />
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  {index === 1 &&
                    <div className="gap-6 space-y-12 md:flex md:space-y-0">
                      <div className="relative md:w-1/2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
                          <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
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
                          </div>
                        </div>
                      </div>
                      <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                        <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                          <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                            <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
                              <img src="./images/screenshots/tailus-home-dark.webp" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" width="850" height="1780" />
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  {index === 2 &&
                    <div className="gap-6 space-y-12 md:flex md:space-y-0">
                      <div className="relative md:w-1/2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
                          <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                          <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-6">
                              <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                              </div>
                              <div className="w-[calc(100%-7.5rem)]">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-6">
                              <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                              </div>
                              <div className="w-[calc(100%-7.5rem)]">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Growth</h4>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                        <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                          <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                            <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
                              <img src="./images/screenshots/tailus-contact.webp" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="tailus screenshot" width="850" height="1780" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
