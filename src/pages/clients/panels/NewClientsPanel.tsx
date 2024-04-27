import { useContext } from "react";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";

import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import CardHeader from "../../../components/layouts/CardHeader";

import PngNewRequest from "../../../../public/images/screenshots/new-request.png";
import SvgRectangleListSolid from "../../../components/images/SvgRectangleListSolid";
import SvgClipboardQuestionSolid from "../../../components/images/icons/SvgClipboardQuestionSolid";
import ButtonLink from "../../../components/buttons/ButtonLink";

const NewClientsPanel = () => {
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

                        <ButtonLink
                            url="/work-request/#"
                            prefixIcon={<SvgRectangleListSolid />}
                            title="Work Request" />
                    </div>
                </div>
            </div>
            <SharpCornerClipContainer>
                <img src={PngNewRequest} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="work request screenshot" width="850" height="1780" />
            </SharpCornerClipContainer>
        </ContentSectionContainer>
    )
}

export default NewClientsPanel
