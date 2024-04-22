import { useContext } from "react";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import SvgIntroSuccessLight from "../../../components/images/sections/SvgIntroSuccessLight";
import SvgIntroSuccessDark from "../../../components/images/sections/SvgIntroSuccessDark";
import ContenSectiontHeader from "../../../components/layouts/ContentSectionHeader";
import ContentSection from "../../../components/layouts/ContentSection";

const Philosophy = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSection flexDirection="RTL">
            <div className="lg:w-8/12 w-auto p-2 md:pt-6">
                <ContenSectiontHeader
                    title="Old School Meets New" 
                    titleAlignment="Left"
                    description={`At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project.`}
                    descriptionAlignment="Left" />
            </div>
            <div className="lg:w-4/12 w-auto p-4 mt-4 md:mt-3">
                {(theme === THEMES.DARK) ? <SvgIntroSuccessDark className="w-full" /> : <SvgIntroSuccessLight className="w-full" />}
            </div>
        </ContentSection>
    )
}

export default Philosophy
