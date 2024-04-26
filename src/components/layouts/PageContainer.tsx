import { ReactNode } from "react";

import PageHeader, { PageHeaderProps, defaultPageHeaderProps } from "./PageHeader"
import ContentSectionContainer from "../containers/ContentSectionContainer";

export interface PageContainerProps extends PageHeaderProps {
  id: string,
  children: ReactNode,
  showContentBackground?: boolean
}

const PageContainer = (props: PageContainerProps) => {
  const propsWithDefaults = {
    ...defaultPageHeaderProps,
    ...props
  }

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
        <ContentSectionContainer>
          {propsWithDefaults.children}
        </ContentSectionContainer>
      </div>
    </section>
  )
}

export default PageContainer