import IntroElevatorPitch from './sections/IntroElevatorPitch'
import IntroSuccessFoundationPitch from './sections/IntroSuccessFoundationPitch'

const Landing = () => {
  return (
    <>
      <IntroElevatorPitch />
      <IntroSuccessFoundationPitch />
      {/*
      
      Might leave services section on the landing page because want that to be readily avaible to user; the menu option, although the hamburger menu is normal on mobile, is not super obvious. 
      By keeping this secton on landing page, I'm betting this is information the user wants right away.
      
      <Services />
      
      */}
    </>
  )
}

export default Landing