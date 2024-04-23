import PageContainer from "../../components/layouts/PageContainer";
import FaqsDetailSection from "./sections/FaqsDetailSection";
import FaqsMarketingSection from "./sections/FaqsMarketingSection";

const FaqsPage = () => {
  return (
    <PageContainer
      id="faqs"
      titlePartA="FAQs"
      columnA={<FaqsDetailSection />} 
      columnB={<FaqsMarketingSection />} />
  )
}

export default FaqsPage
