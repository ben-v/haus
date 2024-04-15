import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config';

import SvgArrowUpRightFromSquareSolid from "../../../components/images/SvgArrowUpRightFromSquareSolid"
import PngExistingClientHub from "../../../../public/images/screenshots/client-hub.png"
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import ContentBackground from "../../../components/effects/ContentBackground";
import SvgAddressBookSolid from "../../../components/images/SvgAddressBookSolid";
// import SvgDashboard from "../../../components/images/icons/SvgDashboard";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import SvgMobileScreenButtonSolid from "../../../components/images/icons/SvgMobileScreenButtonSolid";

const fullConfig = resolveConfig(tailwindConfig)

const ExistingClients = () => {

    const { theme, } = useContext(ThemeContext);

    return (
        <div className="relative w-auto flex flex-col">
            <ContentBackground />
            <div className="md:flex md:flex-col md:gap-24">
                <div className="w-auto">
                    <div className="space-y-12 md:flex md:flex-row-reverse md:space-y-0">
                        <div className="relative md:w-1/2 md:ml-16">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">Existing clients, the client hub is for you!</h3>
                                <p className="mt-8 text-gray-600 dark:text-gray-300">The client hub is a self-serve, online experience that allows HAUS clients to approve quotes, check appointment details, pay invoices, print receipts, or request more work—all in one place.</p>
                                <div className="mt-12 space-y-6">

                                    <div className="flex items-center gap-6">
                                        <ContentIconContainer>
                                            {/* <SvgDashboard className="m-auto w-auto" width={48} height={48} /> */}
                                            <SvgMobileScreenButtonSolid fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.dark} className="m-auto w-auto" width={40} height={48} />
                                        </ContentIconContainer>
                                        <div className="w-[calc(100%-7.5rem)]">
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Convenient tools...</h4>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400">The self serve client hub is available from your phone, tablet or desktop PC.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <Link to="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                                            <div className="pr-2">
                                                <SvgAddressBookSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.dark : fullConfig.theme.colors.white} />
                                            </div>

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
                        <SharpCornerClipContainer>
                            <img src={PngExistingClientHub} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="existing client hub screenshot" width="850" height="1780" />
                        </SharpCornerClipContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExistingClients
