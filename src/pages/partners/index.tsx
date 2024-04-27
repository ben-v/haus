import PageContainer from "../../components/containers/PageContainer";
import PartnersDetailSection from "./sections/PartnersDetailSection"

const PartnersPage = () => {
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
