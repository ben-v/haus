import React from "react";
import ContentSection from "../../../components/layouts/ContentSection";

// NOTE: In order to get the Accordian component to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open } : {id: number, open: number}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

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
  const [open, setOpenState] = React.useState(-1);

  // If closing, use -1 because indexes start at 0
  const onClickHandler = (index: React.SetStateAction<number>) => setOpenState(open === index ? -1 : index);

  return (
    <ContentSection flexDirection="Center">
      {faqs.map((faq, index) => (
        <Accordion open={open === index} icon={<Icon id={index} open={open} />}>
          <AccordionHeader onClick={() => onClickHandler(index)} className="accordian-header">{faq.question}</AccordionHeader>
          <AccordionBody className="accordian-body">{faq.answer}</AccordionBody>
        </Accordion>

      ))}
    </ContentSection>
  );
}

export default FaqsDetailSection
