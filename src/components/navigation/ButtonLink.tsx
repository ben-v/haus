import React from 'react';

import { ICON_SIZES } from '../images/icons/IconConfig';
import { Link } from 'react-router-dom';
import { ButtonNavLinkProps } from './NavLinkProps';

export interface ButtonLinkProps extends ButtonNavLinkProps {
  size?: "Small" | "Medium" | "Large",
  prefixIconFill?: string,
  suffixIconFill?: string
}

const defaultProps = {
  size: "Medium",
  type: "link",
  isExternalRoute: false,
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

      <span>{propsWithDefaults.children}</span>

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
  const buttonClassName: string = `${propsWithDefaults.className} button-${defaultProps.size.toLowerCase()}`;

  return (
    <>
      {propsWithDefaults.type === "link" ?
        <>
          {
            propsWithDefaults.isExternalRoute ?
              <a href={propsWithDefaults.url} target={propsWithDefaults.target} className={buttonClassName}>
                {getButtonBody(props)}
              </a>
              :
              <Link to={propsWithDefaults.url ? propsWithDefaults.url : ""} target={propsWithDefaults.target} className={buttonClassName}>
                {getButtonBody(props)}
              </Link>
          }
        </>
        :
        <button type={propsWithDefaults.type} className={buttonClassName}>
          {getButtonBody(props)}
        </button>
      }
    </>
  )
}

export default ButtonLink
