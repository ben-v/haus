import { HTMLAttributeAnchorTarget, ReactElement } from "react";
import { IconSize } from '../images/icons/IconConfig';

export interface LinkProps {
    title: string,
    url?: string,
    type?: "submit" | "reset" | "button" | "link" ,
    target?: HTMLAttributeAnchorTarget,

    prefixIcon?: ReactElement,
    prefixIconSize?: IconSize,
    prefixIconFill?: string,

    suffixIcon?: ReactElement,
    suffixIconSize?: IconSize,
    suffixIconFill?: string
}