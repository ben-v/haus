import PageContainer from '../../components/containers/PageContainer';
import ContentSectionContainer from '../../components/containers/ContentSectionContainer';
import TabStripTemplate, { TabTemplateProps } from '../../components/templates/TabStripTemplate';

import ExistingClientsPanel from './panels/ExistingClientsPanel';
import NewClientsPanel from './panels/NewClientsPanel';

const tabData: TabTemplateProps[] = [
  {
    title: "New Clients",
    key: "clients-new",
    children: <NewClientsPanel />
  },
  {
    title: "Existing Clients",
    key: "clients-existing",
    children: <ExistingClientsPanel />
  },
];

const ClientsPage = () => {
  return (
    <PageContainer
      id="clients"
      titlePartA="Job #1 &rsaquo; "
      titlePartB="Helping Clients"
      description="Projects around the house can pile up fast and the next thing you know, there's a nagging &ldquo;to do&rdquo; list a mile long. We want to help our clients get their projects done and off their plate, to enjoy their homes and our Montana community.  We do this by leveraging technology to facilitate our work, stay in touch and keep you up to date.">
      <ContentSectionContainer id="clients-body" flexDirection="Center">
        <TabStripTemplate id="clients-tab-strip" defaultTabKey="clients-new" tabData={tabData} />
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ClientsPage