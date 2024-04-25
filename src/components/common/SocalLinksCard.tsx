import { Link } from "react-router-dom"

import SvgYelpGeneric from "../images/icons/SvgYelpGneric"
import SvgFacebookGeneric from "../images/icons/SvgFacebookGeneric"
import PngInstagramColor from "../../../public/icons/instagram-color.png";

import SvgGoogleGLogo from "../images/icons/SvgGoogleGLogo";
import SocialProfileUrls from "../../navigation/SocialProfileUrls";
import ContentSectionContainer from "../containers/ContentSectionContainer";

export interface ContentIconContainerProps {
    size: "16x16" | "24x24" | "32x32" | "48x48" | "64x64"
    showHeader: boolean;
}

const defaultProps = {
    size: "24x24",
    showHeader: true
} satisfies Partial<ContentIconContainerProps>

const SocialLinksCard = (props: ContentIconContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    let width: number;
    let height: number;

    switch (propsWithDefaults.size) {
        case "16x16": {
            width = height = 16;
            break;
        }
        case "32x32": {
            width = height = 32;
            break;
        }
        case "48x48": {
            width = height = 48;
            break;
        }
        case "64x64": {
            width = height = 64;
            break;
        }
        case "24x24":
        default: {
            width = height = 24;            
            break;
        }
    }

    return (
        <ContentSectionContainer flexDirection="Center">
            <div className="relative flex gap-4">
                <Link to={SocialProfileUrls.GOOGLE} target="_blank" aria-label="google">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                    <SvgGoogleGLogo width={width} height={height} />
                </Link>
                <Link to={SocialProfileUrls.FACEBOOK} target="_blank" aria-label="facebook">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                    <SvgFacebookGeneric fill="#0866FF" width={width} height={height} />
                </Link>
                <Link to={SocialProfileUrls.INSTAGRAM} target="_blank" aria-label="instagram">
                    {/* The media kit SVG file for Instagram is massive, 11+ MB, and too big for website usage. Tried to make smaller SVG file but could not get it below the original file size. Went with their provided
                        PNG file and reduced the size to 512x512 which got the file down to 168k. Wanted to use their official gradient colored image, so needed to use fully colorized image instead
                        of overriding the fill color on the generic instagram component, SvgInstagramGeneric. */}
                    <img src={PngInstagramColor} width={width} height={height} />
                </Link>
                <Link to={SocialProfileUrls.YELP} target="_blank" aria-label="yelp">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Yelp "red" color by color sampling in another app and applyling here via fill property. */}
                    <SvgYelpGeneric fill="#FF1A1A" width={width} height={height} />
                </Link>
            </div>
        </ContentSectionContainer>
    )
}

export default SocialLinksCard