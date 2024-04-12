import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import SvgIntroSuccessDark from "../../../components/images/sections/SvgIntroSuccessDark";
import SvgIntroSuccessLight from "../../../components/images/sections/SvgIntroSuccessLight";

const Intro2 = () => {

    const { theme, } = useContext(ThemeContext);

    return (
        <section id="intro-2" className="pt-0 md:pt-16 lg:pt-8">
            <div className="mx-auto px-4 md:px-6 xl:max-w-6xl xl:px-0">
                <div className="relative w-auto flex flex-col">
                    <div className="flex flex-col lg:flex-row-reverse">
                        <div className="lg:w-9/12 w-auto p-2">
                            <div className="p-2 w-auto text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">Where old school meets new</h2>
                            </div>
                            <p className="m-2 md:m-6 lg:mt-12 lg:ml-3 text-gray-600 dark:text-gray-300 text-lg md:text-lg text-center md:text-left">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project...in corporate America or in the home.</p>
                        </div>
                        <div className="lg:w-3/12 w-auto px-4 mt-2 lg:mt-6">
                            {(theme === THEMES.DARK) ? <SvgIntroSuccessDark className="w-full" /> : <SvgIntroSuccessLight className="w-full" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro2
