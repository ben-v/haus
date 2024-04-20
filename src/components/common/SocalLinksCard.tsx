import { Link } from "react-router-dom"

import CardHeader from "../layouts/CardHeader"
import RoundCornerContainer from "../containers/RoundCornerContainer"
import SvgYelpGeneric from "../images/icons/SvgYelpGneric"
import SvgFacebookGeneric from "../images/icons/SvgFacebookGeneric"
import PngInstagramColor from "../../../public/icons/instagram-color.png";

import SvgGoogleGLogo from "../images/icons/SvgGoogleGLogo";
import SocialProfileUrls from "../../navigation/SocialProfileUrls";

const SocialLinksCard = () => {
    return (
        <RoundCornerContainer>
            <CardHeader title="Connect with HAUS on:" titleAlignment="Left" />
            <div className="relative flex gap-4 pt-3 mb-auto">
                <Link to={SocialProfileUrls.GOOGLE} target="_blank" aria-label="google">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                    <SvgGoogleGLogo width={48} height={48} />
                </Link>
                <Link to={SocialProfileUrls.FACEBOOK} target="_blank" aria-label="facebook">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                    <SvgFacebookGeneric fill="#0866FF" width={48} height={48} />
                </Link>
                <Link to={SocialProfileUrls.INSTAGRAM} target="_blank" aria-label="instagram">
                    {/* The media kit SVG file for Instagram is massive, 11+ MB, and too big for website usage. Tried to make smaller SVG file but could not get it below the original file size. Went with their provided
                        PNG file and reduced the size to 512x512 which got the file down to 168k. Wanted to use their official gradient colored image, so needed to use fully colorized image instead
                        of overriding the fill color on the generic instagram component, SvgInstagramGeneric. */}
                    <img src={PngInstagramColor} width={48} height={48} />
                </Link>
                <Link to={SocialProfileUrls.YELP} target="_blank" aria-label="yelp">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Yelp "red" color by color sampling in another app and applyling here via fill property. */}
                    <SvgYelpGeneric fill="#FF1A1A" width={48} height={48} />
                </Link>
            </div>
        </RoundCornerContainer>
    )
}

export default SocialLinksCard