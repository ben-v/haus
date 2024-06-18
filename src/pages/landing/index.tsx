import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";

import IntroSection from "./sections/IntroSection";
import TestamonialsSection from "./sections/TestamonialsSection";
import SocialLinksCard from "../../components/cards/SocalLinksCard";
import { ICON_SIZES } from "../../components/images/icons/IconConfig";
import ContentSectionHeader from "../../components/layouts/ContentSectionHeader";
import { logPageView } from "../../components/analytics/GA";

const LandingPage = () => {
  // Send page view analytics
  logPageView("/", "Landing Page");

  return (
    <PageContainer
      id="landing">
      <ContentSectionContainer flexDirection="Center">
        <IntroSection />
        <TestamonialsSection />
        <ContentSectionContainer flexDirection="Center">
        <ContentSectionHeader
          title="Find Us On"
          titleAlignment="Center"
          childrenAlignment="Center">
            <SocialLinksCard size={ICON_SIZES.xl} source="Landing Page" />
          </ContentSectionHeader>
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default LandingPage