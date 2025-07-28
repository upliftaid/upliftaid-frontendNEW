import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavbar";
import ContactForm from "../components/contactUs/ContactForm";
import Header from "../components/contactUs/Header";
import ContactInfo from "../components/contactUs/ContactInfo";

const ContactPage = () => {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <MobileNavbar />

      <section className="grid">
        {/* Header */}
        <Header />

        {/* contact info */}

        <ContactInfo />

        {/* form */}
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
