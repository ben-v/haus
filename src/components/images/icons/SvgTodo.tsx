import type { SVGProps } from "react";
const SvgTodo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 375 375"
    {...props}
  >
    <defs>
      <clipPath id="todo_svg__a">
        <path d="M9 74.531h353V289H9Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__b">
        <path d="M0 255h45v45.281H0Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__c">
        <path d="M51 107h20v20H51Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__d">
        <path d="m51.766 107.41 18.73.922-.926 18.73-18.726-.925Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__e">
        <path d="M61.133 107.871a9.38 9.38 0 0 0-9.828 8.902c-.254 5.172 3.73 9.57 8.902 9.825 5.172.257 9.57-3.73 9.824-8.903.258-5.168-3.73-9.57-8.898-9.824m0 0" />
      </clipPath>
      <clipPath id="todo_svg__f">
        <path d="M51 139h19v19H51Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__g">
        <path d="m51.46 138.773 18.74.618-.618 18.742-18.738-.617Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__h">
        <path d="M60.832 139.082a9.38 9.38 0 0 0-9.68 9.063c-.172 5.175 3.887 9.507 9.063 9.68 5.172.167 9.508-3.887 9.676-9.063.171-5.176-3.887-9.508-9.059-9.68m0 0" />
      </clipPath>
      <clipPath id="todo_svg__i">
        <path d="M51 169h19v20H51Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__j">
        <path d="m51.2 169.492 18.745.356-.355 18.746-18.746-.356Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__k">
        <path d="M60.574 169.672c-5.18-.102-9.453 4.016-9.55 9.195-.102 5.176 4.015 9.453 9.195 9.551 5.176.098 9.453-4.02 9.55-9.195a9.373 9.373 0 0 0-9.195-9.551m0 0" />
      </clipPath>
      <clipPath id="todo_svg__l">
        <path d="M50.844 199.54h18.75v18.75h-18.75Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__m">
        <path d="M60.219 199.54a9.375 9.375 0 1 0 0 18.75 9.37 9.37 0 0 0 9.375-9.376 9.375 9.375 0 0 0-9.375-9.375m0 0" />
      </clipPath>
      <clipPath id="todo_svg__n">
        <path d="M51 232h19v19H51Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__o">
        <path d="m50.844 232.406 18.734-.734.734 18.738-18.734.73Zm0 0" />
      </clipPath>
      <clipPath id="todo_svg__p">
        <path d="M60.21 232.04c-5.17.202-9.202 4.562-9 9.733.204 5.176 4.563 9.204 9.735 9.004 5.176-.203 9.203-4.562 9-9.738-.203-5.172-4.558-9.203-9.734-9m0 0" />
      </clipPath>
    </defs>
    <path
      fill="#f24c3d"
      d="M316.73 103.121 51.41 89.953c-13.945-.695-25.531 10.317-25.12 23.883l4.05 137.125c.398 13.36 12.281 23.652 25.988 22.492L283.2 254.207c9.606-.812 17.774-7.164 20.711-16.09l34.383-104.703c4.77-14.535-5.902-29.512-21.563-30.293m0 0"
    />
    <g clipPath="url(#todo_svg__a)">
      <path
        fill="#f24c3d"
        d="M361.066 112.05h-3.515c1.176 4.493 1.066 9.274-.395 13.864l-38.281 119.824c-3.07 9.598-11.523 16.367-21.574 17.23L44.73 285.005c-2.684.226-5.325.047-7.868-.55l-2.781 2.776c2.7.84 5.527 1.282 8.418 1.282.852 0 1.691-.035 2.543-.117l252.57-22.024a28.25 28.25 0 0 0 24.524-19.605l38.281-119.825c1.559-4.91 1.762-10.027.648-14.89M38.004 78.356c.445 0 .875.012 1.32.036l295.36 15.086c2.671.144 5.238.683 7.66 1.605v-3.629a28.6 28.6 0 0 0-7.48-1.39L39.491 74.977a28.5 28.5 0 0 0-21.265 8.039c-5.622 5.511-8.73 13.18-8.512 21.054l4.52 156.934a27.6 27.6 0 0 0 .874 6.23l2.88-2.879a23 23 0 0 1-.337-3.449l-4.52-156.933c-.202-7.035 2.458-13.602 7.481-18.512 4.727-4.613 10.856-7.106 17.39-7.106m0 0"
      />
    </g>
    <path
      fill="#f29727"
      d="M358.32 103.11c5.946-.012 11.703-.54 16.594-1.618-4.746-1.594-10.418-2.719-16.332-3.367 2.328-2.637 4.281-5.426 5.613-8.16-2.855 1.031-5.84 2.683-8.707 4.722-.011-5.945-.539-11.695-1.617-16.585-1.598 4.746-2.723 10.414-3.371 16.32-2.64-2.324-5.434-4.277-8.168-5.606 1.031 2.852 2.676 5.836 4.715 8.7-5.95.011-11.707.539-16.586 1.617 4.75 1.594 10.41 2.73 16.32 3.367-2.324 2.637-4.281 5.414-5.601 8.148 2.855-1.03 5.843-2.671 8.707-4.71.011 5.945.539 11.695 1.62 16.57 1.595-4.742 2.735-10.41 3.368-16.317 2.64 2.325 5.434 4.278 8.156 5.606-1.031-2.828-2.676-5.813-4.71-8.688m0 0"
    />
    <g clipPath="url(#todo_svg__b)">
      <path
        fill="#f29727"
        d="M28.074 280.246c5.926-.586 11.598-1.68 16.371-3.223-4.882-1.128-10.64-1.703-16.586-1.773 2.063-2.852 3.743-5.812 4.797-8.664-2.746 1.305-5.554 3.234-8.215 5.535-.59-5.918-1.68-11.586-3.226-16.355-1.13 4.875-1.703 10.629-1.774 16.558-2.855-2.058-5.816-3.738-8.671-4.793 1.293 2.746 3.226 5.551 5.527 8.196-5.91.59-11.598 1.668-16.356 3.226 4.88 1.125 10.625 1.711 16.57 1.774-2.062 2.851-3.726 5.808-4.784 8.648 2.75-1.293 5.554-3.223 8.203-5.523.59 5.906 1.668 11.586 3.226 16.343 1.13-4.875 1.715-10.629 1.778-16.57 2.851 2.063 5.816 3.727 8.656 4.793-1.281-2.707-3.203-5.512-5.516-8.172m0 0"
      />
    </g>
    <g clipPath="url(#todo_svg__c)">
      <g clipPath="url(#todo_svg__d)">
        <g clipPath="url(#todo_svg__e)">
          <path
            fill="#fff"
            d="m51.766 107.41 18.73.922-.926 18.73-18.726-.925Zm0 0"
          />
        </g>
      </g>
    </g>
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={6.75}
      d="m79.734 118.926 227.797 9.734"
    />
    <g clipPath="url(#todo_svg__f)">
      <g clipPath="url(#todo_svg__g)">
        <g clipPath="url(#todo_svg__h)">
          <path
            fill="#fff"
            d="m51.46 138.773 18.74.618-.618 18.742-18.738-.617Zm0 0"
          />
        </g>
      </g>
    </g>
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={6.75}
      d="m79.633 149.082 220.383 7.258"
    />
    <g clipPath="url(#todo_svg__i)">
      <g clipPath="url(#todo_svg__j)">
        <g clipPath="url(#todo_svg__k)">
          <path
            fill="#fff"
            d="m51.2 169.492 18.745.356-.355 18.746-18.746-.356Zm0 0"
          />
        </g>
      </g>
    </g>
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={6.75}
      d="m79.516 179.406 212.96 4.043"
    />
    <g clipPath="url(#todo_svg__l)">
      <g clipPath="url(#todo_svg__m)">
        <path fill="#fff" d="M50.844 199.54h18.75v18.75h-18.75Zm0 0" />
      </g>
    </g>
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={6.75}
      d="M79.34 208.914h205.527"
    />
    <g clipPath="url(#todo_svg__n)">
      <g clipPath="url(#todo_svg__o)">
        <g clipPath="url(#todo_svg__p)">
          <path
            fill="#fff"
            d="m50.844 232.406 18.734-.734.734 18.738-18.734.73Zm0 0"
          />
        </g>
      </g>
    </g>
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={6.75}
      d="m79.687 240.66 197.852-7.754"
    />
  </svg>
);
export default SvgTodo;
