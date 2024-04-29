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
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import colors from "@material-tailwind/react/theme/base/colors";

const ContactOtherPanel = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="Center">
            <RoundCornerContainer id="contact-other" padding="Small" containerClassNames="w-full" bodyClassNames="gap-2">
                <CardHeader title="Addtional Contact Channels" titleAlignment="Left" />
                <div className="pt-4 flex items-center gap-2 md:gap-3">
                    <SvgPhoneSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? colors["blue-gray"][100] : colors["blue-gray"][700]} />
                    <Link to="tel:4063129989" className="body-text">(406) 312-9989</Link>
                </div>
                <div className="pb-4 flex items-center gap-2 md:gap-3">
                    <SvgEmailSolid width={ICON_SIZES.sm.height} height={ICON_SIZES.sm.height} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? colors["blue-gray"][100] : colors["blue-gray"][700]} />
                    <Link to="mailto:hello@hauspropertyservices.com" className="body-text">hello@hauspropertyservices.com</Link>
                </div>

                <CardHeader title="Also, find us on:" titleAlignment="Left" headerType="Subheader" />
                <div className="flex items-center gap-1.5">
                    <SocialLinksCard showHeader={false} />
                </div>
            </RoundCornerContainer>
            <CommonToastNotificationConfig />
        </ContentSectionContainer>
    )
}

export default ContactOtherPanel