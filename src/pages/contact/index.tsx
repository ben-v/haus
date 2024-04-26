import { ReactNode, useContext } from 'react';
import { THEMES, ThemeContext } from '../../contexts/ThemeContext';

import PageContainer from "../../components/layouts/PageContainer";
import ContentSectionContainer from "../../components/containers/ContentSectionContainer";

import ContactFormPanel from "./panels/ContactFormPanel";
import ContactOtherPanel from "./panels/ContactOtherPanel";
import ContactMarketingSection from "./sections/ContactMarketingSection";

import { ThemeProvider } from "@material-tailwind/react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const tabData: { title: string, id: string, children: ReactNode }[] = [
  {
    title: "Message Us",
    id: "contact-form",
    children: <ContactFormPanel />
  },
  {
    title: "Other Contact Info",
    id: "contact-other",
    children: <ContactOtherPanel />
  },
];

const getTabStrip = () => {
  const { theme, } = useContext(ThemeContext);
  
  const tabtheme = {
    tab: {
      styles: {
        base: {
          indicator: {
            bg: theme === THEMES.DARK ? "bg-gray-700" : "bg-white"
          },
        },
      },
    }
  };
    
  return (
    <ContentSectionContainer flexDirection="Center">
      <Tabs id="faqs-tab-strip" value="contact-form" className="tab-strip">
        <ThemeProvider value={tabtheme}>
        <TabsHeader className="tab-strip-header">
          {tabData.map(({ title, id }) => (
            <Tab key={id} value={id} className="tab-strip-header-tab container-header-text">{title}</Tab>
          ))}
        </TabsHeader>
        </ThemeProvider>
        <TabsBody animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }} className="tab-strip-body">
          {tabData.map(({ id, children }) => (
            <TabPanel key={id} value={id} className="tab-strip-body-panel">
              {children}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ContentSectionContainer>
  )
};

const ContactPage = () => {
  return (
    <PageContainer
      id="contact"
      titlePartA="Let's"
      titlePartB=" Connect"
      description="If you have project ideas or questions you'd like to discuss, please fill out the form below to send us a message."
      columnA={<ContactMarketingSection />} 
      columnB={getTabStrip()} />
  )
}

export default ContactPage