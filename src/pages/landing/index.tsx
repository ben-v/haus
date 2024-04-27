import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";

import IntroSection from "./sections/IntroSection";
import TestamonialsSection from "./sections/TestamonialsSection";

const LandingPage = () => {
  return (
    <PageContainer
      id="landing"
      titlePartA="Comfortable, Functional,&nbsp;"
      titlePartB="Happy Homes"
      highlightType="Vibrant"
      titleAlignment="Left">
      <ContentSectionContainer flexDirection="Center">
        <IntroSection />
        <TestamonialsSection />
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default LandingPage