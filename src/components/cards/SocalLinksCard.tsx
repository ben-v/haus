
// import ContentSectionContainer from "../containers/ContentSectionContainer";
import { logClickAction } from "../analytics/GA";
import { ICON_SIZES, IconSize } from "../images/icons/IconConfig";
import SocialProfileLink, { SocialPlatforms } from "../navigation/SocialProfileLink";

export interface SocialLinksCardProps {
    source: string,
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

    const logClick = (label: string) => {
        logClickAction(`Social Links Card - ${propsWithDefaults.source}`, label);
    };

    return (
        <div className="relative inline-flex gap-3">
            <SocialProfileLink platform={SocialPlatforms.GOOGLE} iconSize={propsWithDefaults.size} onClick={() => logClick(SocialPlatforms.GOOGLE)} />
            <SocialProfileLink platform={SocialPlatforms.FACEBOOK} iconSize={propsWithDefaults.size} onClick={() => logClick(SocialPlatforms.FACEBOOK)} />
            <SocialProfileLink platform={SocialPlatforms.INSTAGRAM} iconSize={propsWithDefaults.size} onClick={() => logClick(SocialPlatforms.INSTAGRAM)} />
            <SocialProfileLink platform={SocialPlatforms.YELP} iconSize={propsWithDefaults.size} onClick={() => logClick(SocialPlatforms.YELP)} />
        </div>
    )
}

export default SocialLinksCard