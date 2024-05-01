import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";

const faqs: { serviceGroup: string, serviceGroupDetails: string }[] = [
  {
    serviceGroup: "Service Group 1",
    serviceGroupDetails: "Summary 1"
  },
  {
    serviceGroup: "Service Group 2",
    serviceGroupDetails: "Service Group Detail 2"
  },
  {
    serviceGroup: "Service Group 3",
    serviceGroupDetails: "Service Group Detail 3"
  },
  {
    serviceGroup: "Service Group 4",
    serviceGroupDetails: "Service Group Detail 4"
  },
  {
    serviceGroup: "Service Group 5",
    serviceGroupDetails: "Service Group Detail 5"
  }
];

const ServicesDetailPanel = () => {
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-6">
        {faqs.map(({ serviceGroup, serviceGroupDetails }) => (
          <div key={serviceGroup}>
            <span className="body-text tabpanel-text !font-bold">{serviceGroup}</span>
            <div className="border-t border-gray-200 pt-2 body-text tabpanel-text">
                {serviceGroupDetails}
            </div>
          </div>
        ))}
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default ServicesDetailPanel
