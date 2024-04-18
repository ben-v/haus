import { useContext, useState } from "react";

import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config';
import { THEMES, ThemeContext } from "../../contexts/ThemeContext";

import PageContainer from "../../components/layouts/PageContainer"
import PageHeader from "../../components/layouts/PageHeader"
import CardHeader from "../../components/layouts/CardHeader"
import RoundCornerContainer from "../../components/containers/RoundCornerContainer"
import SvgYelpGeneric from "../../components/images/icons/SvgYelpGneric"
import SvgFacebookGeneric from "../../components/images/icons/SvgFacebookGeneric"
import PngInstagramColor from "../../../public/icons/instagram-color.png";
import ContentBackground from "../../components/effects/ContentBackground"
import SvgPaperPlaneSolid from "../../components/images/icons/SvgPaperPlaneSolid"

import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import SvgGoogleGLogo from "../../components/images/icons/SvgGoogleGLogo";
import SocialProfileUrls from "../../navigation/SocialProfileUrls";
import TestamonialCard from "../../components/cards/TestamonialCard";

const fullConfig = resolveConfig(tailwindConfig)

const ContactPage = () => {
  const { theme, } = useContext(ThemeContext);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = mailData;
  const onChangeHandler = (e: any) => setMailData({ ...mailData, [e.currentTarget.name]: e.currentTarget.value });
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Dismiss any lingering toast message.
    toast.dismiss();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      toast.dismiss();
      toast.error("All fields are required. Please try again.")
    } else {
      toast.promise(
        emailjs
          .send(
            "service_0dzhd2z",  // service id
            "template_x639n8l", // template id
            mailData,
            "cGpfsTEjddquOdhTO" // public api key
          ), {
        loading: "Sending message...",
        success: (data) => {
          setMailData({ name: "", email: "", message: "" });
          console.log('SEND MESSAGE SUCCESS!', data.status, data.text);
          return "Message sent!";
        },
        error: (err) => {
          console.log('SEND MESSAGE FAILED...', err);
          return "Send message failed! Please check fields and try again."
        }
      },
        {
          style: {
            minWidth: '390px',
          }
        }
      );
    }
  };

  return (
    <PageContainer id="contact">
      <PageHeader
        titlePartA="Let's"
        titlePartB=" Connect"
        Description="If you have project ideas or questions you'd like to discuss, please fill out the form below to send us a message." />
      <div className="relative grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max lg:grid-cols-2">
        <ContentBackground />
        <RoundCornerContainer>
          <CardHeader title="What's on your mind?" titleAlignment="Left" />
          <form onSubmit={onSubmitHandler} className="w-auto">
            <div className="relative">
              <div className="mt-8 mb-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Name <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <input
                    id="name"
                    name="name"
                    onChange={(e) => onChangeHandler(e)}
                    value={name}
                    type="text"
                    autoComplete="given-name"
                    className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 dark:text-gray-300 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Email <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <input
                    id="email"
                    name="email"
                    onChange={(e) => onChangeHandler(e)}
                    value={email}
                    type="email"
                    autoComplete="email"
                    className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 dark:text-gray-300 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-gray-600 dark:text-gray-300 text-lg">Message <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => onChangeHandler(e)}
                    value={message}
                    defaultValue={""}
                    maxLength={4000}
                    className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 dark:text-gray-300 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>
                </div>
              </div>

              <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">By clicking submit below, you agree to the processing of your personal information by HAUS Property Services as described in our <HashLink to="/privacy/#">Privacy Policy</HashLink>.</p>

              <button type="submit" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                <div className="pr-2">
                  <SvgPaperPlaneSolid width={16} height={16} className='relative m-auto' fill={theme === THEMES.DARK ? fullConfig.theme.colors.dark : fullConfig.theme.colors.white} />
                </div>

                <span className="relative text-base font-semibold text-white dark:text-dark">Send Message</span>
              </button>
            </div>
          </form>
        </RoundCornerContainer>
        <div className="flex flex-col gap-12">
          <TestamonialCard
            padding="Large"
            reviewerName="Kayla C."
            date="4/17/24"
            stars={5}
            source="Google"
            reviewText="HAUS did a fantastic job.  Ben was very professional, arrived on time and was always easy to communicate with.  The new shelving looks great!  I highly recommend them. " />
          <RoundCornerContainer>
            <CardHeader title="Also connect with HAUS on:" titleAlignment="Left" />
            <div className="relative flex gap-4 pt-3 mb-auto">
              <Link to={SocialProfileUrls.GOOGLE} target="_blank" aria-label="google">
                {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                <SvgGoogleGLogo width={48} height={48} />
              </Link>
              <Link to={SocialProfileUrls.FACEBOOK} target="_blank" aria-label="facebook">
                {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Facebook "blue" color by color sampling in another app and applyling here via fill property. */}
                <SvgFacebookGeneric fill="#0866FF" width={48} height={48} />
              </Link>
              <Link to={SocialProfileUrls.INSTAGRAM} target="_blank" aria-label="instagram">
                {/* The media kit SVG file for Instagram is massive, 11+ MB, and too big for website usage. Tried to make smaller SVG file but could not get it below the original file size. Went with their provided
                  PNG file and reduced the size to 512x512 which got the file down to 168k. Wanted to use their official gradient colored image, so needed to use fully colorized image instead
                  of overriding the fill color on the generic instagram component, SvgInstagramGeneric. */}
                <img src={PngInstagramColor} width={48} height={48} />
              </Link>
              <Link to={SocialProfileUrls.YELP} target="_blank" aria-label="yelp">
                {/* No need for a separate color image file for Yelp. Use generic and apply color. Got the Yelp "red" color by color sampling in another app and applyling here via fill property. */}
                <SvgYelpGeneric fill="#FF1A1A" width={48} height={48} />
              </Link>
            </div>
          </RoundCornerContainer>
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            // default options
            duration: 120000,

            // success toast options
            success: {
              iconTheme: {
                primary: 'white',
                secondary: 'green',
              },
              style: {
                color: 'white',
                background: 'green'
              },
              duration: 5000
            },

            // error toast options
            error: {
              iconTheme: {
                primary: 'white',
                secondary: 'red',
              },
              style: {
                color: 'white',
                background: 'red'
              },
              duration: 5000
            },
          }} />
      </div>
    </PageContainer>
  )
}

export default ContactPage