import ContentSection from "../../../components/layouts/ContentSection";

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

  return (
    <ContentSection>
      <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 w-full">
        {faqs.map((faq,) => (
          <div>
            <dl className="faq mx-auto max-w-2xl">
              <dt className="text-lg">
                <button type="button" className="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-0" data-active="false">
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-0">
                <p className="pb-6 text-base text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </dd>
            </dl>
          </div>
        ))}
      </div>
      </ContentSection>
  );
}

export default FaqsDetailSection
