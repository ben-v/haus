import PageContainer from "../../components/layouts/PageContainer";
import ServicesDetailSection from "./sections/ServicesDetailSection"

const ServicesPage = () => {
  return (
    <PageContainer
      id="services"
      titlePartA="Services"
      columnA={<ServicesDetailSection />} />
  )
}

export default ServicesPage
