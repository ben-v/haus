import TestamonialCard from "../../../components/cards/TestamonialCard";
import SocialLinksCard from "../../../components/common/SocalLinksCard";
import ContentSection from "../../../components/layouts/ContentSection";

const ContactMarketingSection = () => {

    return (
        <ContentSection flexDirection="Center">
            <TestamonialCard
                padding="Large"
                reviewerName="Kayla C."
                date="4/17/24"
                stars={5}
                source="Google"
                reviewText="HAUS did a fantastic job.  Ben was very professional, arrived on time and was always easy to communicate with.  The new shelving looks great!  I highly recommend them." />
            <SocialLinksCard />
        </ContentSection>
    )
}

export default ContactMarketingSection
