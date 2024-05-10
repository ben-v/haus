
import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from '../../components/containers/ContentSectionContainer';
import GenericContentContainer from '../../components/containers/GenericContentContainer';
import TabStripContainer, { TabTemplateProps } from '../../components/containers/TabStripContainer';

import ServiceAreaDetailPanel from './panels/ServiceAreaDetailPanel';
import ServiceAreaMapPanel from "./panels/ServiceAreaMapPanel";
import SvgPersonDriving from '../../components/images/stick-figures/SvgPersonDriving';

const tabData: TabTemplateProps[] = [
  {
    title: "Communities",
    key: "service-area-communities",
    children: <ServiceAreaDetailPanel />
  },
  {
    title: "Map",
    key: "service-area-map",
    children: <ServiceAreaMapPanel />
  },
];

const ServiceAreaPage = () => {
  return (
    <PageContainer
      id="service-area"
      titlePartA="Service"
      titlePartB=" Area"
      description="Our primary service area includes the greater Bozeman community and Gallatin County. Check out the list below for communities we commonly serve.">
      <ContentSectionContainer id="service-area-body-container">
        <ContentSectionContainer flexDirection="Center" containerClassNames="w-auto pb-6 md:pt-0 md:w-4/5 md:max-w-2xl">
          <GenericContentContainer id="service-area-marketing-person" padding="None">
            <SvgPersonDriving className="w-auto" />
          </GenericContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer id="service-area-detail" flexDirection="Center">
          <TabStripContainer id="service-area-tab-strip" defaultTabKey="service-area-communities" tabData={tabData} />
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ServiceAreaPage
