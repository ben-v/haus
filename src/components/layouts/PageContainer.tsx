import { ReactElement } from "react";

// import PageContainer from "../../components/layouts/PageContainer"
import PageHeader, { PageHeaderProps, defaultPageHeaderProps } from "./PageHeader"
import ContentBackground from "../effects/ContentBackground"
import ContentSection from "./ContentSection";

export interface PageContainerProps extends PageHeaderProps {
    id: string,
    width?: "Wide" | "Standard";
    columnA: ReactElement,
    columnB?: ReactElement,
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

  const widthClassName: string = (props.width && (props.width === "Wide")) ? "page-wide-width" : "page-standard-width";
  const colsClassNames: string = propsWithDefaults.columnB ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <section id={propsWithDefaults.id} className="page-container">
      <div className={widthClassName}>
      <PageHeader
        titlePartA={propsWithDefaults.titlePartA}
        titlePartB={propsWithDefaults.titlePartB}
        description={propsWithDefaults.description}
        highlightType={propsWithDefaults.highlightType}
        highlightPart={propsWithDefaults.highlightPart}
        titleAlignment={propsWithDefaults.titleAlignment}
        descriptionAlignment={propsWithDefaults.descriptionAlignment}
        />
      <ContentSection>
        <div className={`relative grid gap-4 md:gap-6 sm:mx-auto sm:max-w-lg md:max-w-max ${colsClassNames}`}>
          {propsWithDefaults.showContentBackground ? <ContentBackground /> : ""}
          {propsWithDefaults.columnA}
          {propsWithDefaults.columnB ? <div className="flex flex-col gap-4 md:gap-6">{propsWithDefaults.columnB}</div> : "" }
        </div>
      </ContentSection>
      </div>
    </section>
  )
}

export default PageContainer