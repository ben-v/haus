import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import CommonToastNotificationConfig from "../../../components/notifications/common-toast-notification-config";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";

import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SocialLinksCard from "../../../components/common/SocalLinksCard";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgEmailSolid from "../../../components/images/SvgEmailSolid";
import SvgPhoneSolid from "../../../components/images/SvgPhoneSolid";
import CardHeader from "../../../components/layouts/CardHeader";

const ContactOtherPanel = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <ContentSectionContainer flexDirection="Center">
            <RoundCornerContainer id="contact-other" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
                {/* <ContentIconContainer 
                title={"Have other questions?"}
                description="Have other questions? Feel free to reach out with any you might have!" >
                <SvgQuestion className="m-auto w-auto" width={64} height={64} />
            </ContentIconContainer> */}

                <CardHeader title="Other Contact Information" titleAlignment="Left" />
                <div className="flex items-center gap-2 md:gap-3">
                    <SvgPhoneSolid width={16} height={16} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? 'white' : 'dark'} />
                    <Typography className="text-sm lg:text-base text-dark dark:text-white">
                        <Link to="tel:4063129989">(406) 312-9989</Link>
                    </Typography>
                </div>
                <div className="my-4 pb-6 flex items-center gap-2 md:gap-3">
                    <SvgEmailSolid width={16} height={16} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? 'white' : 'dark'} />
                    <Typography className="text-sm lg:text-base text-dark dark:text-white">
                        <Link to="mailto:hello@hauspropertyservices.com">hello@hauspropertyservices.com</Link>
                    </Typography>
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