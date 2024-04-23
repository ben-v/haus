import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config';

import SvgArrowUpRightFromSquareSolid from "../../../components/images/SvgArrowUpRightFromSquareSolid"
import PngExistingClientHub from "../../../../public/images/screenshots/client-hub.png"
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import SvgAddressBookSolid from "../../../components/images/SvgAddressBookSolid";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import SvgMobileScreenButtonSolid from "../../../components/images/icons/SvgMobileScreenButtonSolid";
import CardHeader from "../../../components/layouts/CardHeader";
import ContentSection from "../../../components/layouts/ContentSection";

const fullConfig = resolveConfig(tailwindConfig)

const ExistingClientsSection = () => {

    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSection flexDirection="RTL">
            <div className="relative md:w-1/2 md:ml-16">
                <div className="relative flex flex-col gap-6">
                    <CardHeader
                        title="Existing clients, the client hub is for you!"
                        description="The client hub is a self-serve, online experience that allows HAUS clients to approve quotes, check appointment details, pay invoices, print receipts, or request more work—all in one place."
                        titleAlignment="Left"
                        descriptionAlignment="Left" />
                    <div className="relative flex flex-col gap-6">
                        <ContentIconContainer
                            title="Convenient Tools..."
                            description="The self serve client hub is available from your phone, tablet or desktop PC.">
                            <SvgMobileScreenButtonSolid fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.dark} className="m-auto w-auto" width={40} height={48} />
                        </ContentIconContainer>

                        <Link to="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" target="_blank" className="relative flex h-11 mb-6 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
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
            <SharpCornerClipContainer>
                <img src={PngExistingClientHub} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="existing client hub screenshot" width="850" height="1780" />
            </SharpCornerClipContainer>
        </ContentSection>
    )
}

export default ExistingClientsSection
