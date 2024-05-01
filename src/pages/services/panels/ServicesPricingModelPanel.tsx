import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import CardHeader from "../../../components/layouts/CardHeader";

const ServicesPricingModelPanel = () => {
    
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
      <CardHeader 
        title="Pricing Panel Title"
        titleAlignment="Left" 
        childrenAlignment="Left"
        childrenClassnames="tabpanel-text">
          Pricing model goes here
        </CardHeader>
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default ServicesPricingModelPanel
