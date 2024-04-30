import { ReactNode, useContext } from 'react';

import { Rating } from 'react-simple-star-rating'

import resolveConfig from 'tailwindcss/resolveConfig'
import { THEMES, ThemeContext } from "../../contexts/ThemeContext";

import SocialProfileUrls from '../../navigation/SocialProfileUrls';
import RoundCornerContainer from '../containers/RoundCornerContainer';
import SvgGoogleGLogo from '../images/icons/SvgGoogleGLogo';
import SvgFacebookGeneric from '../images/icons/SvgFacebookGeneric';
import SvgYelpLogo from '../images/icons/SvgYelpLogo';
import SvgReviewAvatarTemplate from '../images/SvgReviewAvatarTemplate';
import SvgArrowUpRightFromSquareSolid from '../images/SvgArrowUpRightFromSquareSolid';
import withMaterialTailwind from '../../../tailwind.config';
import { Config } from 'tailwindcss';
import { ICON_SIZES } from '../images/icons/IconConfig';
import StandardLink from '../buttons/StandardLink';

export interface TestamonialCardProps {
  reviewerName: string;
  reviewText: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source: "Google" | "Facebook" | "Yelp";
  date: string;
  padding?: "Large" | "Small"
  grow?: "Fill" | "Shrink";
}

const reviewLogoLookup: Record<string, ReactNode> = {
  google: <SvgGoogleGLogo width={24} height={24} />,
  facebook: <SvgFacebookGeneric fill="#0866FF" width={24} height={24} />,
  yelp: <SvgYelpLogo fill="#FF1A1A" width={24} height={24} />
}

const defaultProps = {
  padding: "Small",
  grow: "Shrink"
} satisfies Partial<TestamonialCardProps>

const fullConfig = resolveConfig(withMaterialTailwind as Config)

const TestamonialCard = (props: TestamonialCardProps) => {
  const { theme, } = useContext(ThemeContext);
  
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  const reviewLogo = reviewLogoLookup[propsWithDefaults.source.toLowerCase()];
  let socialProfileUrl: string;

  switch (propsWithDefaults.source) {
    case ("Google"): {
      socialProfileUrl = SocialProfileUrls.GOOGLE;
      break;
    }
    case ("Facebook"): {
      socialProfileUrl = SocialProfileUrls.FACEBOOK;
      break;
    }
    case ("Yelp"): {
      socialProfileUrl = SocialProfileUrls.YELP;
      break;
    }
  }

  return (
      <RoundCornerContainer padding={propsWithDefaults.padding}>
        <div className="relative z-10 text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-3 w-auto h-full" >
          <div className="relative flex flex-row gap-2 items-center">
            <SvgReviewAvatarTemplate 
              values={`${propsWithDefaults.reviewerName.charAt(0).toUpperCase()}`} 
              width={ICON_SIZES.default.height} height={ICON_SIZES.default.height} 
              fill={theme === THEMES.DARK ? fullConfig.theme.colors.white : fullConfig.theme.colors.gray[700]}
              color={theme === THEMES.DARK ? fullConfig.theme.colors.gray[800] : fullConfig.theme.colors.white} />
            <span className="grow font-semibold">{propsWithDefaults.reviewerName}</span>
            <span className="items-end">
              <StandardLink url={socialProfileUrl} target="_blank" aria-label={`${propsWithDefaults.source.toLocaleLowerCase()}`} isExternalRoute={true}>
                {reviewLogo}
              </StandardLink>
            </span>
          </div>
          <div className="flex flex-row h-auto">
            <span className="grow">
              <Rating
                initialValue={propsWithDefaults.stars}
                readonly={true}
                SVGclassName={"inline-block"}
                size={16} />
            </span>
            <span className="items-end text-gray-600/30 dark:text-gray-300/30">{propsWithDefaults.date}</span>
          </div>
          <div>{propsWithDefaults.reviewText}</div>
          <div className="flex flex-row-reverse grow items-end">
            <StandardLink url={socialProfileUrl} target="_blank" isExternalRoute={true}>
              <div className="inline-flex items-center justify-left">
                <div>
                  Read more reviews on {propsWithDefaults.source}
                </div>
                <div className="pl-2">
                  <SvgArrowUpRightFromSquareSolid width={10} height={10} fill="currentColor" />
                </div>
              </div>
            </StandardLink>
          </div>
        </div>
      </RoundCornerContainer>
  );
};

export default TestamonialCard;
