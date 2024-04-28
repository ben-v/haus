import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import ContentSectionHeader from "../../../components/layouts/ContentSectionHeader";

// import SvgTapeMeasure from "../../../components/images/SvgTapeMeasure";
import SvgWorkerWithToolbox from "../../../components/images/stick-figures/SvgWorkerWithToolbox";
import GenericContentContainer from "../../../components/containers/GenericContentContainer";

const IntroSection = () => {

  return (
    <ContentSectionContainer id="landing-container" flexDirection="RTL" containerClassNames="items-center">
      <GenericContentContainer id="landing-intro" padding="None" containerClassNames="w-full md:w-9/12 md:-mt-3 lg:-mt-16">
        <ContentSectionHeader descriptionAlignment="Left">
            <p className="body-text"><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.</p>
            <p className="mt-8 body-text">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project.</p>
          </ContentSectionHeader>
      </GenericContentContainer>
      <GenericContentContainer id="landing-person" padding="None" containerClassNames="w-6/12 sm:w-3/12 md:pt-6">
        <SvgWorkerWithToolbox className="w-full" />
      </GenericContentContainer>
    </ContentSectionContainer>
  )
}

export default IntroSection
