import Testamonials from "./sections/Testamonials";
import ElevatorPitch from "./sections/ElevatorPitch";
import Philosophy from "./sections/Philosophy";
import PageContainer2 from "../../components/layouts/PageContainer2";

// Want the landing cards to be stacked in a single column, so need to wrap in a div with flex CSS classes applied.
const landingCards = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <ElevatorPitch />
      <Philosophy />
      <Testamonials />
    </div>
  )
};

const LandingPage = () => {
  return (
    <PageContainer2
      id="landing"
      width="Wide"
      titlePartA="Comfortable, Functional,&nbsp;"
      titlePartB="Happy Homes"
      highlightType="Vibrant"
      titleAlignment="Left"
      columnA={landingCards()} />
  )
}

export default LandingPage