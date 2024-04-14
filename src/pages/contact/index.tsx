import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import PageSection from "../../components/layouts/PageSection"
import PageHeader from "../../components/layouts/PageHeader"
import CardHeader from "../../components/layouts/CardHeader"
import RounderCornerContainer from "../../components/containers/RounderCornerContainer"
import SvgYelpGeneric from "../../components/images/SvgYelpGneric"
import SvgFacebookGeneric from "../../components/images/SvgFacebookGeneric"
import PngInstagramColor from "../../../public/images/instagram-color.png";
import ContentBackground from "../../components/effects/ContentBackground"

const ContactPage = () => {
  return (
    <PageSection id="contact">
      <PageHeader
        titlePartA="Let's"
        titlePartB=" Connect"
        Description="If you have project ideas or general questions you'd like to talk about, please fill out the form below to send us a message; we are happy to discuss with you and will reply shortly." />
      <div className="relative grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max lg:grid-cols-2">
        <ContentBackground />
        <RounderCornerContainer>
          <CardHeader title="What should we know?" />
          <form action="" className="w-auto">
            <div className="relative">
              <div className="mt-8 mb-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Name <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <input type="text" name="name" id="name" className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                  <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Email <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <input type="email" name="email" id="email" className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                  <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Phone <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <input type="tel" name="phone" id="phone" className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                  <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Message <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <textarea name="message" id="message" className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>

                  <span className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                </div>
              </div>

              <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">By clicking submit below, you agree to the processing of your personal information by HAUS Property Services as described in our <HashLink to="/privacy/#">Privacy Policy</HashLink>.</p>

              <button type="submit" className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                <span className="relative text-base font-semibold text-white dark:text-gray-900">Get started</span>
              </button>
            </div>
          </form>
        </RounderCornerContainer>
        <RounderCornerContainer>
          <CardHeader title="Also, find us on:" />
          <div className="relative flex gap-4 pt-3">
              <Link to="https:www.facebook.com/haus.property.svcs" target="_blank" aria-label="facebook">
                {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                <SvgFacebookGeneric fill="#0866FF" width={48} height={48} />
              </Link>
              <Link to="https:www.instagram.com/haus.property.svcs" target="_blank" aria-label="instagram">
                {/* The media kit SVG file for Instagram is massive, 11+ MB, and too big for website usage. Tried to make smaller SVG file but could not get it below the original file size. Went with their provided
                PNG file and reduced the size to 512x512 which got the file down to 168k. Wanted to use their official gradient colored image, so needed to use fully colorized image instead
                of overriding the fill color on the generic instagram component, SvgInstagramGeneric. */}
                <img src={PngInstagramColor} width={48} height={48} />
              </Link>
              <Link to="https:www.yelp.com/biz/haus-property-services-bozeman" target="_blank" aria-label="yelp">
                {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Yelp "red" color by color sampling in another app and applyling here via fill property. */}
                <SvgYelpGeneric fill="#FF1A1A" width={48} height={48} />
              </Link>
            </div>
        </RounderCornerContainer>

      </div>
    </PageSection>
  )
}

export default ContactPage