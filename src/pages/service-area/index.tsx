import PageContainer2 from "../../components/layouts/PageContainer2";
import ServiceAreaDetailSection from "./sections/ServiceAreaDetailSection";

const ServiceAreaPage = () => {
  return (
    <PageContainer2
      id="service-area"
      titlePartA="Service"
      titlePartB=" Area"
      description="Our primary service area encompasses the greater Bozeman area community and Gallatin County. Check out the list below for communities we commonly serve."
      columnA={<ServiceAreaDetailSection />} />
  )
}

export default ServiceAreaPage
