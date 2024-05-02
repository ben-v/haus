import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import Accordian, { AccordianItem } from "../../../components/layouts/Accordian";

const faqs: { question: string, answer: string }[] = [
  {
    question: "Question 1",
    answer: "Answer 1"
  },
  {
    question: "Question 2",
    answer: "Answer 2"
  },
  {
    question: "Question 3",
    answer: "Answer 3"
  },
  {
    question: "Question 4",
    answer: "Answer 4"
  },
  {
    question: "Question 5",
    answer: "Answer 5"
  }
];

const FaqsDetailPanel = () => {
  let faqList: AccordianItem[] = [];

  faqs.map((faq) => {
    faqList.push(
      {
        title: faq.question,
        children: faq.answer
      }
    );
  })

  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full">
        <Accordian items={faqList} />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailPanel
