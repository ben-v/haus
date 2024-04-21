import PageContainer2 from "../../components/layouts/PageContainer2";
import PrivacyDetailSection from "./sections/PrivacyDetailSection";

const PrivacyPage = () => {
  return (
    <PageContainer2
      id="privacy-policy"
      titlePartA="Privacy Policy"
      description="Last Updated On: April 2, 2024"
      showContentBackground={false}
      columnA={<PrivacyDetailSection />} />
  )
}

export default PrivacyPage
