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
    title: "Current Clients",
    key: "clients-existing",
    children: <ExistingClientsPanel />
  },
];

const ClientsPage = () => {
  return (
    <PageContainer
      id="clients"
      titlePartA="Helping"
      titlePartB=" Clients"
      description="Projects around the house can pile up quickly, and before you know it, there's a nagging 'to-do' list that is a mile long. We want to help our clients complete these projects and clear their plates so they can enjoy their homes and our Montana community. We achieve this by leveraging technology to facilitate our work, stay in touch, and keep you updated.">
      <ContentSectionContainer id="clients-body" flexDirection="Center">
        <TabStripTemplate id="clients-tab-strip" defaultTabKey="clients-new" tabData={tabData} />
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ClientsPage