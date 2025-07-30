import ContactForm from "../components/contactUs/ContactForm";
import Header from "../components/contactUs/Header";
import ContactInfo from "../components/contactUs/ContactInfo";

const ContactPage = () => {
  return (
    <div className="font-[Poppins]">

      <section className="grid">
        {/* Header */}
        <Header />

        {/* contact info */}

        <ContactInfo />

        {/* form */}
        <ContactForm />
      </section>

    </div>
  );
};

export default ContactPage;
