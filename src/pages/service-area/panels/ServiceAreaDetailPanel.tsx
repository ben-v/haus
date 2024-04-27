import { useContext } from "react";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgMapLocationDotSolid from "../../../components/images/icons/SvgMapLocationDotSolid";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import ButtonLink from "../../../components/buttons/ButtonLink";

const ServiceAreaDetailPanel = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <ContentSectionContainer flexDirection="Center">
      <RoundCornerContainer id="service-area-detail" padding="Small" bodyClassNames="gap-8">
        <ContentIconContainer title="Communities We Serve">
          <SvgMapLocationDotSolid fill={theme === THEMES.DARK ? 'white' : 'dark'} className="m-auto w-auto" width={40} height={48} />
        </ContentIconContainer>
        <div className="grid grid-cols-2 rounded-3xl border dark:border-gray-700 general-body-text border-gray-200 [&>*]:dark:border-gray-700 [&>*]:p-4 [&>*]:text-xs md:[&>*]:text-sm lg:[&>*]:text-lg [&>*]:border-gray-200">
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

        <p className="general-body-text">Communities outside the Bozeman, Belgrade, Gallatin Gateway city/community limits have a scaling trip fee.</p>

        <p className="general-body-text">Don't see your community listed or have questions about our service area? Feel free to reach out to us for more information. We're here to help!</p>

        <ButtonLink url="/contact/#" title="Contact Us" />
      </RoundCornerContainer>
    </ContentSectionContainer>
  )
}

export default ServiceAreaDetailPanel
