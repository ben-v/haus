
import ContentSectionContainer from "../containers/ContentSectionContainer";
import { ICON_SIZES, IconSize } from "../images/icons/IconConfig";
import SocialProfileLink, { SocialPlatforms } from "../../navigation/SocialProfileLink";

export interface SocialLinksCardProps {
    size?: IconSize;
}

const defaultProps = {
    size: ICON_SIZES.md,
} satisfies Partial<SocialLinksCardProps>

const SocialLinksCard = (props: SocialLinksCardProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    return (
        <ContentSectionContainer flexDirection="Center">
            <div className="relative inline-flex gap-3">
                <SocialProfileLink platform={SocialPlatforms.GOOGLE} size={propsWithDefaults.size}  />
                <SocialProfileLink platform={SocialPlatforms.FACEBOOK} size={propsWithDefaults.size}  />
                <SocialProfileLink platform={SocialPlatforms.INSTAGRAM} size={propsWithDefaults.size}  />
                <SocialProfileLink platform={SocialPlatforms.YELP} size={propsWithDefaults.size}  />
            </div>
        </ContentSectionContainer>
    )
}

export default SocialLinksCard