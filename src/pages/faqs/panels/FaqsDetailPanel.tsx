import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import { Typography } from "@material-tailwind/react";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";

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
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-8">
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
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailPanel