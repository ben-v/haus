import NewClients from './sections/NewClients'
import ExistingClients from './sections/ExistingClients'
import PageContainer from '../../components/layouts/PageContainer'
import PageHeader from '../../components/layouts/PageHeader'

const ClientsPage = () => {
  return (
    <PageContainer id='clients'>
      <PageHeader 
          titlePartA="Job #1 &rsaquo; "
          titlePartB="Helping Clients"
          description="Projects around the house can pile up fast and the next thing you know, there's a nagging &ldquo;to do&rdquo; list a mile long. We want to help our clients get their projects done and off their plate, to enjoy their homes and our Montana community.  We do this by leveraging technology to facilitate our work, stay in touch and keep you up to date." />
      <div className="relative flex flex-col gap-16">
        <NewClients />
        <ExistingClients />
      </div>
    </PageContainer>
  )
}

export default ClientsPage