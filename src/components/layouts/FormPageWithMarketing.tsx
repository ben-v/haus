import { ReactElement } from "react";

import PageContainer from "../../components/layouts/PageContainer"
import PageHeader from "../../components/layouts/PageHeader"
import ContentBackground from "../../components/effects/ContentBackground"
import ContentSection from "../../components/layouts/ContentSection";

export interface FormPageWithMarketing {
    id: string,
    titlePartA: string,
    titlePartB?: string,
    description?: string,
    formCard: ReactElement,
    marketingCards?: ReactElement,
}

const FormPageWithMarketing = (props: FormPageWithMarketing) => {
  const colsClassNames: string = props.marketingCards ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <PageContainer id={props.id}>
      <PageHeader
        titlePartA={props.titlePartA}
        titlePartB={props.titlePartB}
        description={props.description} />
      <ContentSection>
        <div className={`relative grid gap-4 md:gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max ${colsClassNames}`}>
          <ContentBackground />
          {props.formCard}
          {props.marketingCards ? <div className="flex flex-col gap-4 md:gap-12">{props.marketingCards}</div> : "" }
        </div>
      </ContentSection>
    </PageContainer>
  )
}

export default FormPageWithMarketing