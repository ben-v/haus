// import { ReactNode } from "react";
// import { renderToString } from "react-dom/server";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import AccordionContainer, { AccordionItem } from "../../../components/containers/AccordionContainer";
import StandardLink from "../../../components/navigation/StandardLink";
import { ReactNode } from "react";

const faqData: { question: string, answers: ReactNode[] }[] = [
  {
    question: "Are you license and insured?",
    answers: [
      "Yes, we are licensed and insured."
    ]
  },
  {
    question: "What forms of payment do you accept?",
    answers: [
      <>Major credit cards, Apple Pay, Google Pay, and ACH bank payments can be used through the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink>.</>,
      <>Cash and Venmo payments are also accepted but are processed outside of the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink>.</>
    ]
  },
  {
    question: "Are you available for emergencies?",
    answers: [
      "For existing clients, emergency services are provided on a case-by-case basis.", 
      "For emergencies in the Bozeman, Belgrade, and Gallatin Gateway city/community limits, there is a trip fee of $250, an hourly rate of $150 (plus materials), with a two hour minimum.",
      "Emergencies outside the Bozeman, Belgrade, and Gallatin Gateway city/community limits are addressed on a case-by-case basis and with a scaling trip fee, hourly rate, and minimum number of hours."
    ]
  },
  {
    question: "What if I want to cancel or reschedule my appointment?",
    answers: [
      "To cancel or reschedule an appointment, please provide at least 24 hours' notice to avoid a cancellation fee.",
      "If cancellation occurs with less than 24 hours' notice, a cancellation fee equivalent to the trip fee associated with the appointment will be charged to the credit card on file."
    ]
  },
  {
    question: "What if I forget about my appointment?",
    answers: [
      "If a client is not present at the designated address at the appointment time, we will wait fifteen (15) minutes on site. After this time, if the client has not arrived, the appointment will be considered canceled and a cancellation fee will be charged."
    ]
  },
  {
    question: "How do I login to the Client Hub?",
    answers: [
      <>When you visit the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink>, enter the email address associated with your account and link will be emailed to you from which you can securely access to your <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink> account.</>
    ]
  }
];

const createHtmlList = (items: ReactNode[]):ReactNode => {
  return(
    items.length > 1 ?
    <ul className="body-text tabpanel-text list-disc mx-8">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
    :
    items.length === 1 ? <p className="body-text tabpanel-text">{items[0]}</p> : ""
  );
}

const FaqsDetailPanel = () => {
  let faqList: AccordionItem[] = [];

  faqData.map((faq) => {
    faqList.push(
      {
        title: faq.question,
        children: createHtmlList(faq.answers)
      }
    );
  })

  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full">
        <AccordionContainer items={faqList} source="FAQs Detail Panel" />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailPanel
