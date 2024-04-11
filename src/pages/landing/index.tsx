import Intro1 from './sections/Intro'
import Intro2 from './sections/Intro-2'
// import Clients from './sections/Clients'
// import Services from './sections/Services'
// import ServiceArea from './sections/ServiceArea'

// import LayoutTestingRegularRowFlow from "./sections/LayoutTestingRegularRowFlow"
// import LayoutTestingReverseRowFlow from "./sections/LayoutTestingReverseRowFlow"

const Landing = () => {
  return (
    <>
      {/* <LayoutTestingRegularRowFlow />
      <LayoutTestingReverseRowFlow /> */}
      <Intro1 />
      <Intro2 />
      {/* 
      <Intro2 />
      <Clients />
      <Services />
      <ServiceArea /> */}
    </>
  )
}

export default Landing