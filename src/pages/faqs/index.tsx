import PageContainer from "../../components/layouts/PageContainer";
import FaqsDetailSection from "./sections/FaqsDetailSection";
import FaqsMarketingSection from "./sections/FaqsMarketingSection";

const FaqsPage = () => {
  return (
    <PageContainer
      id="faqs"
      titlePartA="Frequently Asked"
      titlePartB=" Questions"
      description="We've pulled together answers to some commonly asked questions about HAUS, what we do and how we do it."
      columnA={<FaqsDetailSection />}
      columnB={<FaqsMarketingSection />} />
  )
}

export default FaqsPage
