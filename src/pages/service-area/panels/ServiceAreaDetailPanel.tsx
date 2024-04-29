import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import ButtonLink from "../../../components/buttons/ButtonLink";
import CardHeader from "../../../components/layouts/CardHeader";

const ServiceAreaDetailPanel = () => {
  
  return (
    <ContentSectionContainer flexDirection="Center">
      <RoundCornerContainer id="service-area-detail" padding="Small" bodyClassNames="gap-8">
        <CardHeader title="Communities We Serve" titleAlignment="Left" />

        <div className="grid grid-cols-2 rounded-3xl border dark:border-gray-700 border-gray-200 [&>*]:dark:border-gray-700 [&>*]:p-4 [&>*]:!text-xs md:[&>*]:!text-sm lg:[&>*]:!text-base [&>*]:border-gray-200">
          <div className="flex justify-center items-center gap-2 border-b body-text-no-sizing">
            Bozeman
          </div>
          <div className="flex justify-center items-center gap-2 border-b border-l body-text-no-sizing">
            Belgrade
          </div>
          <div className="flex justify-center items-center gap-2 body-text-no-sizing">
            Gallatin Gateway
          </div>
          <div className="flex justify-center items-center gap-2 border-l body-text-no-sizing">
            Big Sky
          </div>
        </div>

        <p className="body-text">Communities outside the Bozeman, Belgrade, Gallatin Gateway city/community limits have a scaling trip fee.</p>

        <p className="body-text">Don't see your community listed or have questions about our service area? Feel free to reach out to us for more information. We're here to help!</p>

        <ButtonLink url="/contact/#" title="Contact Us" />
      </RoundCornerContainer>
    </ContentSectionContainer>
  )
}

export default ServiceAreaDetailPanel
