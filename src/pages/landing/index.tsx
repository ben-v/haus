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
      <Testamonials />
      <Philosophy />
      <ContentBackground />
      {/*
        
        Might leave services section on the landing page because want that to be readily avaible to user; the menu option, although the hamburger menu is normal on mobile, is not super obvious. 
        By keeping this secton on landing page, I'm betting this is information the user wants right away.
        
        <Services />
        
        */}
    </PageSection>
  )
}

export default LandingPage