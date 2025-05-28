import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavbar";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  return (
    <div>
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
