import { HashLink } from 'react-router-hash-link';

import { LinkProps } from "./LinkProps";
import React, { useContext } from 'react';
import { THEMES, ThemeContext } from '../../contexts/ThemeContext';

const DEFAULT_BUTTON_ICON_WIDTH: number = 16;
const DEFAULT_BUTTON_ICON_HEIGHT: number = 16;

const defaultProps = {
  url: "/",
  title: "Default Link Title",
  type: "button",
  target: "_self",
  prefixIconWidth: DEFAULT_BUTTON_ICON_WIDTH,
  prefixIconHeight: DEFAULT_BUTTON_ICON_HEIGHT,
  suffixIconWidth: DEFAULT_BUTTON_ICON_WIDTH,
  suffixIconHeight: DEFAULT_BUTTON_ICON_HEIGHT
} satisfies Partial<LinkProps>

const getButtonBody = (props: LinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  const { theme, } = useContext(ThemeContext);

  return (
    <>
      {propsWithDefaults.prefixIcon ? <div className="pr-2">{React.cloneElement(propsWithDefaults.prefixIcon, {
        width: propsWithDefaults.prefixIconWidth,
        height: propsWithDefaults.prefixIconHeight,
        className: "relative m-auto",
        fill: theme === THEMES.DARK ? 'dark' : 'white'
      })}</div> : ""}

      <span className="relative text-base font-semibold text-white dark:text-dark">{propsWithDefaults.title}</span>

      {propsWithDefaults.suffixIcon ? <div className="pl-2">{React.cloneElement(propsWithDefaults.suffixIcon, {
        width: propsWithDefaults.suffixIconWidth,
        height: propsWithDefaults.suffixIconHeight,
        className: "relative m-auto",
        fill: theme === THEMES.DARK ? 'dark' : 'white'
      })}</div> : ""}
    </>
  );
}

const ButtonLink = (props: LinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  return (
    <>
      {propsWithDefaults.type === "button" ?
        <HashLink to={propsWithDefaults.url} target={propsWithDefaults.target} smooth className="content-button">
          {getButtonBody(props)}
        </HashLink>
        :
        // If a "submit" or "reset", i.e. a form button ...
        <button type={propsWithDefaults.type} className="content-button">
          {getButtonBody(props)}
        </button>
      }
    </>
  )
}

export default ButtonLink
