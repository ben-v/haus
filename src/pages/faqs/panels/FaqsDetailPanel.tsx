import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import Accordion, { AccordionItem } from "../../../components/layouts/Accordion";
import StandardLink from "../../../components/navigation/StandardLink";

let faqs: AccordionItem[] = [
  {
    title: "Question 1",
    children: "Answer 1"
  },
  {
    title: "What forms of payment do you accept?",
    children: <div>All major credit cards, Apple Pay, Google Pay and ACH bank payments can be used through the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink>. We also accept cash and Venmo payments.</div>
  },
  {
    title: "Question 3",
    children: "Answer 3"
  },
  {
    title: "Question 4",
    children: "Answer 4"
  },
  {
    title: "Question 5",
    children: "Answer 5"
  }
] 

// const faqs2: { question: string, answer: string }[] = [
//   {
//     question: "Question 1",
//     answer: "Answer 1"
//   },
//   {
//     question: "What forms of payment do you accept?",
//     answer: renderToString(<>All major credit cards, Apple Pay, Google Pay and ACH bank payments can be used through the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink>. We also accept cash and Venmo payments.</>)
//   },
//   {
//     question: "Question 3",
//     answer: "Answer 3"
//   },
//   {
//     question: "Question 4",
//     answer: "Answer 4"
//   },
//   {
//     question: "Question 5",
//     answer: "Answer 5"
//   }
// ];

const FaqsDetailPanel = () => {
  // let faqList: AccordionItem[] = [];

  // faqs.map((faq) => {
  //   faqList.push(
  //     {
  //       title: faq.question,
  //       children: faq.answer
  //     }
  //   );
  // })

  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full">
        <Accordion items={faqs} />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailPanel
