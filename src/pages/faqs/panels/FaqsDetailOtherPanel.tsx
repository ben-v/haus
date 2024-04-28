import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

// NOTE: In order to get the components to work from Material-Tailwind, had to downgrade to React 18.2.42. 
// For more info see https://stackoverflow.com/questions/78296875/typescript-error-using-material-tailwind-react-with-nextjs14

import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ButtonLink from "../../../components/buttons/ButtonLink";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import SvgQuestionLight from "../../../components/images/icons/SvgQuestionLight";
import SvgQuestionDark from "../../../components/images/icons/SvgQuestionDark";

const FaqsDetailOtherPanel = () => {
  const { theme, } = useContext(ThemeContext);
  
  return (
    <ContentSectionContainer id="faqs-detail-container" flexDirection="Center" containerClassNames="items-start">
      <RoundCornerContainer id="faqs-detail" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
          <ContentIconContainer 
            title={"Still looking?"}
            description="Have other questions? Feel free to reach out with any you might have!" >
            {theme === THEMES.DARK ? <SvgQuestionDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgQuestionLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
          </ContentIconContainer>
          <ButtonLink url="/contact/#" title="Contact Us" />
      </RoundCornerContainer>
    </ContentSectionContainer>
  );
}

export default FaqsDetailOtherPanel
