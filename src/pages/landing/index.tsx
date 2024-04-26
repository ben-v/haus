import TestamonialsSection from "./sections/TestamonialsSection";
import IntroSection from "./sections/IntroSection";
// import Philosophy from "./sections/Philosophy";
import PageContainer from "../../components/layouts/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";

// Want the landing cards to be stacked in a single column, so need to wrap in a div with flex CSS classes applied.
const getLandingColumnASections = () => {
  return (
    <ContentSectionContainer flexDirection="Center">
      <IntroSection />
      <TestamonialsSection />
    </ContentSectionContainer>
  )
};

const LandingPage = () => {
  return (
    <PageContainer
      id="landing"
      titlePartA="Comfortable, Functional,&nbsp;"
      titlePartB="Happy Homes"
      highlightType="Vibrant"
      titleAlignment="Left"
      columnA={getLandingColumnASections()} />
  )
}

export default LandingPage