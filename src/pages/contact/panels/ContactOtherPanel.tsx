import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import { THEMES, ThemeContext } from "../../../components/contexts/ThemeContext";

import { useContext } from "react";
import SocialLinksCard from "../../../components/cards/SocalLinksCard";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgEmailSolid from "../../../components/images/icons/SvgEmailSolid";
import SvgPhoneSolid from "../../../components/images/icons/SvgPhoneSolid";
import CardHeader from "../../../components/layouts/CardHeader";
import { ICON_SIZES } from "../../../components/images/icons/IconConfig";
import colors from "@material-tailwind/react/theme/base/colors";
import StandardLink from "../../../components/navigation/StandardLink";

import { logClickAction } from "../../../components/analytics/GA";

const ContactOtherPanel = () => {
  const logClick = (label: string) => {
    logClickAction("Contact Form Panel", label);
  };

    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="Center">
            <RoundCornerContainer id="contact-other" padding="Small" containerClassNames="w-full" bodyClassNames="gap-2">
                <CardHeader title="HAUS Property Services" titleAlignment="Left" childrenAlignment="Left" childrenClassnames="tabpanel-text" />
                <div className="pt-2 flex items-center gap-2 md:gap-3">
                    <SvgPhoneSolid width={ICON_SIZES.sm.width} height={ICON_SIZES.sm.height} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? colors["blue-gray"][100] : colors["blue-gray"][700]} />
                    <StandardLink url="tel:4063129989" className="body-text tabpanel-text" isExternalRoute={true} onClick={() => logClick("Phone Number Link")}>(406) 312-9989</StandardLink>
                </div>
                <div className="pb-4 flex items-center gap-2 md:gap-3">
                    <SvgEmailSolid width={ICON_SIZES.sm.width} height={ICON_SIZES.sm.height} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? colors["blue-gray"][100] : colors["blue-gray"][700]} />
                    <StandardLink url="mailto:hello@hauspropertyservices.com" className="body-text tabpanel-text" isExternalRoute={true} onClick={() => logClick("Email Link")}>hello@hauspropertyservices.com</StandardLink>
                </div>

                <CardHeader title="Also, find us on:" titleAlignment="Left" headerType="Subheader" />
                <div className="flex items-center gap-1.5">
                    <SocialLinksCard source="Contact Other Panel"/>
                </div>
            </RoundCornerContainer>
        </ContentSectionContainer>
    )
}

export default ContactOtherPanel