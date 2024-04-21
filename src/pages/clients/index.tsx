import NewClientsSection from './sections/NewClientsSection'
import ExistingClientsSection from './sections/ExistingClientsSection'
import PageContainer2 from '../../components/layouts/PageContainer2'

// Want the client cards to be stacked in a single column, so need to wrap in a div with flex CSS classes applied.
const clientCards = () => {
  return (
      <div className="relative flex flex-col gap-16">
        <NewClientsSection />
        <ExistingClientsSection />
      </div>
  )
};

const ClientsPage = () => {
  return (
    <PageContainer2
      id="clients"
      titlePartA="Job #1 &rsaquo; "
      titlePartB="Helping Clients"
      description="Projects around the house can pile up fast and the next thing you know, there's a nagging &ldquo;to do&rdquo; list a mile long. We want to help our clients get their projects done and off their plate, to enjoy their homes and our Montana community.  We do this by leveraging technology to facilitate our work, stay in touch and keep you up to date." 
      columnA={clientCards()} />
  )
}

export default ClientsPage