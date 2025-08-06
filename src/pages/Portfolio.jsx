import React from "react";

// Project data
const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing clean water to rural communities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6cddAl1Eq4QIJrSFSt7qDiO_vmiqBc27dr5V_kWb4PbBckbCCA4uc_RIZA8dHKFmRfE&usqp=CAU",
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    description: "Planted 1000+ trees across urban areas.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOffoYLDC96nalI-nNNURG0iFvH8z7mB3PIJi7dwwMeUVk2FPHi8WDxrRpvc3ilra2aw&usqp=CAU",
  },
  {
    id: 3,
    title: "Free Health Camp",
    description: "Medical aid to over 2,000 villagers.",
    image: "https://nludelhi.ac.in/wp-content/uploads/2024/04/Health-Camp.jpg",
  },
  {
    id: 4,
    title: "Girls' Education Program",
    description: "Empowering girls through access to education.",
    image: "https://chordindia.org/wp-content/uploads/2020/06/disha-chord6.jpg",
  },
];

// Individual project card component
const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 group">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#00733C] transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Main portfolio section
const Portfolio = () => {
  return (
    <section
      className="block py-25 bg-gray-50"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Take a look at some of the impactful work we’ve done so far.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
