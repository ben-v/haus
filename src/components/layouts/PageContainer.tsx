import { ReactNode } from "react";

import PageHeader, { PageHeaderProps, defaultPageHeaderProps } from "./PageHeader"
import ContentBackground from "../effects/ContentBackground"
import ContentSectionContainer from "../containers/ContentSectionContainer";

export interface PageContainerProps extends PageHeaderProps {
  id: string,
  // width?: "Wide" | "Standard";
  children: ReactNode,
  // columnA: ReactElement,
  // columnB?: ReactElement,
  showContentBackground?: boolean
}

const defaultProps = {
  showContentBackground: true
} satisfies Partial<PageContainerProps>


const PageContainer = (props: PageContainerProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...defaultPageHeaderProps,
    ...props
  }

  // const widthClassName: string = (props.width && (props.width === "Wide")) ? "page-wide-width" : "page-standard-width";

  return (
    <section id={propsWithDefaults.id} className="page-container">
      <div className="page-container-width">
        <PageHeader
          titlePartA={propsWithDefaults.titlePartA}
          titlePartB={propsWithDefaults.titlePartB}
          description={propsWithDefaults.description}
          highlightType={propsWithDefaults.highlightType}
          highlightPart={propsWithDefaults.highlightPart}
          titleAlignment={propsWithDefaults.titleAlignment}
          descriptionAlignment={propsWithDefaults.descriptionAlignment} />
        {propsWithDefaults.showContentBackground ? <ContentBackground /> : ""}
        <ContentSectionContainer>
          {propsWithDefaults.children}
        </ContentSectionContainer>
      </div>
    </section>
  )
}

export default PageContainer