import { useContext } from "react";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import SvgIntroDark from "../../../components/images/sections/SvgIntroDark";
import SvgIntroLight from "../../../components/images/sections/SvgIntroLight";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import ContenSectionHeader from "../../../components/layouts/ContentSectionHeader";

const ElevatorPitch = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <ContentSectionContainer>
      <div className="md:w-7/12 w-auto md:pt-12">
        <ContenSectionHeader descriptionAlignment="Left">
          <p><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.</p>
          <p className="mt-8">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project.</p>
        </ContenSectionHeader>
      </div>
      <div className="md:w-5/12 w-auto -my-2 sm:my-0 md:my-6 md:mt-6">
        {(theme === THEMES.DARK) ? <SvgIntroDark className="w-full" /> : <SvgIntroLight className="w-full" />}
      </div>
    </ContentSectionContainer>
  )
}

export default ElevatorPitch
