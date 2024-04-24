import ContentSectionContainer from "../../components/containers/ContentSectionContainer";
import PageContainer from "../../components/layouts/PageContainer";
import FaqsDetailSection from "./sections/FaqsDetailSection";
import FaqsMarketingSection from "./sections/FaqsMarketingSection";

// Want the client cards to be stacked in a single column, so need to wrap in a div with flex CSS classes applied.
const faqBlocks = () => {
  return (
    <ContentSectionContainer flexDirection="Center">
      {/* Use div and flex to provide some addtional, one-off, spacing between the new and existing client sections. */}
      <div className='relative flex flex-col gap-10 md:gap-20 items-center'>
      <FaqsDetailSection />
      <FaqsMarketingSection />
      </div>
    </ContentSectionContainer>
  )
};

const FaqsPage = () => {
  return (
    <PageContainer
      id="faqs"
      titlePartA="Frequently Asked"
      titlePartB=" Questions"
      description="We've pulled together answers to some commonly asked questions about HAUS, what we do and how we do it."
      columnA={faqBlocks()} />
  )
}

export default FaqsPage
