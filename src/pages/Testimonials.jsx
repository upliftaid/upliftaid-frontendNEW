import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavBar";
import Navbar from "../layout/Navbar";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Community Leader",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "This organization has transformed our village's access to clean water. We now have hope and health.",
  },
  {
    name: "Rahul Verma",
    role: "Youth Volunteer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Volunteering here changed my life. I’ve grown as a person while making a real difference in others’ lives.",
  },
  {
    name: "Maria Gomez",
    role: "Health Program Beneficiary",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Because of their support, I received the treatment I desperately needed. Eternally grateful.",
  },
  {
    name: "David Ncube",
    role: "Clean Energy Advocate",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    message:
      "They helped install solar panels in our school. Kids now study even after sunset.",
  },
  {
    name: "Ananya Sharma",
    role: "Scholarship Recipient",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    message:
      "I dreamt of going to college but couldn’t afford it. Their scholarship made that dream real.",
  },
  {
    name: "Joseph Mwangi",
    role: "Agricultural Support Beneficiary",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    message:
      "Thanks to their training program, my farm yields have doubled. I can now support my family with pride.",
  },
  {
    name: "Lina Petrova",
    role: "Women Empowerment Advocate",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Through their workshops, I learned new skills and started my own small business. I feel truly empowered.",
  },
  {
    name: "Samuel Boateng",
    role: "Disaster Relief Survivor",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    message:
      "They were the first to reach our flooded village with food and shelter. We'll never forget their kindness.",
  },
  {
    name: "Meera Joshi",
    role: "School Principal",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    message:
      "With their help, we built a new classroom block and now accommodate 100 more students.",
  },
  {
    name: "Carlos Ramirez",
    role: "Mental Health Program Participant",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    message:
      "Talking to the counselors changed my perspective on life. I’m mentally stronger and happier now.",
  },
  {
    name: "Fatima Noor",
    role: "Refugee Camp Volunteer",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    message:
      "They gave us tools and hope to rebuild our lives. Their impact will last for generations.",
  },
  {
    name: "Omar El-Sayed",
    role: "Tech Skill Trainee",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    message:
      "I joined their digital skills program and now have a full-time job in IT. Life-changing!",
  },
];


const Testimonials = () => {
  return (
    <>
    
      <Navbar/>
      <MobileNavbar/>
      {/* Hero Section */}
      <div className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] flex items-center justify-center px-4 overflow-hidden font-[Poppins] mt-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9037596/pexels-photo-9037596.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            opacity: 0.5,
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Testimonials
          </h1>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-20 h-20 rounded-full mb-4 object-cover"
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
              />
              <h3 className="text-xl font-semibold text-[#00733C]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
              <p className="text-gray-700 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </section>
      
      <Footer/>
    </>
  );
};

export default Testimonials;
