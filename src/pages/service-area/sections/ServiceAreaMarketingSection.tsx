import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import GenericContentContainer from "../../../components/containers/GenericContentContainer";
import SvgPersonDriving from "../../../components/images/stick-figures/SvgPersonDriving";

const ServiceAreaMarketingSection = () => {
    return (
        <div className="w-auto pt-8 md:w-4/5 md:max-w-2xl md:pt-0">
            <ContentSectionContainer flexDirection="Center">
                <GenericContentContainer id="faqs-marketing-person" padding="None">
                    <SvgPersonDriving className="w-auto"/>
                </GenericContentContainer>
            </ContentSectionContainer>
        </div>
    )
}

export default ServiceAreaMarketingSection
