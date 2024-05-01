import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";
import GenericContentContainer from '../../components/containers/GenericContentContainer';
import TabStripTemplate, { TabTemplateProps } from '../../components/templates/TabStripTemplate';

import SvgPersonWithList from "../../components/images/stick-figures/SvgPersonWithList";
import ServicesDetailPanel from "./panels/ServicesDetailPanel";
// import ServicesPricingModelPanel from "./panels/ServicesPricingModelPanel";

const tabData: TabTemplateProps[] = [
  {
    title: "Services",
    key: "services-detail",
    children: <ServicesDetailPanel />
  },
  // {
  //   title: "Pricing",
  //   key: "services-pricing",
  //   children: <ServicesPricingModelPanel />
  // },
];

const ServicesPage = () => {
  return (
    <PageContainer
      id="faqs"
      titlePartA="Our"
      titlePartB=" Services"
      // description="Page summary goes here"
      >
      <ContentSectionContainer id="faqs-bodycontainer" flexDirection='RTL'>
        <ContentSectionContainer flexDirection="Center" containerClassNames="w-auto pb-6 md:pt-0 md:w-4/5 md:max-w-2xl">
          <GenericContentContainer id="faqs-marketing-person" padding="None">
            <SvgPersonWithList className="w-auto" />
          </GenericContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer id="faqs-detail" flexDirection="Center">
          <TabStripTemplate id="services-tab-strip" defaultTabKey="services-detail" tabData={tabData} />
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ServicesPage
