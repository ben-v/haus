import { HashLink } from "react-router-hash-link";
import { Typography } from "@material-tailwind/react";
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ContentIconContainer from "../../../components/containers/ContentIconContainer";
import SvgQuestion from "../../../components/images/icons/SvgQuestion";
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";

const FaqsMarketingSection = () => {
    const { theme, } = useContext(ThemeContext);

    return (
        <div className="w-auto pt-8 md:w-4/5 md:max-w-2xl md:pt-0">
            <ContentSectionContainer flexDirection="Center">
                <RoundCornerContainer>
                    <ContentIconContainer title={"Other questions?"}>
                        <SvgQuestion fill={theme === THEMES.DARK ? 'white' : 'dark'} className="m-auto w-auto" width={64} height={64} />
                    </ContentIconContainer>
                    <Typography className="my-8 font-normal text-gray-600 dark:text-gray-300">
                        Have other questions? Feel free to reach out with any you might have!
                    </Typography>
                    <HashLink to="/contact/#" className="relative flex h-11 w-full items-center justify-center px-6 mb-4 md:mb-auto before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                        <span className="relative text-base font-semibold text-white dark:text-dark">Contact Us</span>
                    </HashLink>
                </RoundCornerContainer>
            </ContentSectionContainer>
        </div>
    )
}

export default FaqsMarketingSection
