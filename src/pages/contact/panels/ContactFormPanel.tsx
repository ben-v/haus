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
    const [isSubmitButtonDisabled, setSubmitButtonDisabledState] = useState(false);

    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const inputTheme = {
        input: {
            styles: {
                base: {
                    input: {
                        color: theme === THEMES.DARK ? "text-slate-100" : "text-slate-700",
                        fontFamily: "Urbanist"
                    },
                    label: {
                        color: `peer-placeholder-shown:${theme === THEMES.DARK ? "text-slate-100" : "text-slate-700"}`
                    }
                },
                variants: {
                    standard: {
                        base: {
                            input: {
                                color: theme === THEMES.DARK ? "!text-slate-100" : "!text-slate-700",
                                // The border by default is rounded, and on iPhone appears, whereas on desktop, even in emulator, 
                                // appears correct. Force to be a square edge input using theme provider.
                                borderWidth: "border-b !rounded-none",
                                borderColor: `placeholder-shown:${theme === THEMES.DARK ? "border-slate-100" : "border-slate-700"}`
                            },
                            label: {
                                fontFamily: "Urbanist",
                                fontSize: "peer-placeholder-shown:text-base",
                                floated: {
                                    fontSize: "text-[14px] peer-focus:text-[14px]",
                                },
                            }
                        },
                        sizes: {
                            md: {
                                input: {
                                    fontSize: "text-base",
                                }
                            },
                            lg: {
                                input: {
                                    fontSize: "text-base",
                                }
                            }
                        },
                        colors: {
                            input: {
                                gray: {
                                    borderColor: `${theme === THEMES.DARK ? "border-slate-100" : "border-slate-700"}`,

                                    // The following is the color of the border when the input/textarea received focus.
                                    borderColorFocused: `focus:${theme === THEMES.DARK ? "border-slate-100" : "border-slate-700"}`,
                                }
                            },
                            label: {
                                gray: {
                                    color: theme === THEMES.DARK ? "text-slate-100" : "text-slate-700",
                                    // The following is the color of the border after the input/textarea received focus and, depending on the applied variant, animation/effect.
                                    after: `${theme === THEMES.DARK ? "after:border-slate-100 peer-focus:after:border-slate-100" : "after:border-slate-700 peer-focus:border-slate-700"}`,
                                }
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
                base: {
                    textarea: {
                        color: theme === THEMES.DARK ? "text-slate-100" : "text-slate-700",
                        fontFamily: "Urbanist"
                    },
                    label: {
                        color: `peer-placeholder-shown:${theme === THEMES.DARK ? "text-slate-100" : "text-slate-700"}`
                    }
                },
                variants: {
                    standard: {
                        base: {
                            textarea: {
                                color: theme === THEMES.DARK ? "!text-slate-100" : "!text-slate-700",
                                // The border by default is rounded, and on iPhone appears, whereas on desktop, even in emulator, 
                                // appears correct. Force to be a square edge input using theme provider.
                                borderWidth: "border-b !rounded-none",
                                borderColor: `placeholder-shown:${theme === THEMES.DARK ? "border-slate-100" : "border-slate-700"}`
                            },
                            label: {
                                fontFamily: "Urbanist",
                                fontSize: "peer-placeholder-shown:text-base",
                                floated: {
                                    fontSize: "text-[14px] peer-focus:text-[14px]",
                                },
                            }
                        },
                        sizes: {
                            md: {
                                textarea: {
                                    fontSize: "text-base",
                                }
                            },
                            lg: {
                                textarea: {
                                    fontSize: "text-base",
                                }
                            }
                        },
                        colors: {
                            textarea: {
                                gray: {
                                    borderColor: `${theme === THEMES.DARK ? "border-slate-100" : "border-slate-700"}`,

                                    // The following is the color of the border when the input/textarea received focus.
                                    borderColorFocused: `focus:${theme === THEMES.DARK ? "border-slate-100" : "border-slate-700"}`,
                                }
                            },
                            label: {
                                gray: {
                                    color: theme === THEMES.DARK ? "text-slate-100" : "text-slate-700",
                                    // The following is the color of the border after the input/textarea received focus and, depending on the applied variant, animation/effect.
                                    after: `${theme === THEMES.DARK ? "after:border-slate-100 peer-focus:after:border-slate-100" : "after:border-slate-700 peer-focus:border-slate-700"}`,
                                }
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
            setSubmitButtonDisabledState(true);

            toast.promise(
                emailjs
                    .send(
                        "service_209h8xe",  // service id
                        "template_x639n8l", // template id
                        mailData,
                        "cGpfsTEjddquOdhTO" // public api key
                    ), {
                loading: "Sending message...",
                success: (data) => {
                    setSubmitButtonDisabledState(false);

                    setMailData({ name: "", email: "", message: "" });
                    console.log('SEND MESSAGE SUCCESS!', data.status, data.text);
                    
                    return "Message sent!";
                },
                error: (err) => {
                    console.log('SEND MESSAGE FAILED...', err);
                    setSubmitButtonDisabledState(false);
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
                                        size="lg"
                                        type="text"
                                        color="gray"
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
                                        size="lg"
                                        type="email"
                                        // color="gray"
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
                                        color="gray"
                                        size="lg"
                                        required={true} />
                                </ThemeProvider>
                            </div>
                        </div>

                        <p className="my-8 body-text tabpanel-text">By clicking submit below, you agree to the processing of your personal information by HAUS Property Services as described in our <StandardLink url="/privacy"><span className="font-semibold body-link">Privacy Policy</span></StandardLink>.</p>

                        <ButtonLink type="submit" prefixIcon={<SvgPaperPlaneSolid />} prefixIconFill={theme === THEMES.DARK ? "#1e293b" : "white"} disabled={isSubmitButtonDisabled}>Send Message</ButtonLink>
                    </div>
                </form>
            </RoundCornerContainer>
        </ContentSectionContainer>
    )
}

export default ContactFormPanel