import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import NavLink from "../../../components/navigation/NavLink";
import CardHeader from "../../../components/layouts/CardHeader";

import { logClickAction } from "../../../components/analytics/GA";

const FaqsDetailOtherPanel = () => {
  const logClick = (label: string) => {
    logClickAction("Service Area Detail Panel", label);
  };
  
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
      <CardHeader 
        title="Have other questions?"
        titleAlignment="Left" 
        childrenAlignment="Left"
        childrenClassnames="tabpanel-text">
          Feel free to reach out with any questions you may have.
        </CardHeader>
          <NavLink url="/contact" onClick={() => logClick("Contact Us Button")}>Contact Us</NavLink>
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailOtherPanel
