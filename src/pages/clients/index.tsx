import NewClients from './sections/NewClients'
import ExistingClients from './sections/ExistingClients'
import PageSection from '../../components/layouts/PageSection'
import PageHeader from '../../components/layouts/PageHeader'

const ClientsPage = () => {
  return (
    <PageSection id='clients'>
      <PageHeader 
          titlePartA="Job #1 &rsaquo; "
          titlePartB="Helping Clients"
          Description="Projects around the house, big and small, can pile up fast and the next thing you know, there's a nagging &ldquoto do&rdquo list a mile long. We want to help both our new and existing clients get their projects done and off their plate, to enjoy their homes and our Montana community. We leverage technology to facilitate our work, stay in touch and keep you up to date." />
      <div className="relative flex flex-col gap-16">
        <NewClients />
        <ExistingClients />
      </div>
    </PageSection>
  )
}

export default ClientsPage