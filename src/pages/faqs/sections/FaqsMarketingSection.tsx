import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import GenericContentContainer from "../../../components/containers/GenericContentContainer";
import SvgPersonInformation from "../../../components/images/stick-figures/SvgPersonInformation";

const FaqsMarketingSection = () => {
    return (
        <div className="w-auto pt-8 md:w-4/5 md:max-w-2xl md:pt-0">
            <ContentSectionContainer flexDirection="Center">
                <GenericContentContainer id="faqs-marketing-person" padding="None">
                    <SvgPersonInformation className="w-auto"/>
                </GenericContentContainer>
            </ContentSectionContainer>
        </div>
    )
}

export default FaqsMarketingSection
