import emailjs from "@emailjs/browser";
import { useContext, useState } from "react";
import { THEMES, ThemeContext } from "../../../components/contexts/ThemeContext";
import { Input, Textarea, ThemeProvider } from "@material-tailwind/react";

import toast from 'react-hot-toast';
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

import React from "react";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgPaperPlaneSolid from "../../../components/images/icons/SvgPaperPlaneSolid";
import ButtonLink from "../../../components/navigation/ButtonLink";
import CardHeader from "../../../components/layouts/CardHeader";
import StandardLink from "../../../components/navigation/StandardLink";

const ContactFormPanel = () => {
    const { theme, } = useContext(ThemeContext);
    const [isNameValidState, setIsNameValidState] = useState<boolean>(true);
    const [isEmailValidState, setIsEmailValidState] = useState<boolean>(true);
    const [isMessageValidState, setIsMessageValidState] = useState<boolean>(true);

    // Override the input/textarea theme colors to match applications. Have to repurpose
    // material's defined colors...can't add new ones.
    const inputTheme = {
        input: {
            styles: {
                variants: {
                    standard: {
                        colors: {
                            input: {
                                white: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  },                                
                                  gray: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  }
                            },
                            label: {
                                white: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  },     
                                  gray: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  }
                            } 
                        }
                    },
                },
            },
        }
    };

    const textAreaTheme = {
        textarea: {
            styles: {
                variants: {
                    standard: {
                        colors: {
                            textarea: {
                                white: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  },                                
                                  gray: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  }
                            },
                            label: {
                                white: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  },     
                                  gray: {
                                    color: "!text-slate-100",
                                    borderColor: "border-slate-100",
                                    borderColorFocused: "focus:border-slate-100",
                                  }
                            } 
                        }
                    },
                },
            },
        }
    };

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

            setIsNameValidState(name.length > 0);
            setIsEmailValidState(email.length > 0);
            setIsMessageValidState(message.length > 0);
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
                    setIsNameValidState(true);
                    setIsEmailValidState(true);
                    setIsMessageValidState(true);

                    setMailData({ name: "", email: "", message: "" });
                    console.log('SEND MESSAGE SUCCESS!', data.status, data.text);
                    return "Message sent!";
                },
                error: (err) => {
                    setIsNameValidState(true);
                    setIsEmailValidState(true);
                    setIsMessageValidState(true);

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
                            <ThemeProvider value={inputTheme}>
                                <Input
                                    id="name"
                                    name="name"
                                    variant="standard"
                                    label="Name"
                                    color={theme == THEMES.DARK ? "white" : "blue-gray"}
                                    required={true}
                                    maxLength={50}
                                    onChange={(e) => onChangeHandler(e)}
                                    value={name}
                                    type="text"
                                    autoComplete="off"
                                    crossOrigin=""
                                    error={!isNameValidState}/>
                                </ThemeProvider>
                            </div>
                            <div>
                            <ThemeProvider value={inputTheme}>
                                <Input
                                    id="email"
                                    name="email"
                                    variant="standard"
                                    label="Email"
                                    color={theme == THEMES.DARK ? "white" : "blue-gray"}
                                    required={true}
                                    maxLength={50}
                                    onChange={(e) => onChangeHandler(e)}
                                    value={email}
                                    type="email"
                                    autoComplete="off"
                                    crossOrigin=""
                                    error={!isEmailValidState}/>
                                </ThemeProvider>
                            </div>
                            <div>
                            <ThemeProvider value={textAreaTheme}>
                                <Textarea
                                    id="message"
                                    name="message"
                                    variant="standard"
                                    label="Message"
                                    color={theme == THEMES.DARK ? "white" : "blue-gray"}
                                    required={true}
                                    onChange={(e) => onChangeHandler(e)}
                                    value={message}
                                    defaultValue={""}
                                    maxLength={4000}
                                    error={!isMessageValidState} />
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