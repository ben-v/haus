import PageSection from "../../components/layouts/PageSection"
import PageHeader from "../../components/layouts/PageHeader"
import Testamonials from "./sections/Testamonials";
import ElevatorPitch from "./sections/ElevatorPitch";
import Philosophy from "./sections/Philosophy";
import ContentBackground from "../../components/effects/ContentBackground";

const LandingPage = () => {
  return (
    <PageSection id="landing" width="Wide">
      <PageHeader titlePartA="Comfortable, Functional,&nbsp;" titlePartB="Happy Homes" highlightType="Vibrant" titleAlignment="Left" />
      <ElevatorPitch />
      <div>
        <ContentBackground />
      </div>
      <Philosophy />
      <Testamonials />
    </PageSection>
  )
}

export default LandingPage