import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import GenericContentContainer from "../../../components/containers/GenericContentContainer";
import SvgWorkerEmailing from "../../../components/images/stick-figures/SvgWorkerEmailing";

const ContactMarketingSection = () => {
    return (
        <div className="w-auto md:w-4/5 md:max-w-2xl md:pt-0">
            <ContentSectionContainer flexDirection="Center">
                <GenericContentContainer id="contact-marketing-worker" padding="None">
                    <SvgWorkerEmailing className="w-auto" />
                </GenericContentContainer>
            </ContentSectionContainer>
        </div>
    )
}

export default ContactMarketingSection
