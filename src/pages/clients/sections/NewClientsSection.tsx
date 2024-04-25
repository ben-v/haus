import { useContext } from "react";
import { HashLink } from "react-router-hash-link";

// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../../../tailwind.config';
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";

import CardHeader from "../../../components/layouts/CardHeader";
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";

import PngNewRequest from "../../../../public/images/screenshots/new-request.png";
import SvgRectangleListSolid from "../../../components/images/SvgRectangleListSolid";
import SvgClipboardQuestionSolid from "../../../components/images/icons/SvgClipboardQuestionSolid";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// const fullConfig = resolveConfig(tailwindConfig)

const NewClientsSection = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer>
            <div className="relative md:w-1/2 md:mr-16">
                <div className="relative flex flex-col gap-6">
                    <CardHeader
                        title="Are you a new client?"
                        titleAlignment="Left"
                        descriptionAlignment="Left">
                            An easy way to get started, is to send us a new work request. Once received, we will review and follow up with you regarding next steps.
                        </CardHeader>
                    <div className="relative flex flex-col gap-6">
                        <ContentIconContainer
                            title="To do list..."
                            description="Have a to do list that keeps growing?">
                            <SvgRectangleListSolid fill={theme === THEMES.DARK ? 'white' : 'dark'} className="m-auto w-auto" width={40} height={48} />
                        </ContentIconContainer>

                        <ContentIconContainer
                            title="Questions?"
                            description="Have some questions you'd like addressed before moving forward?">
                            <SvgClipboardQuestionSolid fill={theme === THEMES.DARK ? 'white' : 'dark'} className="m-auto w-auto" width={40} height={48} />
                        </ContentIconContainer>

                        <HashLink to="/work-request/#" smooth className="relative mb-6 flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                            <div className="pr-2">
                                <SvgRectangleListSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? 'dark' : 'white'} />
                            </div>

                            <span className="relative text-base font-semibold text-white dark:text-dark">New Client Work Request</span>
                        </HashLink>
                    </div>
                </div>
            </div>
            <SharpCornerClipContainer>
                <img src={PngNewRequest} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="new client work request screenshot" width="850" height="1780" />
            </SharpCornerClipContainer>
        </ContentSectionContainer>
    )
}

export default NewClientsSection
