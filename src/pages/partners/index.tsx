import { logPageView } from "../../components/analytics/GA";
import PageContainer from "../../components/containers/PageContainer";
import PartnersDetailSection from "./sections/PartnersDetailSection"

const PartnersPage = () => {
  // Send page view analytics
  logPageView("/partners", "Partners Page");

  return (
    <PageContainer
      id="partners"
      titlePartA="Our"
      titlePartB=" Partners">
        <PartnersDetailSection />
      </PageContainer>
  )
}

export default PartnersPage
