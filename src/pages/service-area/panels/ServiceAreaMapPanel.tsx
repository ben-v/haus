import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgServiceAreaMap from "../../../components/images/sections/SvgServiceAreaMap";

const ServiceAreaMapPanel = () => {
    return (
        <div className="w-full md:max-w-2xl md:pt-0">
            <ContentSectionContainer flexDirection="Center">
                <RoundCornerContainer id="service-area-map" padding="Small">
                <SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-400/50 object-cover object-top shadow-lg" />
                </RoundCornerContainer>
            </ContentSectionContainer>
        </div>
    )
}

export default ServiceAreaMapPanel
