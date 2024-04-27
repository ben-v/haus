import { HashLink } from 'react-router-hash-link'

import PageContainer from '../layouts/PageContainer'
import ContentSectionContainer from '../containers/ContentSectionContainer'
import GenericContentContainer from '../containers/GenericContentContainer'
import SvgPersonOopsSign from '../images/stick-figures/SvgPersonOopsSign'
import CardHeader from '../layouts/CardHeader'

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
        <CardHeader descriptionAlignment="Left">
        <h1 className="mb-14 mt-12 text-4xl font-bold text-gray-700 dark:text-white md:text-5xl">A "{propsWithDefaults.title}" Occurred</h1>
        <h2 className="mb-14 mt-12 text-2xl font-bold text-gray-700 dark:text-white md:text-5xl">{propsWithDefaults.description}</h2>
      </CardHeader>
      <HashLink to={`${propsWithDefaults.actionUrl}`} smooth className="mb-14 relative flex h-9 w-max items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
        <span className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white">{propsWithDefaults.actionTitle}</span>
      </HashLink>
    </ContentSectionContainer>
    </PageContainer >
  )
}

export default GenericHttpError
