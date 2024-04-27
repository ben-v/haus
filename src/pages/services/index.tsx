import PageContainer from "../../components/containers/PageContainer";
import ServicesDetailSection from "./sections/ServicesDetailSection"

const ServicesPage = () => {
  return (
    <PageContainer
      id="services"
      titlePartA="Services">
        <ServicesDetailSection />
      </PageContainer>
  )
}

export default ServicesPage
