import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import ContentSectionHeader from "../../../components/layouts/ContentSectionHeader";

// import SvgTapeMeasure from "../../../components/images/SvgTapeMeasure";
import SvgWorkerWithToolbox from "../../../components/images/stick-figures/SvgWorkerWithToolbox";
import GenericContentContainer from "../../../components/containers/GenericContentContainer";
import StandardLink from "../../../components/navigation/StandardLink";

import { logClickAction } from "../../../components/analytics/GA";

const IntroSection = () => {
  const logClick = (label: string) => {
    logClickAction("Landing Page", label);
};

  return (
    <ContentSectionContainer id="landing-container" flexDirection="RTL" containerClassNames="items-center">
      <GenericContentContainer id="landing-intro" padding="None" containerClassNames="w-full md:w-9/12 md:-mt-3 lg:-mt-16">
        <ContentSectionHeader childrenAlignment="Left">
          <p className="body-text"><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.</p>
          <p className="mt-8 body-text">We offer a wide range of services, from furniture assembly to smart home setup and troubleshooting. Whether it's shelving, blinds, or smart devices, we've got you covered! Check out our <StandardLink url="/services"><span className="font-semibold body-link" onClick={() => logClick("Services")}>Services</span></StandardLink> page for more details. No job is too small!</p>
          <p className="mt-8 body-text">At <span className="font-semibold">HAUS</span>, our approach with clients is to help them with their list of projects, big or small. Respectful and considerate communication and collaboration are the foundations of our success—these are traits we learned working for over 30 years in high tech at some of the largest companies in the US.</p>
        </ContentSectionHeader>
      </GenericContentContainer>
      <GenericContentContainer id="landing-person" padding="None" containerClassNames="w-6/12 sm:w-3/12 md:pt-6">
        <SvgWorkerWithToolbox className="w-full" />
      </GenericContentContainer>
    </ContentSectionContainer>
  )
}

export default IntroSection
