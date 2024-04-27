import { HTMLAttributeAnchorTarget, ReactElement } from "react";

export interface LinkProps {
    title: string,
    url: string,
    target?: HTMLAttributeAnchorTarget,
    prefixIcon?: ReactElement,
    prefixIconWidth?: number,
    prefixIconHeight?: number,
    suffixIcon?: ReactElement,
    suffixIconWidth?: number,
    suffixIconHeight?: number,
}