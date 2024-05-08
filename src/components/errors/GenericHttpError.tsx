import PageContainer from '../containers/PageContainer'
import ContentSectionContainer from '../containers/ContentSectionContainer'
import GenericContentContainer from '../containers/GenericContentContainer'
import SvgPersonOopsSign from '../images/stick-figures/SvgPersonOopsSign'
import CardHeader from '../layouts/CardHeader'
import NavLink from '../navigation/NavLink'

export interface GenericHttpErrorProps {
  title: string,
  description: string,
  actionUrl?: string,
  actionTitle?: string
}

const defaultProps = {
  actionUrl: "/",
  actionTitle: "Go back home"
} satisfies Partial<GenericHttpErrorProps>

const GenericHttpError = (props: GenericHttpErrorProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  return (
    <PageContainer id="error-page-container">
      <div className="w-auto md:w-4/5 md:max-w-2xl md:pt-0">
        <ContentSectionContainer flexDirection="Center">
          <GenericContentContainer id="error-sign" padding="None">
            <SvgPersonOopsSign className="w-auto" />
          </GenericContentContainer>
        </ContentSectionContainer>
      </div>
      <ContentSectionContainer flexDirection="Center">
        <CardHeader childrenAlignment="Left">
          <h1 className="mb-14 mt-12 text-4xl font-bold text-gray-700 dark:text-white md:text-5xl">A "{propsWithDefaults.title}" Error Occurred</h1>
          <h2 className="mb-14 mt-12 text-2xl font-bold text-gray-700 dark:text-white md:text-5xl">{propsWithDefaults.description}</h2>
        </CardHeader>
        <div className='w-full md:w-1/2'>
          <NavLink url={propsWithDefaults.actionUrl}>{propsWithDefaults.actionTitle}</NavLink>
        </div>
      </ContentSectionContainer>
    </PageContainer >
  )
}

export default GenericHttpError
