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
 

// Want the client cards to be stacked in a single column, so need to wrap in a div with flex CSS classes applied.
const clientCards = () => {
  return (
    <ContentSectionContainer flexDirection="Center">
      {/* Use div and flex to provide some addtional, one-off, spacing between the new and existing client sections. */}
      {/* <div className='relative flex flex-col gap-10 md:gap-20'>
      <NewClientsSection />
      <ExistingClientsSection />
      </div> */}
      <Tabs id="custom-animation" value="new-clients">
        <TabsHeader className="rounded-none border-b border-blue-gray-50 p-0">
          <Tab key="new-clients" value="new-clients">New Clients</Tab>
          <Tab key="existing-clients" value="existing-clients">Existing Clients</Tab>
        </TabsHeader>
        <TabsBody animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }} className='pt-8'>
          <TabPanel key="new-clients" value="new-clients">
            <NewClientsSection />
          </TabPanel>          
          <TabPanel key="existing-clients" value="existing-clients">
            <ExistingClientsSection />
          </TabPanel>          
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
      columnA={clientCards()} />
  )
}

export default ClientsPage