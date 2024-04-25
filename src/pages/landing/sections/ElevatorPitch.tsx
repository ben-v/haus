import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import ContenSectionHeader from "../../../components/layouts/ContentSectionHeader";

import SvgTapeMeasure from "../../../components/images/SvgTapeMeasure";

const ElevatorPitch = () => {

  return (
    <ContentSectionContainer id="landing-elevator-pitch" flexDirection="RTL" containerClassNames="items-center">
      <div className="md:w-7/12 w-auto md:pt-12">
        <ContenSectionHeader descriptionAlignment="Left">
          <p><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.</p>
          <p className="mt-8">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project.</p>          
        </ContenSectionHeader>
      </div>
      <div className="w-8/12 sm:w-7/12 md:w-5/12 md:pt-12">
        <SvgTapeMeasure className="w-full"/>
      </div>
    </ContentSectionContainer>    
  )
}

export default ElevatorPitch
