import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";
import GenericContentContainer from '../../components/containers/GenericContentContainer';
import TabStripContainer, { TabProps } from '../../components/containers/TabStripContainer';

import FaqsDetailOtherPanel from "./panels/FaqsDetailOtherPanel";
import FaqsDetailPanel from "./panels/FaqsDetailPanel";
import SvgPersonInformation from '../../components/images/stick-figures/SvgPersonInformation';

import { logPageView } from "../../components/analytics/GA";

const tabData: TabProps[] = [
  {
    title: "FAQs",
    key: "our-faqs",
    children: <FaqsDetailPanel />
  },
  {
    title: "Ask a Question",
    key: "faqs-other",
    children: <FaqsDetailOtherPanel />
  },
];

const FaqsPage = () => {
  // Send page view analytics
  logPageView("/faqs", "FAQs Page");

  return (
    <PageContainer
      id="faqs"
      titlePartA="Frequently Asked"
      titlePartB=" Questions">
      <ContentSectionContainer id="faqs-bodycontainer" flexDirection='RTL'>
        <ContentSectionContainer flexDirection="Center" containerClassNames="w-auto pb-6 md:pt-0 md:w-4/5 md:max-w-2xl">
          <GenericContentContainer id="faqs-marketing-person" padding="None">
            <SvgPersonInformation className="w-auto" />
          </GenericContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer id="faqs-detail" flexDirection="Center">
          <TabStripContainer id="faqs-tab-strip" defaultTabKey="our-faqs" tabData={tabData} source="FAQs Page" />
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default FaqsPage
