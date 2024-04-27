import PageHeader, { PageHeaderProps, defaultPageHeaderProps } from "../layouts/PageHeader"
import ContentSectionContainer from "./ContentSectionContainer";
import { BaseProps } from "../BaseProps";

export interface PageContainerProps extends BaseProps, PageHeaderProps {
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
        <ContentSectionContainer>
          {propsWithDefaults.children}
        </ContentSectionContainer>
      </div>
    </section>
  )
}

export default PageContainer