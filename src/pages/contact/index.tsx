import PageContainer from "../../components/containers/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";
import GenericContentContainer from '../../components/containers/GenericContentContainer';
import TabStripContainer, { TabProps } from '../../components/containers/TabStripContainer';

import ContactFormPanel from "./panels/ContactFormPanel";
import ContactOtherPanel from "./panels/ContactOtherPanel";
import SvgWorkerEmailing from '../../components/images/stick-figures/SvgWorkerEmailing';

import { logPageView } from "../../components/analytics/GA";

const tabData: TabProps[] = [
  {
    title: "Message Us",
    key: "contact-form",
    children: <ContactFormPanel />
  },
  {
    title: "Contact Us",
    key: "contact-other",
    children: <ContactOtherPanel />
  },
];

const ContactPage = () => {
  // Send page view analytics
  logPageView("/contact", "Contact Page");

  return (
    <PageContainer
      id="contact"
      titlePartA="Let's"
      titlePartB=" Connect"
      description="If you have project ideas or questions you'd like to discuss, please send us a message or give us a call.">
      <ContentSectionContainer id="contact-body-container">
        <ContentSectionContainer flexDirection="Center" containerClassNames="w-auto pb-6 md:pt-0 md:w-4/5 md:max-w-2xl">
          <GenericContentContainer id="contact-marketing-worker" padding="None">
            <SvgWorkerEmailing className="w-auto" />
          </GenericContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer id="contact-detail" flexDirection="Center">
          <TabStripContainer id="contact-tab-strip" defaultTabKey="contact-form" tabData={tabData} source="Contact Page" />
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ContactPage