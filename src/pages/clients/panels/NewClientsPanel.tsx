import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import SharpCornerClipContainer from "../../../components/containers/SharpCornerClipContainer";
import CardHeader from "../../../components/layouts/CardHeader";

import { useContext } from "react";
import JpgNewRequest from "../../../../public/images/screenshots/new-request.jpeg";
import NavLink from "../../../components/navigation/NavLink";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import SvgQuestionDark from "../../../components/images/icons/SvgQuestionDark";
import SvgQuestionLight from "../../../components/images/icons/SvgQuestionLight";
import SvgTodoListDark from "../../../components/images/icons/SvgTodoListDark";
import SvgTodoListLight from "../../../components/images/icons/SvgTodoListLight";
import SvgRectangleListSolid from "../../../components/images/icons/SvgRectangleListSolid";
import { ThemeContext, THEMES } from "../../../components/contexts/ThemeContext";
import StandardLink from "../../../components/navigation/StandardLink";

import { logClickAction } from "../../../components/analytics/GA";

const NewClientsPanel = () => {
  const logClick = (label: string) => {
    logClickAction("New Clients Panel", label);
  };
  
    const { theme, } = useContext(ThemeContext);
    
    return (
        <ContentSectionContainer>
            <div className="relative w-full md:w-1/2">
                <div className="relative flex flex-col gap-6">
                    <CardHeader
                        title="Start Your Project Here!"
                        titleAlignment="Left"
                        childrenAlignment="Left"
                        childrenClassnames="tabpanel-text">
                        Getting started as a new client is easy: simply send us a <StandardLink url="/work-request" onClick={() => logClick("Work Request Link")}><span className="font-semibold body-link">Work Request</span></StandardLink>. Once received, we'll review it and follow up with you regarding the next steps.
                    </CardHeader>
                    <div className="relative flex flex-col gap-6">
                        <ContentIconContainer
                            title="To Do List"
                            description="Have a 'to do' list that keeps growing?"
                            childrenClassnames="tabpanel-text">
                            {theme === THEMES.DARK ? <SvgTodoListDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgTodoListLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
                        </ContentIconContainer>

                        <ContentIconContainer
                            title="Questions?"
                            description="Have some questions you'd like addressed before moving forward?"
                            childrenClassnames="tabpanel-text">
                            {theme === THEMES.DARK ? <SvgQuestionDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgQuestionLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
                        </ContentIconContainer>

                        <NavLink
                            url="/work-request"
                            prefixIcon={<SvgRectangleListSolid />}
                            children="Work Request"
                            onClick={() => logClick("Work Request Button")}
                            prefixIconFill={theme === THEMES.DARK ? "#1e293b" : "white"}
                        />
                    </div>
                </div>
            </div>
            <div className="relative w-full md:w-1/2">
                <div className="w-full flex flex-col items-center mt-6 md:mt-4">
                    <SharpCornerClipContainer>
                        <img src={JpgNewRequest} className="mx-auto h-80 w-96 rounded-t-3xl border border-gray-300/100 object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]" alt="work request screenshot" width="850" height="1780" />
                    </SharpCornerClipContainer>
                </div>
            </div>
        </ContentSectionContainer>
    )
}

export default NewClientsPanel
