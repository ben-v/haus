import { ReactNode } from "react";

export interface ContentSectionProps {
    children: ReactNode;
  }
  
const ContentSection = (props: ContentSectionProps) => {
  return (
      <div className="relative flex flex-col gap-16">
        {props.children}
      </div>
  )
}

export default ContentSection