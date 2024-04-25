import { ReactNode } from "react";
import { BaseContainerClassNames, BaseContainerProps, GetContainerClassNamesFromProps } from "./Container";

export interface ContentSectionProps extends BaseContainerProps {
  flexDirection?: "LTR" | "RTL" | "Center";
  children: ReactNode;
}

const defaultProps = {
  flexDirection: "LTR"
} satisfies Partial<ContentSectionProps>

const ContentSectionContainer = (props: ContentSectionProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  const classNames: BaseContainerClassNames = GetContainerClassNamesFromProps(props);
  const containerSectionClassNames: string = `content-section-${propsWithDefaults.flexDirection.toLowerCase()}`;

  return (
    <div id={props.id ? props.id : ""} className={`content-section-container ${classNames.containerClassNames} ${containerSectionClassNames}`}>
        {propsWithDefaults.children}
    </div>
  )
}

export default ContentSectionContainer