import PageHeader, { PageHeaderProps, defaultPageHeaderProps } from "../layouts/PageHeader"
import ContentSectionContainer from "./ContentSectionContainer";
import { PropsBase } from "../PropsBase";

export interface PageContainerProps extends PropsBase, PageHeaderProps {
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
          titleAlignment={propsWithDefaults.titleAlignment}
          descriptionAlignment={propsWithDefaults.descriptionAlignment} />
        <ContentSectionContainer containerClassNames="min-h-[48px]">
          {propsWithDefaults.children}
        </ContentSectionContainer>
      </div>
    </section>
  )
}

export default PageContainer