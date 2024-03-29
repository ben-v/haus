// import React, { useState } from 'react';
import { useState } from 'react';

const FaqsList = () => {
  // State to keep track of the active FAQ item
  const [activeItem, setActiveItem] = useState(null);

  // Function to toggle active item
  const toggleActiveItem = (index: any) => {
    setActiveItem(activeItem === index ? null : index);
  };

  // Array of FAQ items
  const faqs = [
    { question: "What's included in the pack?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!" },
    { question: "What included in the pack ?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!" },
    { question: "What included in the pack ?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!" },
    { question: "What included in the pack ?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!" },
    { question: "What included in the pack ?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!" },

  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index}>
          <dl className="faq mx-auto max-w-2xl">
            <dt className="text-lg">
              <button
                type="button"
                className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                aria-controls={`faq-${index}`}
                data-active={activeItem === index}
                onClick={() => toggleActiveItem(index)}
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`arrow-down h-6 w-6 rotate-${activeItem === index ? '180' : '0'} transform duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className={`faq-answer overflow-hidden transition-max-h duration-300 ease-in-out max-h-${activeItem === index ? 'full' : '0'}`}
              id={`faq-${index}`}
            >
              <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </dd>
          </dl>
        </div>
      ))}
    </>
  );
};

export default FaqsList;
