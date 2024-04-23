import { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link"
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config';
import { THEMES, ThemeContext } from "../../../contexts/ThemeContext";
import CardHeader from "../../../components/layouts/CardHeader"
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer"
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import SvgPaperPlaneSolid from "../../../components/images/icons/SvgPaperPlaneSolid";
import CommonToastNotificationConfig from "../../../components/notifications/common-toast-notification-config";
import ContentSection from "../../../components/layouts/ContentSection";

const fullConfig = resolveConfig(tailwindConfig)

const ContactFormSection = () => {
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
        <ContentSection>
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
                                    maxLength={50}
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
                                    maxLength={100}
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
            <CommonToastNotificationConfig />
        </ContentSection>
    )
}

export default ContactFormSection