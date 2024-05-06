import emailjs from "@emailjs/browser";
import { useContext, useState } from "react";
import { THEMES, ThemeContext } from "../../../components/contexts/ThemeContext";

import toast from 'react-hot-toast';
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

import React from "react";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgPaperPlaneSolid from "../../../components/images/icons/SvgPaperPlaneSolid";
import ButtonLink from "../../../components/navigation/ButtonLink";
import CardHeader from "../../../components/layouts/CardHeader";
import StandardLink from "../../../components/navigation/StandardLink";
import { Input } from "@material-tailwind/react";

const ContactFormPanel = () => {
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
        <ContentSectionContainer flexDirection="Center">
            <RoundCornerContainer id="contact-panel" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
            <CardHeader title="What's on your mind?" titleAlignment="Left" />
                <form onSubmit={onSubmitHandler} className="w-auto" autoComplete="off">
                    <div className="relative">
                        <div className="space-y-4">
                            <div>
                                <Input id="name" name="name" maxLength={50} autoComplete="off" variant="standard" label="Name" placeholder="Name" required={true} shrink={true} crossOrigin={undefined}/>
{/*                                 
                                <label htmlFor="name" className="mb-2 block body-text tabpanel-text">Name <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <input
                                    id="name"
                                    name="name"
                                    maxLength={50}
                                    onChange={(e) => onChangeHandler(e)}
                                    value={name}
                                    type="text"
                                    autoComplete="off"
                                    className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 body-text tabpanel-text transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" /> */}
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block body-text tabpanel-text">Email <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <input
                                    id="email"
                                    name="email"
                                    maxLength={50}
                                    onChange={(e) => onChangeHandler(e)}
                                    value={email}
                                    type="email"
                                    autoComplete="off"
                                    className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 body-text tabpanel-text transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700" />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block body-text tabpanel-text">Message <span className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={(e) => onChangeHandler(e)}
                                    value={message}
                                    defaultValue={""}
                                    maxLength={4000}
                                    className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 body-text tabpanel-text transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>
                            </div>
                        </div>

                        <p className="my-8 body-text tabpanel-text">By clicking submit below, you agree to the processing of your personal information by HAUS Property Services as described in our <StandardLink url="/privacy"><span className="font-semibold body-link">Privacy Policy</span></StandardLink>.</p>

                        <ButtonLink type="submit" prefixIcon={<SvgPaperPlaneSolid />} prefixIconFill={theme === THEMES.DARK ? "#1e293b" : "white"}>Send Message</ButtonLink>
                    </div>
                </form>              
            </RoundCornerContainer>
        </ContentSectionContainer>
    )
}

export default ContactFormPanel