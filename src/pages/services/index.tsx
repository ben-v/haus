import PageContainer2 from "../../components/layouts/PageContainer2";
import ServicesDetailSection from "./sections/ServicesDetailSection"

const ServicesPage = () => {
  return (
    <PageContainer2
      id="services"
      titlePartA="Services"
      columnA={<ServicesDetailSection />} />
  )
}

export default ServicesPage
