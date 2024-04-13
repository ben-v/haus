import type { SVGProps } from "react";
const SvgMapLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={64}
    viewBox="0 0 39 48"
    {...props}
  >
    <defs>
      <clipPath id="map-location-icon_svg__a">
        <path d="M2.375 33h34.531v11.863H2.375Zm0 0" />
      </clipPath>
      <clipPath id="map-location-icon_svg__b">
        <path d="M5 2.25h28V41H5Zm0 0" />
      </clipPath>
    </defs>
    <path
      fill="#1976d2"
      d="M22.668 34.473c7.434.425 13.039 2.34 13.039 4.629 0 2.605-7.254 4.718-16.207 4.718S3.29 41.707 3.29 39.102c0-2.266 5.476-4.157 12.78-4.614 1.328 2.114 2.504 4 3.285 5.403.805-1.453 1.989-3.332 3.313-5.418m0 0"
    />
    <path
      fill="#ffb300"
      d="M19.355 3.18c7.012 0 12.7 5.687 12.7 12.703 0 3.96-5.352 12.23-9.387 18.59-1.324 2.086-2.508 3.965-3.313 5.418-.78-1.403-1.957-3.29-3.285-5.403-4.015-6.39-9.418-14.886-9.418-18.605 0-7.016 5.688-12.703 12.703-12.703m5.676 12.222a5.69 5.69 0 0 0-5.676-5.675 5.686 5.686 0 0 0-5.675 5.675 5.683 5.683 0 0 0 5.675 5.676 5.686 5.686 0 0 0 5.676-5.676m0 0"
    />
    <g clipPath="url(#map-location-icon_svg__a)">
      <path d="M19.5 44.738c-4.414 0-8.574-.504-11.719-1.422-3.535-1.027-5.406-2.484-5.406-4.214 0-3.446 7.348-5.133 13.637-5.528a.915.915 0 0 1 .972.856.92.92 0 0 1-.859.972c-3.48.22-6.633.778-8.875 1.578-2.246.801-3.043 1.645-3.043 2.122 0 .472.86 1.52 4.086 2.457 2.98.87 6.96 1.347 11.207 1.347 4.242 0 8.223-.476 11.203-1.347 3.227-.938 4.086-1.985 4.086-2.457 0-1.23-4.336-3.266-12.176-3.715a.91.91 0 0 1-.86-.969.91.91 0 0 1 .966-.86c6.414.368 13.902 2.044 13.902 5.544 0 1.73-1.867 3.187-5.406 4.214-3.14.918-7.3 1.422-11.715 1.422m0 0" />
    </g>
    <g clipPath="url(#map-location-icon_svg__b)">
      <path d="M19.355 40.809a.91.91 0 0 1-.8-.473c-.758-1.363-1.926-3.234-3.262-5.363l-.309-.493c-4.12-6.554-9.25-14.71-9.25-18.597 0-7.508 6.11-13.617 13.621-13.617 7.508 0 13.618 6.109 13.618 13.617 0 4.082-4.828 11.676-9.086 18.379l-.446.703c-1.328 2.086-2.488 3.93-3.285 5.37a.92.92 0 0 1-.8.474m0-36.715c-6.5 0-11.789 5.289-11.789 11.789 0 3.36 5.184 11.605 8.97 17.625l.308.492a208 208 0 0 1 2.511 4.063 182 182 0 0 1 2.54-4.083l.445-.699c3.715-5.843 8.8-13.847 8.8-17.398 0-6.5-5.288-11.79-11.785-11.79m0 0" />
    </g>
    <path d="M19.355 21.996a6.6 6.6 0 0 1-6.593-6.594c0-3.632 2.957-6.59 6.593-6.59a6.6 6.6 0 0 1 6.59 6.59c0 3.637-2.957 6.594-6.59 6.594m0-11.355a4.77 4.77 0 0 0-4.761 4.761 4.77 4.77 0 0 0 4.761 4.762 4.765 4.765 0 0 0 4.758-4.762 4.765 4.765 0 0 0-4.758-4.761m0 0" />
  </svg>
);
export default SvgMapLocation;

