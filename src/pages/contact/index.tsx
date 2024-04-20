import FormPageWithMarketing from "../../components/layouts/FormPageWithMarketing";

import ContactForm from "./sections/ContactForm";
import TestamonialCard from "../../components/cards/TestamonialCard";
import SocialLinksCard from "../common/SocalLinksCard";

const marketingCards = () => {
  return (
    <>
      <TestamonialCard
        padding="Large"
        reviewerName="Kayla C."
        date="4/17/24"
        stars={5}
        source="Google"
        reviewText="HAUS did a fantastic job.  Ben was very professional, arrived on time and was always easy to communicate with.  The new shelving looks great!  I highly recommend them." />
      <SocialLinksCard />
    </>
  )
};

const ContactPage = () => {
  return (
    <FormPageWithMarketing
      id="contact"
      titlePartA="Let's"
      titlePartB=" Connect"
      description="If you have project ideas or questions you'd like to discuss, please fill out the form below to send us a message."
      formCard={<ContactForm />}
      marketingCards={marketingCards()} />
  )
}

export default ContactPage