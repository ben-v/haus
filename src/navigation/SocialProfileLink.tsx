
import React, { ReactElement, ReactNode } from "react"
import { ICON_SIZES, IconSize } from "../components/images/icons/IconConfig"
import StandardLink from "../components/buttons/StandardLink"
import SvgGoogleGLogo from "../components/images/icons/SvgGoogleGLogo";
import SvgFacebookFontAwesomeGeneric from "../components/images/icons/SvgFacebookFontAwesomeGeneric";
import SvgGoogleFontAwesomeGeneric from "../components/images/icons/SvgGoogleFontAwesomeGeneric";
import SvgYelpFontAwesomeGeneric from "../components/images/icons/SvgYelpFontAwesomeGeneric";
import SvgInstagramGeneric from "../components/images/icons/SvgInstagramGeneric";
import PngInstagramColor from "../../public/icons/instagram-color.png";

export enum SocialPlatforms {
    GOOGLE = "Google",
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram",
    YELP = "Yelp"
}

interface SocialPlatformLinkConfig {
    url: string,
    genericIcon?: ReactElement,
    colorIcon?: ReactElement
}

const SocialProfileUrls: Record<SocialPlatforms, SocialPlatformLinkConfig> = {
    "Google": {
        url: "https://g.co/kgs/9RGsPhA",
        genericIcon: <SvgGoogleFontAwesomeGeneric />,
        colorIcon: <SvgGoogleGLogo />
    },
    "Facebook": {
        url: "https://www.facebook.com/haus.property.svcs",
        genericIcon: <SvgFacebookFontAwesomeGeneric />,
        colorIcon: <SvgFacebookFontAwesomeGeneric fill="#0866FF" />
    },
    "Instagram": {
        url: "https://www.instagram.com/haus.property.svcs",
        genericIcon: <SvgInstagramGeneric />,
        colorIcon: <img src={PngInstagramColor} />
    },
    "Yelp": {
        url: "https://www.yelp.com/biz/haus-property-services-bozeman",
        genericIcon: <SvgYelpFontAwesomeGeneric />,
        colorIcon: <SvgYelpFontAwesomeGeneric fill="#FF1A1A" />
    }
}

export interface SocialProfileLinkProps {
    platform: SocialPlatforms,
    type?: "DisplayIcon" | "DisplayChildren",
    useGenericIcon?: boolean,
    genericIconFill?: string,
    size?: IconSize,
    children?: ReactNode
}

const defaultProps = {
    type: "DisplayIcon",
    useGenericIcon: false,
    size: ICON_SIZES.default,
    genericIconFill: "white"
} satisfies Partial<SocialProfileLinkProps>

const SocialProfileLink = (props: SocialProfileLinkProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    const config: SocialPlatformLinkConfig = SocialProfileUrls[propsWithDefaults.platform];
    let icon: ReactElement | undefined;

    if (propsWithDefaults.useGenericIcon && config.genericIcon) {
        icon = config.genericIcon;
    } else {
        if (!propsWithDefaults.useGenericIcon && config.colorIcon) {
            icon = config.colorIcon;
        }
    }

    return (
        <StandardLink url={config.url} target="_blank" aria-label={props.platform} isExternalRoute={true}>
            <span className="sr-only">{props.platform}</span>
            {
                ((propsWithDefaults.type === "DisplayIcon") && icon) ?
                    (
                        propsWithDefaults.useGenericIcon ? 
                            React.cloneElement(icon, {
                                width: propsWithDefaults.size.width,
                                height: propsWithDefaults.size.height,
                                fill: propsWithDefaults.genericIconFill
                            })
                        :
                        React.cloneElement(icon, {
                            width: propsWithDefaults.size.width,
                            height: propsWithDefaults.size.height
                        })
                )
            :
                propsWithDefaults.children
            }
        </StandardLink>

    )
}

export default SocialProfileLink
