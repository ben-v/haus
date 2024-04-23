import { useContext } from "react";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import SvgIntroDark from "../../../components/images/sections/SvgIntroDark";
import SvgIntroLight from "../../../components/images/sections/SvgIntroLight";
import ContentSection from "../../../components/layouts/ContentSection";
import ContenSectiontHeader from "../../../components/layouts/ContentSectionHeader";

const ElevatorPitch = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <ContentSection>
      <div className="md:w-7/12 w-auto md:pt-12">
        <ContenSectiontHeader
          description={`<span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.`}
          descriptionAlignment="Left" />
      </div>
      <div className="md:w-5/12 w-auto -my-2 sm:my-0 md:my-6 md:mt-6">
        {(theme === THEMES.DARK) ? <SvgIntroDark className="w-full" /> : <SvgIntroLight className="w-full" />}
      </div>
    </ContentSection>
  )
}

export default ElevatorPitch
