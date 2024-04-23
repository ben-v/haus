import PageContainer from "../../components/layouts/PageContainer";

import ContactFormSection from "./sections/ContactFormSection";
import ContactMarketingSection from "./sections/ContactMarketingSection";

const ContactPage = () => {
  return (
    <PageContainer
      id="contact"
      titlePartA="Let's"
      titlePartB=" Connect"
      description="If you have project ideas or questions you'd like to discuss, please fill out the form below to send us a message."
      columnA={<ContactFormSection />}
      columnB={<ContactMarketingSection />} />
  )
}

export default ContactPage