import type { SVGProps } from "react";

const SvgReviewAvatarTemplate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 500 500"
    {...props}
  >

<g>
          <circle fill={props.fill} cx="50%" cy="50%" r="245"></circle>
          <text
            x="50%"
            y="50%"
            fontSize="20em"
            fontWeight="Bold"
            dy="0.4em"
            text-anchor="middle"
            fill={props.color}
          >
            {props.values}
          </text>
        </g>

    <g>
      {/* <circle cx="500" cy="500" r="250" fill="#07485E" /> */}
      {/* <text fill="#E1EBF0" x="200" y="200" font-size="120" text-anchor="middle" alignment-baseline="central">{props.values}</text> */}
    </g>
  </svg>
);
export default SvgReviewAvatarTemplate;

