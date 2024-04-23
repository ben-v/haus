// import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ContentSection from "../../../components/layouts/ContentSection";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import { Typography } from "@material-tailwind/react";

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

const FaqsDetailSection = () => {
  return (
    <ContentSection flexDirection="Center">
        <div className="mx-auto grid gap-8 w-full z-50">
          {faqs.map(({ question, answer }) => (
            <div key={question}>
              <Typography className="pb-3 text-lg font-bold text-gray-900 dark:text-white">
                {question}
              </Typography>
              <div className="border-t border-gray-200 pt-3">
                <Typography className="font-normal text-gray-600 dark:text-gray-300">
                  {answer}
                </Typography>
              </div>
            </div>
          ))}
        </div>
    </ContentSection>
  );
}

export default FaqsDetailSection
