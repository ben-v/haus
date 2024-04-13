import PageHeader from "../../../components/layouts/PageHeader"

const IntroClientsSection = () => {
    return (
        <section id="intro-clients" className="pt-24 lg:pt-32">
            <div className="mx-auto px-4 md:px-6 xl:max-w-6xl xl:px-0">
                <div className="relative w-auto flex flex-col">
                    <PageHeader 
                        titlePartA="Job #1 &rsaquo; "
                        titlePartB="Helping Clients"
                        Description="Projects around the house, big and small, can pile up fast and the next thing you know, there's a nagging &ldquoto do&rdquo list a mile long. We want to help both our new and existing clients get their projects done and off their plate, to enjoy their homes and our Montana community. We leverage technology to facilitate our work, stay in touch and keep you up to date."
                    />
                </div>
            </div>
        </section>
    )
}

export default IntroClientsSection
