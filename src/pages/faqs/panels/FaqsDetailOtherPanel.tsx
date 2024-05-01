import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ButtonLink from "../../../components/navigation/ButtonLink";
import CardHeader from "../../../components/layouts/CardHeader";

const FaqsDetailOtherPanel = () => {
    
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
      <CardHeader 
        title="Still looking?"
        titleAlignment="Left" 
        childrenAlignment="Left"
        childrenClassnames="tabpanel-text">
          Have other questions? Feel free to reach out with any you might have!
        </CardHeader>
          <ButtonLink url="/contact">Contact Us</ButtonLink>
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailOtherPanel
