import type { SVGProps } from "react";
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={252}
    height={183}
    viewBox="0 0 189 137.25"
    {...props}
  >
    <defs>
      <clipPath id="right-arrow_svg__a">
        <path d="M.512 1h187.972v135H.512Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#right-arrow_svg__a)">
      <path d="M13.996 81.5h120.52a3.353 3.353 0 0 1 2.37 5.727l-25.038 25.035a13.32 13.32 0 0 0-3.93 9.484c0 3.582 1.394 6.95 3.93 9.484 5.066 5.075 13.906 5.075 18.972 0l53.668-53.66a13.3 13.3 0 0 0 3.934-9.484 13.32 13.32 0 0 0-3.934-9.488L130.82 4.934c-5.066-5.067-13.906-5.067-18.972 0a13.33 13.33 0 0 0-3.93 9.488c0 3.586 1.394 6.953 3.93 9.488l25.039 25.035a3.352 3.352 0 0 1-2.371 5.723H13.996c-7.398 0-13.418 6.02-13.418 13.418S6.598 81.5 13.996 81.5m0 0" />
    </g>
  </svg>
);
export default SvgRightArrow;

