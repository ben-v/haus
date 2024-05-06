// import { ReactNode } from "react";
// import { renderToString } from "react-dom/server";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import Accordion, { AccordionItem } from "../../../components/layouts/Accordion";
import StandardLink from "../../../components/navigation/StandardLink";
import { ReactNode } from "react";

const faqData: { question: string, answers: ReactNode[] }[] = [
  {
    question: "What forms of payment do you accept?",
    answers: [
      <>All major credit cards, Apple Pay, Google Pay and ACH bank payments can be used through the <StandardLink url="https://clienthub.getjobber.com/client_hubs/96f9f173-4904-4f62-94b1-2f43695ff40e/login/new?source=share_login" isExternalRoute={true} target="_blank"><span className="font-semibold body-link">Client Hub</span></StandardLink>.</>,
      "We also accept cash and Venmo payments."
    ]
  },
  {
    question: "Are you Available for Emergencies?",
    answers: [
      "Yes, for existing customers on a case-by-case basis.", 
      "Emergencies in the Bozeman, Belgrade, and Gallatin Gateway city/community limits, have a trip fee of $250 and an hourly rate of $250, plus materials, with a two hour minimum.",
      "Emergencies outside the Bozeman, Belgrade, and Gallatin Gateway city/community limits are addressed on a case-by-case basis and with a scaling trip fee, hourly rate and minimum number of hours."
    ]
  },
  {
    question: "What if I want to cancel or reschedule my appointment?",
    answers: [
      "Cancellation and/or rescheduling of an appointment must be done 24 hours in advance in order to avoid a cancellation fee.",
      "If cancellation is done with less than 24 hours notice, a cancellation fee equavalent to the trip fee associated with the cancelled appointment will be charged to the credit card on file."
    ]
  },
  {
    question: "What if I forget about my appointment?",
    answers: [
      "In the event a client is not at the designated address at the time of the appointment, we will wait fifteen (15) minutes on site before assuming the appointment has been canceled and a cancellation fee will be charged."
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
        <Accordion items={faqList} />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailPanel
