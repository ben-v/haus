import { useContext } from "react";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import SvgIntroDark from "../../../components/images/sections/SvgIntroDark";
import SvgIntroLight from "../../../components/images/sections/SvgIntroLight";

const ElevatorPitch = () => {
  const { theme, } = useContext(ThemeContext);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-7/12 w-auto">
        <p className="m-2 md:m-6 lg:mt-12 lg:ml-3 text-gray-600 dark:text-gray-300 text-lg text-center md:text-left"><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home in the Bozeman area.</p>
      </div>
      <div className="lg:w-5/12 w-auto px-4 mt-2 lg:mt-6">
        {(theme === THEMES.DARK) ? <SvgIntroDark className="w-full" /> : <SvgIntroLight className="w-full" />}
      </div>
    </div>
  )
}

export default ElevatorPitch
