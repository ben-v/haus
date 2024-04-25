import NewClientsSection from './sections/NewClientsSection'
import ExistingClientsSection from './sections/ExistingClientsSection'
import PageContainer from '../../components/layouts/PageContainer'
import ContentSectionContainer from '../../components/containers/ContentSectionContainer';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ReactNode } from 'react';

const tabData: { title: string, id: string, children: ReactNode }[] = [
  {
    title: "New Clients",
    id: "new-clients",
    children: <NewClientsSection />
  },
  {
    title: "Existing Clients",
    id: "existing-clients",
    children: <ExistingClientsSection />
  },
];

const getTabStrip = () => {
  return (
    <ContentSectionContainer flexDirection="Center">
      <Tabs id="clients-tab-strip" value="new-clients" className="tab-strip">
        <TabsHeader className="tab-strip-header">
          {tabData.map(({ title, id }) => (
            <Tab key={id} value={id} className="tab-strip-header-tab" activeClassName="tab-strip-header-tab-active">{title}</Tab>
          ))}
        </TabsHeader>
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

const ClientsPage = () => {
  return (
    <PageContainer
      id="clients"
      titlePartA="Job #1 &rsaquo; "
      titlePartB="Helping Clients"
      showContentBackground={false}
      description="Projects around the house can pile up fast and the next thing you know, there's a nagging &ldquo;to do&rdquo; list a mile long. We want to help our clients get their projects done and off their plate, to enjoy their homes and our Montana community.  We do this by leveraging technology to facilitate our work, stay in touch and keep you up to date."
      columnA={getTabStrip()} />
  )
}

export default ClientsPage