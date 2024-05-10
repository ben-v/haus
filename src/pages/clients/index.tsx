import PageContainer from '../../components/containers/PageContainer';
import ContentSectionContainer from '../../components/containers/ContentSectionContainer';
import TabStripContainer, { TabTemplateProps } from '../../components/containers/TabStripContainer';

import CurrentClientsPanel from './panels/CurrentClientsPanel';
import NewClientsPanel from './panels/NewClientsPanel';

const tabData: TabTemplateProps[] = [
  {
    title: "New Clients",
    key: "clients-new",
    children: <NewClientsPanel />
  },
  {
    title: "Current Clients",
    key: "clients-current",
    children: <CurrentClientsPanel />
  },
];

const ClientsPage = () => {
  return (
    <PageContainer
      id="clients"
      titlePartA="Helping"
      titlePartB=" Clients"
      description="Projects around the house can pile up quickly, and before you know it, there's a nagging 'to do' list that is a mile long. We want to help our clients complete these projects and clear their plates so they can enjoy their homes and Montana. Use the 'New Clients' or 'Current Clients' options below to send a work request, ask questions, check on project status, and more.">
      <ContentSectionContainer id="clients-body" flexDirection="Center">
        <TabStripContainer id="clients-tab-strip" defaultTabKey="clients-new" tabData={tabData} />
      </ContentSectionContainer>
    </PageContainer>
  )
}

export default ClientsPage