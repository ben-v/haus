import { AnchorHTMLAttributes, ReactElement, ReactNode } from "react";
import { IconSize } from '../images/icons/IconConfig';

export interface NavLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    url?: string,
    children: ReactNode,
    isExternalRoute?: boolean
}

export interface ButtonNavLinkProps extends NavLinkProps {
    type?: "submit" | "reset" | "button" | "link" ,

    prefixIcon?: ReactElement,
    prefixIconSize?: IconSize,
    prefixIconFill?: string,

    suffixIcon?: ReactElement,
    suffixIconSize?: IconSize,
    suffixIconFill?: string
}

export interface NavLinkGroup {
    title?: string;
    links: NavLinkProps[];
}