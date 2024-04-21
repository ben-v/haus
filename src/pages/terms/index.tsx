import PageContainer2 from "../../components/layouts/PageContainer2";
import TermsDetailSection from "./sections/TermsDetailSection"

const TermsPage = () => {
  return (
    <PageContainer2
      id="terms"
      titlePartA="Terms &amp; Conditions"
      description="Last Updated On: April 13, 2024"
      showContentBackground={false}
      columnA={<TermsDetailSection />} />
  )
}

export default TermsPage
