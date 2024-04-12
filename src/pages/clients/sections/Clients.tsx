// import { useContext, useEffect, useRef, useState } from 'react';
// import SvgArrowUpRightFromSquareSolid from '../../../components/images/SvgArrowUpRightFromSquareSolid';
// import { Link } from 'react-router-dom';
// import { ThemeContext, THEMES } from '../../../contexts/ThemeContext';

// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../../../tailwind.config';

// import SvgTodo from '../../../components/images/icons/SvgTodo';
// import SvgQuestion from '../../../components/images/icons/SvgQuestion';

// // import PngNewClientWorkRequest from "../../../../public/images/screenshots/new-request.png";
// // import PngExistingClientHub from "../../../../public/images/screenshots/client-hub.png";

// const fullConfig = resolveConfig(tailwindConfig)

// const Clients = () => {
//   const { theme, } = useContext(ThemeContext);
  
//   // Ref to the section to be able to get from the React virtual dom in order to access elements such as the tabs
//   // to update the tabs and other elements as desired.
//   const sectionRef = useRef<any>();

//   // State to track the active tab
//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   // Function to handle tab click
//   const handleTabClick = (index: any) => {
//     setActiveTabIndex(index);
//     updateActiveTabIndicator(index);
//   };

//   const activeTabStyle = {
//     left: "4px"
//   }

//   useEffect(() => {
//     // use this hook and ensure the reference exists in order to call the handleTabClick to
//     // update the initial state of the active tab indicator
//     if (sectionRef.current) {
//       handleTabClick(0);
//     }
//   }, []);
  
//   const updateActiveTabIndicator = (index: number) => { 
//     // There are 1+ tabs
//     const tabs: HTMLCollection = sectionRef.current.getElementsByClassName("tab");

//     // There should be only 1 tab indicator
//     let activeTabIndicator: HTMLElement = sectionRef.current.querySelector(".tab-indicator");
    
//     activeTabIndicator.style.width = tabs[index].getBoundingClientRect().width + "px";
//     activeTabIndicator.style.left = tabs[index].getBoundingClientRect().left - (tabs[index].parentElement!.getBoundingClientRect().left + 1) + "px";
//   }

//   return (
    
//     <section ref={sectionRef} id="clients" className="pt-32">
//       <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">Helping our clients is <span className="bg-gradient-to-r from-primaryLight to-secondaryLight bg-clip-text text-transparent">job #1</span></h2>
//           <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Projects around the house, big and small, can pile up fast and the next thing you know, there's a nagging "to do" list a mile long. We want to help both our new and existing clients get their projects done and off their plate, to enjoy their homes and our Montana community. We leverage technology to facilitate our work, stay in touch and keep you up to date.</p>
//         </div>

//         {/* Tabs */}
//         <div role="tablist" aria-label="tabs" className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-2 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
//           <div className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800" style={activeTabStyle}></div>
//           {/* Mapping over tabs */}
//           {['New Clients', 'Existing Clients'].map((tab, index) => (
//             <button
//               key={index}
//               role="tab"
//               aria-selected={activeTabIndex === index}
//               aria-controls={`panel-${index}`}
//               tabIndex={index}
//               title="tab item"
//               className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight"
//               onClick={() => {handleTabClick(index);}}
//             >
//               <span className="m-auto block w-max text-sm font-medium tracking-wider">{tab}</span>
//             </button>
//           ))}
//         </div>
//         {/* Tab panels */}
//         <div className="mt-20">

//           {[0, 1].map((index) => (
//             <div
//               key={index}
//               className={`panel ${activeTabIndex === index ? 'visible' : 'invisible'} inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500`}
//               id={`panel-${index}`}
//             >
//               {activeTabIndex === index && (
//                 <>
//                   {index === 0 &&
//                     <div className="gap-6 space-y-12 md:flex md:space-y-0">
//                       <div className="relative md:w-1/2">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Are you a new client?</h3>
//                           <p className="mt-8 text-gray-600 dark:text-gray-300">An easy way to get started, is to send us a new work request. Once received, we will review and follow up with you regarding next steps.</p>
//                           <div className="mt-12 space-y-6">
//                             <div className="flex items-center gap-6">
//                               <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-1 align-middle dark:border-gray-600/60 dark:bg-gray-900/40">
//                                 <SvgTodo className="m-auto w-auto" width={64} height={64}/>
//                               </div>
//                               <div className="w-[calc(100%-7.5rem)]">
//                                 <h4 className="text-lg font-semibold text-gray-800 dark:text-white">To do list...</h4>
//                                 <p className="mt-1 text-gray-600 dark:text-gray-400">Have a to do list that keeps growing?</p>
//                               </div>
//                             </div>

//                             <div className="flex items-center gap-6">
//                               <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-1 align-middle dark:border-gray-600/60 dark:bg-gray-900/40">
//                                 <SvgQuestion className="m-auto w-auto" width={64} height={64}/>
//                               </div>
//                               <div className="w-[calc(100%-7.5rem)]">
//                                 <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Questions?</h4>
//                                 <p className="mt-1 text-gray-600 dark:text-gray-400">Have some questions you'd like addressed before moving forward?</p>
//                               </div>
//                             </div>
//                             <a href="/request/#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
//                                 <span className="relative text-base font-semibold text-white dark:text-dark">New Client Work Request</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
//                         <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
//                           <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
//                             <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
//                               <img src="./images/screenshots/new-request.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="new client work request screenshot" width="850" height="1780" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   }
//                   {index === 1 &&
//                     <div className="gap-6 space-y-12 md:flex md:space-y-0">
//                       <div className="relative md:w-1/2">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Existing clients, the Client Hub is for you!</h3>
//                           <p className="mt-8 text-gray-600 dark:text-gray-300">The client hub is a self-serve, online experience that allows HAUS clients to approve quotes, check appointment details, pay invoices, print receipts, or request more work—all in one place.</p>
//                           <div className="mt-12 space-y-6">
//                             <div className="flex items-center gap-6">
//                               <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
//                                 <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png" alt="icon illustration" loading="lazy" width="512" height="512" />
//                               </div>
//                               <div className="w-[calc(100%-7.5rem)]">
//                                 <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
//                                 <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
//                               </div>
//                             </div>

//                             <div className="flex items-center gap-6">
//                               <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
//                                 <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png" alt="icon illustration" loading="lazy" width="512" height="512" />
//                               </div>
//                               <div className="w-[calc(100%-7.5rem)]">
//                                 <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
//                                 <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
//                               </div>
//                             </div>

//                             <div>
//                               <Link to="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
//                                 <div>
//                                   <span className="relative text-base font-semibold text-white dark:text-dark">
//                                     Existing Client Hub
//                                   </span>
//                                 </div>
//                                 <div className="pl-2">
//                                   <SvgArrowUpRightFromSquareSolid width={12} height={12} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.dark : fullConfig.theme.colors.white} />
//                                 </div>                                
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
//                         <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
//                           <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
//                             <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
//                               <img src="./images/screenshots/client-hub.png" className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="existing client hub screenshot" width="850" height="1780" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   }
//                 </>
//               )}

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;