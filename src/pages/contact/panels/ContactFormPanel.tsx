import { createRef, useContext, useState } from "react";

import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Input, Textarea } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

import { THEMES, ThemeContext } from "../../../components/contexts/ThemeContext";

import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";

import React from "react";
import RoundCornerContainer from "../../../components/containers/RoundCornerContainer";
import SvgPaperPlaneSolid from "../../../components/images/icons/SvgPaperPlaneSolid";
import ButtonLink from "../../../components/navigation/ButtonLink";
import CardHeader from "../../../components/layouts/CardHeader";
import StandardLink from "../../../components/navigation/StandardLink";
import { ErrorBase } from "../../../components/ErrorBase";

type ErrorName = "EMAILJS_ERROR" | "RECAPTCHA_ERROR" | "RECAPTCHA_TIMEOUT_ERROR";

class ContactError extends ErrorBase<ErrorName> { };

const ContactFormPanel = () => {
    const { theme, } = useContext(ThemeContext);
    const [isSubmitButtonDisabled, setSubmitButtonDisabledState] = useState(false);

    const refCaptcha = createRef<ReCAPTCHA>();

    const [mailData, setMailData] = useState({
        from_name: "",
        from_email: "",
        reply_to: "",
        message: "",
    });


    const inputTheme = {
        input: {
            styles: {
                base: {
                    input: {
                        color: theme === THEMES.DARK ? "text-slate-100" : "text-slate-700",
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

    const { from_name, from_email, message } = mailData;
    const onChangeHandler = (e: any) => setMailData({ ...mailData, [e.currentTarget.name]: e.currentTarget.value });
    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Dismiss any lingering toast message.
        toast.dismiss();

        if (from_name.length === 0 || from_email.length === 0 || message.length === 0) {
            toast.dismiss();
            toast.error("All fields are required. Please try again.")
        } else {

            if (refCaptcha.current) {
                setSubmitButtonDisabledState(true);

                toast.promise(
                    refCaptcha.current.executeAsync()
                        .then(async (token) => {
                            // executeAsync can timeout and/or token can be an empty string at this point
                            // make sure it has a value before trying to send.
                            if (token && token.length > 0) {
                                mailData.reply_to = mailData.from_email;

                                const params = {
                                    ...mailData,
                                    "g-recaptcha-response": token,
                                };

                                return await emailjs
                                    .send(
                                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                                        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                                        params,
                                        import.meta.env.VITE_EMAILJS_API_KEY
                                    )
                                    .catch((err) => {
                                        throw new ContactError({
                                            name: "EMAILJS_ERROR",
                                            message: "Send message failed! Please check fields and try again.",
                                            cause: err
                                        })
                                    })
                            } else {
                                throw new ContactError({
                                    name: "RECAPTCHA_TIMEOUT_ERROR",
                                    message: "Unabled to complete reCAPTCHA verification. Please try again in a few minutes.",
                                    cause: null
                                })
                            }
                        })
                        .catch((err) => {
                            if (err instanceof ContactError) {
                                throw err;
                            } else {
                                throw new ContactError({
                                    name: "RECAPTCHA_ERROR",
                                    message: "reCAPTCHA verification failed. Please try again in a few minutes.",
                                    cause: err
                                })
                            }
                        })
                    , {
                        loading: "Sending message...",
                        success: () => {
                            setMailData({ from_name: "", from_email: "", reply_to: "", message: "" });

                            return "Message sent!";
                        },
                        error: (err) => {
                            return err.message ? err.message : "Send message failed!";
                        }
                    },
                    {
                        style: {
                            minWidth: '365px',
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    .finally(() => {
                        setSubmitButtonDisabledState(false);
                    });
            }
        }
    };

    return (
        <ContentSectionContainer flexDirection="Center">
            <div className="flex flex-col items-center w-full gap-8">
                <RoundCornerContainer id="contact-panel" padding="Small" containerClassNames="w-full" bodyClassNames="gap-4">
                    <CardHeader title="What's on your mind?" titleAlignment="Left" />
                    <form onSubmit={onSubmitHandler} className="w-auto round" autoComplete="off">
                        <div className="relative">
                            <div className="space-y-4">
                                <div>
                                    <ThemeProvider value={inputTheme}>
                                        <Input
                                            id="from_name"
                                            name="from_name"
                                            maxLength={50}
                                            autoComplete="off"
                                            variant="standard"
                                            label="Name"
                                            onChange={(e) => onChangeHandler(e)}
                                            value={from_name}
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
                                            id="from_email"
                                            name="from_email"
                                            maxLength={50}
                                            autoComplete="off"
                                            variant="standard"
                                            label="Email"
                                            onChange={(e) => onChangeHandler(e)}
                                            value={from_email}
                                            size="lg"
                                            type="email"
                                            color="gray"
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
                <div className="w-fit">
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        ref={refCaptcha}
                        size="invisible"
                        badge="inline"
                    />
                </div>
            </div>
        </ContentSectionContainer>
    )
}

export default ContactFormPanel