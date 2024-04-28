import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import CommonToastNotificationConfig from "../../../components/notifications/common-toast-notification-config";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";

import { useContext } from "react";
import { Link } from "react-router-dom";
import SocialLinksCard from "../../../components/common/SocalLinksCard";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgEmailSolid from "../../../components/images/SvgEmailSolid";
import SvgPhoneSolid from "../../../components/images/SvgPhoneSolid";
import CardHeader from "../../../components/layouts/CardHeader";
// import SvgContactChannels from "../../../components/images/icons/SvgContactChannels";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import SvgContactChannelsDark from "../../../components/images/icons/SvgContactChannelsDark";
import SvgContactChannelsLight from "../../../components/images/icons/SvgContactChannelsLight";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";

const ContactOtherPanel = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="Center">
            <RoundCornerContainer id="contact-other" padding="Small" containerClassNames="w-full" bodyClassNames="gap-2">
                <ContentIconContainer title="Addtional Contact Channels">
                    {theme === THEMES.DARK ? <SvgContactChannelsDark width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} /> : <SvgContactChannelsLight width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} />}
                </ContentIconContainer>
                <div className="pt-4 flex items-center gap-2 md:gap-3">
                    <SvgPhoneSolid width={16} height={16} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? 'white' : 'dark'} />
                    <Link to="tel:4063129989">(406) 312-9989</Link>
                </div>
                <div className="pb-4 flex items-center gap-2 md:gap-3">
                    <SvgEmailSolid width={16} height={16} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? 'white' : 'dark'} />
                    <Link to="mailto:hello@hauspropertyservices.com">hello@hauspropertyservices.com</Link>
                </div>

                <CardHeader title="Also, find us on:" titleAlignment="Left" headerType="Subheader" />
                <div className="flex items-center gap-1.5">
                    <SocialLinksCard showHeader={false} size="24x24" />
                </div>
            </RoundCornerContainer>
            <CommonToastNotificationConfig />
        </ContentSectionContainer>
    )
}

export default ContactOtherPanel