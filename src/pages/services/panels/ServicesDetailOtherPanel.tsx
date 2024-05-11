import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import NavLink from "../../../components/navigation/NavLink";
import CardHeader from "../../../components/layouts/CardHeader";

import { logClickAction } from "../../../components/analytics/GA";

const ServicesDetailOtherPanel = () => {
  const logClick = (label: string) => {
    logClickAction("Services Other Panel", label);
  };

  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
        <CardHeader
          title="Looking for other services?"
          titleAlignment="Left"
          childrenAlignment="Left"
          childrenClassnames="tabpanel-text">
          If you don't see the services you're interested in listed, please reach out to us. We may still be able to assist you!
        </CardHeader>
        <NavLink url="/contact" onClick={() => logClick("Contact Us Button")}>Contact Us</NavLink>
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default ServicesDetailOtherPanel
