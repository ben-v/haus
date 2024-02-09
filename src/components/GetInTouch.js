import emailjs from '@emailjs/browser';
import { memo, useState } from "react";
import SectionContainer from "./SectionContainer";
import toast, { Toaster } from 'react-hot-toast';

const GetInTouch = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      toast.dismiss();
      toast.error("All fields are required. Please try again.")
    } else {
      toast.promise(
        emailjs
          .send(
            "service_0dzhd2z",  // service id
            "template_3t0snwh", // template id
            mailData,
            "cGpfsTEjddquOdhTO" // public api key
          ), {
        loading: "Sending message...",
        success: (data) => {
          setMailData({ name: "", email: "", message: "" });
          console.log('SEND MESSAGE SUCCESS!', data.status, data.text);
          return "Message sent! I will reply soon.";
        },
        error: (err) => {
          console.log('SEND MESSAGE FAILED...', err);
          return "Send message failed! Please check fields and try again."
        }
      },
        {
          style: {
            minWidth: '390px',
          },
        }
      );
    }
  };
  return (
    <SectionContainer
      sectionName="Contact"
      title={{ first: "get ", last: "in touch" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span>Get</span> <span>In Touch</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa-solid fa-envelope-open" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          <div className="row contact section-padding">
            {/* Contact Infos Starts */}
            <div className="col s12 m5 l5 xl4 leftside-2">
              {/* Contacts Starts */}
              {/* Contacts Ends */}
              {/* Social Media Profiles Starts */}
              <h6 className="font-weight-700 uppercase">
                <span><i className="fa-solid fa-share-nodes"></i></span>Social Profiles
              </h6>
              <div className="social">
                <ul className="list-inline social social-intro center-align p-none">
                  <li className="social-icon">
                    <a
                      href="https://github.com/teqbench"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a
                      href="https://www.linkedin.com/in/benvisintainer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-medium" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col s12 m7 l7 xl8 rightside">
              <h6 className="uppercase m-none font-weight-700">
                <span><i className="fa-solid fa-file-signature"></i></span>Drop me a line
              </h6>
              <div className="row">
                <p className="col s12 m12 l12 xl12 second-font">
                  If you have any suggestions, project ideas, or specific challenges {`you'd`} like to discuss, please fill out the form below to send me a message. Whether {`it's`} innovative technology solutions, process improvements, or collaboration opportunities, {`I'm`} happy to discuss with you and will reply shortly.
                </p>
              </div>
              <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                {/* Name Field Starts */}
                <div className="input-field second-font">
                  <i className="fa-solid fa-user prefix" />
                  <input
                    id="name"
                    name="name"
                    onChange={(e) => onChange(e)}
                    value={name}
                    type="text"
                    className="validate"
                    autoComplete="given-name"
                    required=""
                  />
                  <label className="font-weight-400" htmlFor="name">
                    Your Name
                  </label>
                </div>
                {/* Name Field Ends */}
                {/* Email Field Starts */}
                <div className="input-field second-font">
                  <i className="fa-solid fa-envelope prefix" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={email}
                    className="validate"
                    autoComplete="email"
                    required=""
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                {/* Email Field Ends */}
                {/* Comment Textarea Starts */}
                <div className="input-field second-font">
                  <i className="fa-solid fa-comments prefix" />
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => onChange(e)}
                    value={message}
                    className="materialize-textarea"
                    required=""
                    defaultValue={""}
                  />
                  <label htmlFor="message">Your Message</label>
                </div>
                {/* Comment Textarea Ends */}
                {/* Submit Form Button Starts */}
                <div className="s12 m12 l12 xl12 submit-form">
                  <button
                    className="btn font-weight-700"
                    type="submit"
                    name="send"
                  >
                    Send Message <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
                {/* Submit Form Button Ends */}
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
          <Toaster
            position="top-center"
            toastOptions={{
              // default options
              duration: 5000,

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
              },
            }} />
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(GetInTouch);
