import PageContainer from "../../components/layouts/PageContainer";
import TermsDetailSection from "./sections/TermsDetailSection"

const TermsPage = () => {
  return (
    <PageContainer
      id="terms"
      titlePartA="Terms &amp; Conditions"
      description="Last Updated On: April 13, 2024"
      showContentBackground={false}>
        <TermsDetailSection />
      </PageContainer>
  )
}

export default TermsPage
