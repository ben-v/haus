import PageContainer2 from "../../components/layouts/PageContainer2";
import FaqsDetailSection from "./sections/FaqsDetailSection";

const FaqsPage = () => {
  return (
    <PageContainer2
      id="faqs"
      titlePartA="FAQs"
      showContentBackground={false}
      columnA={<FaqsDetailSection />} />
  )
}

export default FaqsPage
