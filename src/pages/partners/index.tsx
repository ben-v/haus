import PageContainer from "../../components/layouts/PageContainer";
import PartnersDetailSection from "./sections/PartnersDetailSection"

const PartnersPage = () => {
  return (
    <PageContainer
      id="partners"
      titlePartA="Our"
      titlePartB=" Partners"
      showContentBackground={false}
      columnA={<PartnersDetailSection />} />
  )
}

export default PartnersPage
