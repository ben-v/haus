import { ReactNode, useContext } from 'react';
import { THEMES, ThemeContext } from '../../contexts/ThemeContext';

import ContentSectionContainer from "../../components/containers/ContentSectionContainer";
import PageContainer from "../../components/layouts/PageContainer";

import FaqsDetailOtherPanel from "./panels/FaqsDetailOtherPanel";
import FaqsDetailPanel from "./panels/FaqsDetailPanel";
import FaqsMarketingSection from "./sections/FaqsMarketingSection";

import { ThemeProvider } from "@material-tailwind/react";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const tabData: { title: string, id: string, children: ReactNode }[] = [
  {
    title: "Our FAQs",
    id: "our-faqs",
    children: <FaqsDetailPanel />
  },
  {
    title: "Other Questions?",
    id: "faqs-other",
    children: <FaqsDetailOtherPanel />
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
      <Tabs id="faqs-tab-strip" value="our-faqs" className="tab-strip">
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

const FaqsPage = () => {
  return (
    <PageContainer
      id="faqs"
      titlePartA="Frequently Asked"
      titlePartB=" Questions"
      description="We've pulled together answers to some commonly asked questions about HAUS, what we do and how we do it."
      columnA={getTabStrip()}
      columnB={<FaqsMarketingSection />} />
  )
}

export default FaqsPage
