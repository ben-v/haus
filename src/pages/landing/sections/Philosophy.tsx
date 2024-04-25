import { useContext } from "react";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import SvgIntroSuccessLight from "../../../components/images/sections/SvgIntroSuccessLight";
import SvgIntroSuccessDark from "../../../components/images/sections/SvgIntroSuccessDark";
import ContenSectionHeader from "../../../components/layouts/ContentSectionHeader";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

const Philosophy = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="RTL">
            <div className="md:w-7/12 w-auto">
                <ContenSectionHeader
                    title="Old School Meets New" 
                    titleAlignment="Left"
                    descriptionAlignment="Left">
                        At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project.
                    </ContenSectionHeader>
            </div>
            <div className="md:w-5/12 w-auto">
                {(theme === THEMES.DARK) ? <SvgIntroSuccessDark className="w-full" /> : <SvgIntroSuccessLight className="w-full" />}
            </div>
        </ContentSectionContainer>
    )
}

export default Philosophy
