import { ReactNode, useContext } from 'react';
import { THEMES, ThemeContext } from '../../contexts/ThemeContext';

import PageContainer from "../../components/layouts/PageContainer";
import ServiceAreaMapPanel from "./panels/ServiceAreaMapPanel";

import { ThemeProvider } from "@material-tailwind/react";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import ServiceAreaDetailPanel from './panels/ServiceAreaDetailPanel';
import ContentSectionContainer from '../../components/containers/ContentSectionContainer';
import ServiceAreaMarketingSection from './sections/ServiceAreaMarketingSection';

const tabData: { title: string, id: string, children: ReactNode }[] = [
  {
    title: "Communities",
    id: "service-area-details",
    children: <ServiceAreaDetailPanel />
  },
  {
    title: "Map",
    id: "service-area-map",
    children: <ServiceAreaMapPanel />
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
      <Tabs id="faqs-tab-strip" value="service-area-details" className="tab-strip">
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

const ServiceAreaPage = () => {
  return (
    <PageContainer
      id="service-area"
      titlePartA="Service"
      titlePartB=" Area"
      description="Our primary service area encompasses the greater Bozeman area community and Gallatin County. Check out the list below for communities we commonly serve."
      columnA={<ServiceAreaMarketingSection />}
      columnB={getTabStrip()} />
  )
}

export default ServiceAreaPage
