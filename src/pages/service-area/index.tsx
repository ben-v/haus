import PageContainer from "../../components/layouts/PageContainer";
import ServiceAreaDetailSection from "./sections/ServiceAreaDetailSection";
import ServiceAreaMapSection from "./sections/ServiceAreaMapSection";

const ServiceAreaPage = () => {
  return (
    <PageContainer
      id="service-area"
      titlePartA="Service"
      titlePartB=" Area"
      description="Our primary service area encompasses the greater Bozeman area community and Gallatin County. Check out the list below for communities we commonly serve."
      columnA={<ServiceAreaDetailSection />}
      columnB={<ServiceAreaMapSection />} />
  )
}

export default ServiceAreaPage
