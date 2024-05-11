import { logPageView } from "../../components/analytics/GA";
import PageContainer from "../../components/containers/PageContainer";
import PrivacyDetailSection from "./sections/PrivacyDetailSection";

const PrivacyPage = () => {
  // Send page view analytics
  logPageView("/privacy", "Privacy Page");

  return (
    <PageContainer
      id="privacy-policy"
      titlePartA="Privacy Policy"
      description="Last Updated On: April 2, 2024">
        <PrivacyDetailSection />
      </PageContainer>
  )
}

export default PrivacyPage
