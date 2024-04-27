import PageContainer from "../../components/layouts/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";
import GenericContentContainer from '../../components/containers/GenericContentContainer';
import TabStripTemplate, { TabTemplateProps } from '../../components/templates/TabStripTemplate';

import ContactFormPanel from "./panels/ContactFormPanel";
import ContactOtherPanel from "./panels/ContactOtherPanel";
import SvgWorkerEmailing from '../../components/images/stick-figures/SvgWorkerEmailing';

const tabData: TabTemplateProps[] = [
  {
    title: "Message Us",
    key: "contact-form",
    children: <ContactFormPanel />
  },
  {
    title: "More Contacts",
    key: "contact-other",
    children: <ContactOtherPanel />
  },
];

const ContactPage = () => {
  return (
    <PageContainer
      id="contact"
      titlePartA="Let's"
      titlePartB=" Connect"
      description="If you have project ideas or questions you'd like to discuss, please fill out the form below to send us a message.">
      <ContentSectionContainer id="contact-body-container">
        <ContentSectionContainer flexDirection="Center" containerClassNames="w-auto pb-6 md:pt-0 md:w-4/5 md:max-w-2xl">
          <GenericContentContainer id="contact-marketing-worker" padding="None">
            <SvgWorkerEmailing className="w-auto" />
          </GenericContentContainer>
        </ContentSectionContainer>
        <ContentSectionContainer id="contact-detail" flexDirection="Center">
          <TabStripTemplate id="contact-tab-strip" defaultTabKey="contact-form" tabData={tabData} />
        </ContentSectionContainer>
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ContactPage