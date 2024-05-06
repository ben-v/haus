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
import { Input, Textarea } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

const ContactFormPanel = () => {
    const { theme, } = useContext(ThemeContext);

    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const inputTheme = {
        input: {
            styles: {
                variants: {
                    standard: {
                        base: {
                            input: {
                                // The border by default is rounded, and on iPhone appears, whereas on desktop, even in emulator, 
                                // appears correct. Force to be a square edge input using theme.
                                borderWidth: "border-b !rounded-none"
                            }
                        }
                    }
                },
            },
        }
    };

    const textareaTheme = {
        textarea: {
            styles: {
                variants: {
                    standard: {
                        base: {
                            textarea: {
                                // The border by default is rounded, and on iPhone appears, whereas on desktop, even in emulator, 
                                // appears correct. Force to be a square edge input using theme.
                                borderWidth: "border-b !rounded-none"
                            }
                        }
                    }
                },
            },
        }
    };    

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
                <form onSubmit={onSubmitHandler} className="w-auto round" autoComplete="off">
                    <div className="relative">
                        <div className="space-y-4">
                            <div>
                                <ThemeProvider value={inputTheme}>
                                    <Input
                                        id="name"
                                        name="name"
                                        maxLength={50}
                                        autoComplete="off"
                                        variant="standard"
                                        label="Name"
                                        onChange={(e) => onChangeHandler(e)}
                                        value={name}
                                        size="md"
                                        type="text"
                                        required={true}
                                        crossOrigin={undefined} />
                                </ThemeProvider>
                            </div>
                            <div>
                                <ThemeProvider value={inputTheme}>
                                    <Input
                                        id="email"
                                        name="email"
                                        maxLength={50}
                                        autoComplete="off"
                                        variant="standard"
                                        label="Email"
                                        onChange={(e) => onChangeHandler(e)}
                                        value={email}
                                        size="md"
                                        type="email"
                                        required={true}
                                        crossOrigin={undefined} />
                                </ThemeProvider>
                            </div>
                            <div>
                                <ThemeProvider value={textareaTheme}>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        maxLength={4000}
                                        autoComplete="off"
                                        variant="standard"
                                        label="Message"
                                        onChange={(e) => onChangeHandler(e)}
                                        value={message}
                                        size="md"
                                        required={true} />
                                </ThemeProvider>
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