import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { LinkProps } from "./LinkProps";
import { ICON_SIZES } from '../images/icons/IconConfig';

export interface ButtonLinkProps extends LinkProps {
  size?: "Small" | "Medium" | "Large",
  prefixIconFill?: string,
  suffixIconFill?: string
}
const defaultProps = {
  size: "Medium",
  url: "/",
  title: "Default Link Title",
  type: "link",
  target: "_self",
  prefixIconSize: ICON_SIZES.sm,
  suffixIconSize: ICON_SIZES.sm,
  prefixIconFill: "white",
  suffixIconFill: "white"
} satisfies Partial<ButtonLinkProps>

const getButtonBody = (props: ButtonLinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  return (
    <>
      {propsWithDefaults.prefixIcon ? React.cloneElement(propsWithDefaults.prefixIcon, {
        width: propsWithDefaults.prefixIconSize.width,
        height: propsWithDefaults.prefixIconSize.height,
        className: "button-icon-prefix",
        fill: propsWithDefaults.prefixIconFill
      }) : ""}

      <span>{propsWithDefaults.title}</span>

      {propsWithDefaults.suffixIcon ? React.cloneElement(propsWithDefaults.suffixIcon, {
        width: propsWithDefaults.suffixIconSize.width,
        height: propsWithDefaults.suffixIconSize.height,
        className: "button-icon-suffix",
        fill: propsWithDefaults.suffixIconFill
      }) : ""}
    </>
  );
}

const ButtonLink = (props: ButtonLinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }
  const buttonClassName: string = `button-${defaultProps.size.toLowerCase()}`;

  return (
    <>
      {propsWithDefaults.type === "link" ?
        <HashLink to={propsWithDefaults.url} target={propsWithDefaults.target} smooth className={buttonClassName}>
          {getButtonBody(props)}
        </HashLink>
        :
        <button type={propsWithDefaults.type} className={buttonClassName}>
          {getButtonBody(props)}
        </button>
      }
    </>
  )
}

export default ButtonLink
