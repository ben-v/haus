import { ButtonHTMLAttributes, ReactElement } from "react";
import { CommonLinkProps } from "./CommonLinkProps";
import { IconSize } from "../images/icons/IconConfig";

export interface ButtonLinkProps extends CommonLinkProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    
    //   prefixIconFill?: string,
    //   suffixIconFill?: string

    prefixIcon?: ReactElement,
    prefixIconSize?: IconSize,
    prefixIconFill?: string,

    suffixIcon?: ReactElement,
    suffixIconSize?: IconSize,
    suffixIconFill?: string
}