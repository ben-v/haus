import PageContainer from "../../components/layouts/PageContainer";
import FaqsDetailSection from "./sections/FaqsDetailSection";

const FaqsPage = () => {
  return (
    <PageContainer
      id="faqs"
      titlePartA="FAQs"
      showContentBackground={false}
      columnA={<FaqsDetailSection />} />
  )
}

export default FaqsPage
