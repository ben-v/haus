import { HashLink } from 'react-router-hash-link';

import { LinkProps } from "./LinkProps";
import React, { useContext } from 'react';
import { THEMES, ThemeContext } from '../../contexts/ThemeContext';

const DEFAULT_BUTTON_ICON_WIDTH: number = 16;
const DEFAULT_BUTTON_ICON_HEIGHT: number = 16;

const defaultProps = {
  url: "/",
  title: "Default Link Title",
  prefixIconWidth: DEFAULT_BUTTON_ICON_WIDTH,
  prefixIconHeight: DEFAULT_BUTTON_ICON_HEIGHT,
  suffixIconWidth: DEFAULT_BUTTON_ICON_WIDTH,
  suffixIconHeight: DEFAULT_BUTTON_ICON_HEIGHT
} satisfies Partial<LinkProps>

const ButtonLink = (props: LinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  const { theme, } = useContext(ThemeContext);
  return (
    <HashLink to={propsWithDefaults.url} target={propsWithDefaults.target} smooth className="relative mb-6 flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
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
    </HashLink>
  )
}

export default ButtonLink
