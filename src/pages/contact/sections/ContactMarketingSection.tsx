import { useContext } from "react";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";

import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import CardHeader from "../../../components/layouts/CardHeader";

// import TestamonialCard from "../../../components/cards/TestamonialCard";
import SocialLinksCard from "../../../components/common/SocalLinksCard";

import SvgPhoneSolid from "../../../components/images/SvgPhoneSolid";
import SvgEmailSolid from "../../../components/images/SvgEmailSolid";

const ContactMarketingSection = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <div className="w-auto md:w-4/5 md:max-w-2xl md:pt-0">
        <ContentSectionContainer flexDirection="Center">
            <RoundCornerContainer>
                <CardHeader title="Contact Information" titleAlignment="Left" />
                <div className="flex items-center gap-2 md:gap-3">
                    <SvgPhoneSolid width={16} height={16} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? 'white' : 'dark'} />
                    <Typography className="text-sm lg:text-base text-dark dark:text-white">
                        <Link to="tel:4063129989">(406) 312-9989</Link>
                    </Typography>
                </div>
                <div className="my-4 flex items-center gap-2 md:gap-3">
                    <SvgEmailSolid width={16} height={16} className='relative mr-1 md:mr-2' fill={theme === THEMES.DARK ? 'white' : 'dark'} />
                    <Typography className="text-sm lg:text-base text-dark dark:text-white">
                        <Link to="mailto:hello@hauspropertyservices.com">hello@hauspropertyservices.com</Link>
                    </Typography>
                </div>

                <div className="flex items-center gap-1.5">
                    <SocialLinksCard showHeader={false} size="24x24" />
                </div>
            </RoundCornerContainer>

            {/* <TestamonialCard
                padding="Large"
                reviewerName="Kayla C."
                date="4/17/24"
                stars={5}
                source="Google"
                reviewText="HAUS did a fantastic job.  Ben was very professional, arrived on time and was always easy to communicate with.  The new shelving looks great!  I highly recommend them." /> */}
        </ContentSectionContainer>
        </div>
    )
}

export default ContactMarketingSection
