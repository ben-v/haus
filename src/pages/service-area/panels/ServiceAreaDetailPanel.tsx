import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ButtonLink from "../../../components/buttons/ButtonLink";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import SvgCommunitySupportDark from "../../../components/images/icons/SvgCommunitySupportDark";
import SvgCommunitySupportLight from "../../../components/images/icons/SvgCommunitySupportLight";

const ServiceAreaDetailPanel = () => {
  const { theme, } = useContext(ThemeContext);
  
  return (
    <ContentSectionContainer flexDirection="Center">
      <RoundCornerContainer id="service-area-detail" padding="Small" bodyClassNames="gap-8">
        <ContentIconContainer title="Communities We Serve">
        {theme === THEMES.DARK ? <SvgCommunitySupportDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgCommunitySupportLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
        </ContentIconContainer>
        <div className="grid grid-cols-2 rounded-3xl border dark:border-gray-700 border-gray-200 [&>*]:dark:border-gray-700 [&>*]:p-4 [&>*]:text-xs md:[&>*]:text-sm lg:[&>*]:text-lg [&>*]:border-gray-200">
          <div className="flex justify-center items-center gap-2 border-b">
            Bozeman
          </div>
          <div className="flex justify-center items-center gap-2 border-b border-l">
            Belgrade
          </div>
          <div className="flex justify-center items-center gap-2">
            Gallatin Gateway
          </div>
          <div className="flex justify-center items-center gap-2 border-l">
            Big Sky
          </div>
        </div>

        <p>Communities outside the Bozeman, Belgrade, Gallatin Gateway city/community limits have a scaling trip fee.</p>

        <p>Don't see your community listed or have questions about our service area? Feel free to reach out to us for more information. We're here to help!</p>

        <ButtonLink url="/contact/#" title="Contact Us" />
      </RoundCornerContainer>
    </ContentSectionContainer>
  )
}

export default ServiceAreaDetailPanel
