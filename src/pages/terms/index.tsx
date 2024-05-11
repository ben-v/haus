import { logPageView } from "../../components/analytics/GA";
import PageContainer from "../../components/containers/PageContainer";
import TermsDetailSection from "./sections/TermsDetailSection"

const TermsPage = () => {
  // Send page view analytics
  logPageView("/terms", "Terms & Conditions Page");

  return (
    <PageContainer
      id="terms"
      titlePartA="Terms &amp; Conditions"
      description="Last Updated On: April 13, 2024">
        <TermsDetailSection />
      </PageContainer>
  )
}

export default TermsPage
