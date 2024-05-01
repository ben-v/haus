import { useContext } from 'react';

import { Rating } from 'react-simple-star-rating';

import resolveConfig from 'tailwindcss/resolveConfig';
import { THEMES, ThemeContext } from "../../contexts/ThemeContext";

import RoundCornerContainer from '../containers/RoundCornerContainer';
import SvgReviewAvatarTemplate from '../images/SvgReviewAvatarTemplate';
import SvgArrowUpRightFromSquareSolid from '../images/SvgArrowUpRightFromSquareSolid';
import withMaterialTailwind from '../../../tailwind.config';
import { Config } from 'tailwindcss';
import { ICON_SIZES } from '../images/icons/IconConfig';
import SocialProfileLink, { SocialPlatforms } from '../navigation/SocialProfileLink';

export interface TestamonialCardProps {
  reviewerName: string;
  reviewText: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source: SocialPlatforms;
  date: string;
  padding?: "Large" | "Small"
  grow?: "Fill" | "Shrink";
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
            <SocialProfileLink platform={propsWithDefaults.source} size={ICON_SIZES.md} />
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
          <SocialProfileLink platform={propsWithDefaults.source} type={"DisplayChildren"} size={ICON_SIZES.md}>
            <div className="inline-flex items-center justify-left">
              <div>
                Read more reviews on {propsWithDefaults.source}
              </div>
              <div className="pl-2">
                <SvgArrowUpRightFromSquareSolid width={ICON_SIZES['2xs'].width} height={ICON_SIZES['2xs'].height} fill="currentColor" />
              </div>
            </div>
          </SocialProfileLink>
        </div>
      </div>
    </RoundCornerContainer>
  );
};

export default TestamonialCard;
