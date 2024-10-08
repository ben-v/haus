import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import NavLink from "../../../components/navigation/NavLink";
import CardHeader from "../../../components/layouts/CardHeader";

import { logClickAction } from "../../../components/analytics/GA";

const ServiceAreaDetailPanel = () => {
  const logClick = (label: string) => {
    logClickAction("Service Area Detail Panel", label);
  };
  
  return (
    <ContentSectionContainer flexDirection="Center">
      <RoundCornerContainer id="service-area-detail" padding="Small" bodyClassNames="gap-8">
        <CardHeader title="Communities We Serve" titleAlignment="Left" />

        <div className="grid grid-cols-2 rounded-3xl border dark:border-gray-700 border-gray-200 [&>*]:dark:border-gray-700 [&>*]:p-4 [&>*]:!text-xs md:[&>*]:!text-sm lg:[&>*]:!text-base [&>*]:border-gray-200">
          <div className="flex justify-center items-center gap-2 border-b serivce-area-list-text">
            Bozeman
          </div>
          <div className="flex justify-center items-center gap-2 border-b border-l serivce-area-list-text">
            Belgrade
          </div>
          <div className="flex justify-center items-center gap-2 serivce-area-list-text">
            Gallatin Gateway
          </div>
          <div className="flex justify-center items-center gap-2 border-l serivce-area-list-text">
            Big Sky
          </div>
        </div>

        <p className="body-text tabpanel-text">Communities outside the Bozeman, Belgrade, and Gallatin Gateway city/community limits are subject to a scaling trip fee.</p>

        <p className="body-text tabpanel-text">Don't see your community listed, or have questions about our service area? Feel free to reach out to us for more information. We're here to help!</p>

        <NavLink url="/contact" onClick={() => logClick("Contact Us Button")}>Contact Us</NavLink>
      </RoundCornerContainer>
    </ContentSectionContainer>
  )
}

export default ServiceAreaDetailPanel
