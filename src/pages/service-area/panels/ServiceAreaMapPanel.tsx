import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgServiceAreaMap from "../../../components/images/sections/SvgServiceAreaMap";

const ServiceAreaMapPanel = () => {
    return (
        <div className="w-full md:max-w-2xl md:pt-0">
            <ContentSectionContainer flexDirection="Center">
                <RoundCornerContainer>
                <SvgServiceAreaMap className="mx-auto rounded-3xl border border-gray-300/100 object-cover object-top shadow-2xl" />
                </RoundCornerContainer>
            </ContentSectionContainer>
        </div>
    )
}

export default ServiceAreaMapPanel
