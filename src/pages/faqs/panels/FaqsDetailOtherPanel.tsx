import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import { HashLink } from "react-router-hash-link";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgQuestion from "../../../components/images/icons/SvgQuestion";

const FaqsDetailOtherPanel = () => {
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
          <ContentIconContainer 
            title={"Have other questions?"}
            description="Have other questions? Feel free to reach out with any you might have!" >
            <SvgQuestion className="m-auto w-auto" width={64} height={64} />
          </ContentIconContainer>
          <HashLink to="/contact/#" smooth className="relative flex h-11 w-full items-center justify-center px-6 mb-4 md:mb-auto before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
            <span className="relative text-base font-semibold text-white dark:text-dark">Contact Us</span>
          </HashLink>
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailOtherPanel
