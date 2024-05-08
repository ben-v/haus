import { AnchorHTMLAttributes } from "react";
import { CommonLinkProps } from "./CommonLinkProps";

export interface NavLinkProps extends CommonLinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
    url?: string,
    isExternalRoute?: boolean
}

export interface NavLinkGroup {
    title?: string;
    links: NavLinkProps[];
}