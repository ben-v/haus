import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import CardHeader from "../../../components/layouts/CardHeader";

import { useContext } from "react";
import JpgNewRequest from "../../../../public/images/screenshots/new-request.jpeg";
import ButtonLink from "../../../components/buttons/ButtonLink";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import SvgQuestionDark from "../../../components/images/icons/SvgQuestionDark";
import SvgQuestionLight from "../../../components/images/icons/SvgQuestionLight";
import SvgTodoListDark from "../../../components/images/icons/SvgTodoListDark";
import SvgTodoListLight from "../../../components/images/icons/SvgTodoListLight";
import SvgRectangleListSolid from "../../../components/images/SvgRectangleListSolid";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";

const NewClientsPanel = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer>
            <div className="relative md:w-1/2 md:mr-16">
                <div className="relative flex flex-col gap-6">
                    <CardHeader
                        title="Start Your Project Here!"
                        titleAlignment="Left"
                        childrenAlignment="Left"
                        childrenClassnames="tabpanel-text">
                            Getting started as a new client is easy: simply send us a <span className="font-semibold">work request</span>. Once received, we'll review it and follow up with you regarding the next steps.
                        </CardHeader>
                    <div className="relative flex flex-col gap-6">
                        <ContentIconContainer
                            title="To do list..."
                            description="Have a to do list that keeps growing?"
                            childrenClassnames="tabpanel-text">
                            {theme === THEMES.DARK ? <SvgTodoListDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgTodoListLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
                        </ContentIconContainer>

                        <ContentIconContainer
                            title="Questions?"
                            description="Have some questions you'd like addressed before moving forward?"
                            childrenClassnames="tabpanel-text">
                            {theme === THEMES.DARK ? <SvgQuestionDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgQuestionLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
                        </ContentIconContainer>

                        <ButtonLink
                            url="/work-request/#"
                            prefixIcon={<SvgRectangleListSolid />}
                            title="Work Request"
                            prefixIconFill={theme === THEMES.DARK ? "#1e293b" : "white"}
                            />
                    </div>
                </div>
            </div>
            <SharpCornerClipContainer>
                <img src={JpgNewRequest} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="work request screenshot" width="850" height="1780" />
            </SharpCornerClipContainer>
        </ContentSectionContainer>
    )
}

export default NewClientsPanel
