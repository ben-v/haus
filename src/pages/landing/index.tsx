import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";

import IntroSection from "./sections/IntroSection";
import TestamonialsSection from "./sections/TestamonialsSection";
import SocialLinksCard from "../../components/common/SocalLinksCard";
import { ICON_SIZES } from "../../components/images/icons/IconConfig";
import ContentSectionHeader from "../../components/layouts/ContentSectionHeader";

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
        <ContentSectionContainer flexDirection="Center">
        <ContentSectionHeader
          title="Find Us On"
          titleAlignment="Center"
          childrenAlignment="Center">
            <SocialLinksCard size={ICON_SIZES.xl} />
          </ContentSectionHeader>
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default LandingPage