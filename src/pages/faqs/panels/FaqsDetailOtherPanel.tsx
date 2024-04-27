import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgQuestion from "../../../components/images/icons/SvgQuestion";
import ButtonLink from "../../../components/buttons/ButtonLink";

const FaqsDetailOtherPanel = () => {
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
          <ContentIconContainer 
            title={"Still looking?"}
            description="Have other questions? Feel free to reach out with any you might have!" >
            <SvgQuestion className="m-auto w-auto" width={64} height={64} />
          </ContentIconContainer>
          <ButtonLink url="/contact/#" title="Contact Us" />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailOtherPanel
