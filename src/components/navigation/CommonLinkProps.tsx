import { ReactElement, ReactNode, cloneElement } from "react";
import { ICON_SIZES, IconSize } from "../images/icons/IconConfig";

export const defaultProps = {
  size: "Medium",
  prefixIconSize: ICON_SIZES.sm,
  suffixIconSize: ICON_SIZES.sm,
  prefixIconFill: "white",
  suffixIconFill: "white"
} satisfies Partial<CommonLinkProps>

export const getButtonBody = (props: CommonLinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  return (
    <>
      {propsWithDefaults.prefixIcon ? cloneElement(propsWithDefaults.prefixIcon, {
        width: propsWithDefaults.prefixIconSize.width,
        height: propsWithDefaults.prefixIconSize.height,
        className: "button-icon-prefix",
        fill: propsWithDefaults.prefixIconFill
      }) : ""}

      <span>{propsWithDefaults.children}</span>

      {propsWithDefaults.suffixIcon ? cloneElement(propsWithDefaults.suffixIcon, {
        width: propsWithDefaults.suffixIconSize.width,
        height: propsWithDefaults.suffixIconSize.height,
        className: "button-icon-suffix",
        fill: propsWithDefaults.suffixIconFill
      }) : ""}
    </>
  );
}

export interface CommonLinkProps {
  children: ReactNode,

  size?: "Small" | "Medium" | "Large",

  prefixIcon?: ReactElement,
  prefixIconSize?: IconSize,
  prefixIconFill?: string,

  suffixIcon?: ReactElement,
  suffixIconSize?: IconSize,
  suffixIconFill?: string
}