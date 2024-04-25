import { ReactNode } from "react";

export interface ContentSectionProps {
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

  const containerSectionClassNames: string = `content-section-${propsWithDefaults.flexDirection.toLowerCase()}`;
  
  return (
    <div className={`content-section-container ${containerSectionClassNames}`}>
      {propsWithDefaults.children}
    </div>
  )
}

export default ContentSectionContainer