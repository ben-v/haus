import React from "react";
import ContentSection from "../../../components/layouts/ContentSection";
import RoundCornerContainer from '../../../components/containers/RoundCornerContainer';

// NOTE: In order to get the Accordian component to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// function Icon({ id, open } : {id: number, open: number}) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//     </svg>
//   );
// }

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
  },
  {
    question: "Question 6",
    answer: "Answer 6"
  }
];

const FaqsDetailSection = () => {
  // Init using -1 because indexes start at 0
  // const [open, setOpenState] = React.useState(-1);
  
  // Accordian animation on mobile phone is bad, so just open all for now until have better solution. 4/23/24
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

  // If closing, use -1 because indexes start at 0
  // const onClickHandler = (index: React.SetStateAction<number>) => setOpenState(open === index ? -1 : index);

  return (
    <ContentSection flexDirection="Center">
      <RoundCornerContainer>
      {faqs.map((faq,) => (
        <Accordion open={alwaysOpen}>
          <AccordionHeader onClick={handleAlwaysOpen} className="accordian-header">{faq.question}</AccordionHeader>
          <AccordionBody className="accordian-body">{faq.answer}</AccordionBody>
        </Accordion>

      ))}
      </RoundCornerContainer>
    </ContentSection>
  );
}

export default FaqsDetailSection
