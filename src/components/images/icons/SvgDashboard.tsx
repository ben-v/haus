import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 375 375"
    {...props}
  >
    <defs>
      <clipPath id="dashboard_svg__a">
        <path d="M5.355 9H181v298H5.355Zm0 0" />
      </clipPath>
      <clipPath id="dashboard_svg__b">
        <path d="M73 189h296.855v177H73Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#dashboard_svg__a)">
      <path
        fill="#004aad"
        d="M159.938 9.82H26.028c-11.352 0-20.673 9.297-20.673 20.688v255.05c0 11.387 9.32 20.68 20.672 20.68h133.907c11.382 0 20.66-9.293 20.66-20.68V30.509c0-11.39-9.274-20.688-20.656-20.688m0 0"
      />
    </g>
    <path
      fill="#e8f2f4"
      d="M17.063 54.64H168.89v206.79H17.063ZM102.852 32.246a9.844 9.844 0 0 1-9.88 9.863 9.854 9.854 0 0 1-9.867-9.863c0-5.45 4.418-9.898 9.868-9.898 5.48.004 9.879 4.453 9.879 9.898M112.734 283.828c0-3.875-3.175-7.058-7.054-7.058H80.27c-3.883 0-7.055 3.18-7.055 7.058 0 3.883 3.172 7.063 7.055 7.063h25.41c3.879 0 7.054-3.18 7.054-7.063m0 0"
    />
    <path
      fill="#004aad"
      d="M125.04 154.367c-8.208 8.196-19.544 13.258-32.063 13.258-25.024 0-45.325-20.3-45.325-45.324 0-18.899 11.559-35.094 27.996-41.89l17.329 41.89Zm0 0"
    />
    <path
      fill="#7cc644"
      d="M138.32 122.29H92.984V76.956c25.032 0 45.336 20.3 45.336 45.332m0 0"
    />
    <path
      fill="#e8f2f4"
      d="M138.32 122.29c0 12.522-5.07 23.85-13.28 32.065L92.98 122.29Zm0 0"
    />
    <path
      fill="#6fa4dc"
      d="M92.977 76.957v45.344L75.648 80.41c5.332-2.235 11.2-3.454 17.329-3.454M27.031 189.941h36.211v7.243h-36.21ZM27.031 204.426h18.106v7.242H27.03Zm0 0"
    />
    <path fill="#7cc644" d="M27.031 175.457h7.239v7.242H27.03Zm0 0" />
    <path fill="#6fa4dc" d="M41.516 175.457h7.242v7.242h-7.242Zm0 0" />
    <path
      fill="#004aad"
      d="M56 175.457h7.238v7.242H56ZM126.992 132.727h22.668v7.242h-22.668Zm0 0"
    />
    <path fill="#6fa4dc" d="M199.34 76.957h125.488v62.746H199.34Zm0 0" />
    <path fill="#e8f2f4" d="M209.797 87.414H314.37v20.914H209.797Zm0 0" />
    <path fill="#004aad" d="M209.797 118.785h31.371v10.461h-31.371Zm0 0" />
    <path fill="#7cc644" d="M251.625 118.785h31.371v10.461h-31.371Zm0 0" />
    <g clipPath="url(#dashboard_svg__b)">
      <path
        fill="#004aad"
        d="M73.215 210.598v133.914c0 11.355 9.293 20.668 20.687 20.668h255.051c11.387 0 20.68-9.313 20.68-20.668V210.598c0-11.38-9.293-20.653-20.68-20.653H93.903c-11.391-.004-20.688 9.274-20.688 20.653m0 0"
      />
    </g>
    <path
      fill="#e8f2f4"
      d="M118.035 201.645h206.797v151.832H118.035ZM95.645 267.68a9.847 9.847 0 0 1 9.863 9.879c0 5.453-4.399 9.875-9.863 9.875-5.45 0-9.899-4.422-9.899-9.875-.004-5.477 4.45-9.88 9.899-9.88M347.227 257.8c-3.875 0-7.059 3.177-7.059 7.06v25.41c0 3.875 3.18 7.054 7.059 7.054s7.058-3.176 7.058-7.054v-25.41c-.004-3.883-3.18-7.06-7.058-7.06m0 0"
    />
    <path
      fill="#6fa4dc"
      d="m304.492 243.738-9.805 4.473-9.785 20.703-9.797 1.836-9.808 10.629-9.774-4.7-11.406-9.808-8.207 13.3-9.8 6.876-9.805-8.488-9.778 7.39-9.804 3.344-9.801 20.336-9.781 6.203-9.805-9.906-9.8-4.43-9.806 18.781-9.804-4.062-9.778 9.164-10.113 1.476v26.493l206.793.129V219.98l-10.531 6.118Zm0 0"
    />
    <path
      fill="#e8f2f4"
      d="m304.492 293.746-9.805 2.45-9.785 11.241-9.797 1.024-9.808 7.441-9.774-4.207-11.406-8.687-8.207 10.59-9.8 3.746-9.805-4.664-9.778 4.03-9.804 1.833-9.801 11.062-9.781 5.051-9.805-7.054-9.8-2.422-9.806 10.226-9.804-2.21-9.778 5.8-10.113 1.672v12.742l206.793.067v-72.688l-10.531 4.184Zm0 0"
    />
    <path
      fill="#7cc644"
      d="m304.492 317.871-9.805 1.426-9.785 6.71-9.797.602-9.808 4.485-9.774-2.543-11.406-5.176-8.207 6.328-9.8 2.219-9.805-2.77-9.778 2.41-9.804 1.102-9.801 6.566-9.781 3.036-9.805-4.235-9.8-1.437-9.806 6.101-9.804-1.343-9.778 3.515-10.113.965v7.594l206.793.05v-43.374l-10.531 2.496Zm0 0"
    />
    <path
      fill="#004aad"
      d="M131.383 214.992h52.308v36.211h-52.308ZM163.297 251.203l-5.762 9.98-5.765-9.98Zm0 0"
    />
    <path
      fill="#6fa4dc"
      d="M190.934 214.992h52.312v7.242h-52.312ZM190.934 229.473h52.312v7.242h-52.312ZM190.934 243.96h26.156v7.243h-26.156Zm0 0"
    />
  </svg>
);
export default SvgDashboard;

