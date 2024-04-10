import { Link } from "react-router-dom"
import SvgAccentLine from "../../../components/images/SvgAccentLine"
import SvgFacebookGeneric from "../../../components/images/SvgFacebookGeneric"
import PngInstagramColor from "../../../../public/images/instagram-color.png";
import SvgYelpGeneric from "../../../components/images/SvgYelpGneric";
import { ThemeContext, THEMES } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import SvgIntroDark from "../../../components/images/sections/SvgIntroDark";
import SvgIntroLight from "../../../components/images/sections/SvgIntroLight";
import SvgIntroSuccessDark from "../../../components/images/sections/SvgIntroSuccessDark";
import SvgIntroSuccessLight from "../../../components/images/sections/SvgIntroSuccessLight";

const Intro = () => {
  
  const { theme, } = useContext(ThemeContext);

    return (
      <section id="home" className="pt-32 sm:pt-40 md:pt-44">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="relative">
          <h1 className="text-center text-4xl font-bold text-blue-900 dark:text-white sm:text-5xl lg:text-left lg:text-5xl">
            Comfortable, Functional,&nbsp;
            <span className="relative">
              <SvgAccentLine className="absolute inset-x-0 -bottom-1 w-full opacity-50" />
              <span className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">Happy Homes</span>
            </span>
          </h1>

          <div className="relative items-start gap-12 lg:flex">
            <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
              <p className="mt-16 text-lg text-gray-600 dark:text-gray-300 sm:text-xl"><span className="font-semibold">HAUS Property Services</span> provides property maintenance, repair, and technical services for the connected home, catering to the evolving needs of homeowners in the greater Bozeman area. Our focus is to help create a more comfortable, functional, and happy home for each client.</p>
              <div className="mt-16 text-lg text-gray-600 dark:text-gray-300 sm:text-xl hidden lg:block">
                Also find us on:
              <div className="flex gap-4 pt-3">
                  <Link to="https://www.facebook.com/haus.property.svcs" target="_blank" aria-label="facebook">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                    <SvgFacebookGeneric fill="#0866FF" width={36} height={36} />
                  </Link>
                  <Link to="https://www.instagram.com/haus.property.svcs" target="_blank" aria-label="instagram">
                    {/* The media kit SVG file for Instagram is massive, 11+ MB, and too big for website usage. Tried to make smaller SVG file but could not get it below the original file size. Went with their provided
                    PNG file and reduced the size to 512x512 which got the file down to 168k. Wanted to use their official gradient colored image, so needed to use fully colorized image instead
                    of overriding the fill color on the generic instagram component, SvgInstagramGeneric. */}
                    <img src={PngInstagramColor} width={36} height={36} />
                  </Link>
                  <Link to="https://www.yelp.com/biz/haus-property-services-bozeman" target="_blank" aria-label="yelp">
                    {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Yelp "red" color by color sampling in another app and applyling here via fill property. */}
                    <SvgYelpGeneric fill="#FF1A1A" width={36} height={36} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:w-6/12">
              {(theme === THEMES.DARK) ? <SvgIntroDark className="w-full" /> : <SvgIntroLight className="w-full" />}
            </div>
          </div>
        </div>

        <div className="relative mt-12 h-auto">
          <div className="relative items-start gap-12 lg:flex">
            <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:w-3/12 align-top">
            {(theme === THEMES.DARK) ? <SvgIntroSuccessDark className="w-full" /> : <SvgIntroSuccessLight className="w-full" />}
            </div>
            <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">Where old school meets new school</h2>
              <p className="mt-16 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, listening, communication & collaboration were the foundations of success then and are the foundation of success today on any project...in corporate America or in the home.</p>
            </div>
          </div>
        </div>               
      </div>
    </section>
    )
  }
  
  export default Intro
