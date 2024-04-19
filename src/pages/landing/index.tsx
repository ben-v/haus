import PageContainer from "../../components/layouts/PageContainer"
import PageHeader from "../../components/layouts/PageHeader"
import Testamonials from "./sections/Testamonials";
import ElevatorPitch from "./sections/ElevatorPitch";
import Philosophy from "./sections/Philosophy";
import ContentBackground from "../../components/effects/ContentBackground";

const LandingPage = () => {
  return (
    <PageContainer id="landing" width="Wide">
      <PageHeader titlePartA="Comfortable, Functional,&nbsp;" titlePartB="Happy Homes" highlightType="Vibrant" titleAlignment="Left" />
      <ElevatorPitch />
      <ContentBackground />
      <Philosophy />
      <Testamonials />
    </PageContainer>
  )
}

export default LandingPage