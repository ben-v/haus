import PageContainer2 from "../../components/layouts/PageContainer2";
import PartnersDetailSection from "./sections/PartnersDetailSection"

const PartnersPage = () => {
  return (
    <PageContainer2
      id="partners"
      titlePartA="Our"
      titlePartB=" Partners"
      showContentBackground={false}
      columnA={<PartnersDetailSection />} />
  )
}

export default PartnersPage
