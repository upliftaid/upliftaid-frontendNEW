import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../constants/Portfolio/Projects";

const ProjectCard = ({ title, description, image, slug }) => (
  <Link
    to={`/portfolio/${slug}`}
    className="block h-full"
  >
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#00733C] transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </div>
        <p className="mt-4 text-green-600 text-sm font-medium hover:underline">
          Learn more →
        </p>
      </div>
    </div>
  </Link>
);

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      className="py-20 bg-gray-50 font-[Poppins]"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-16 flex flex-col items-center">
          <h1 className="text-[42px] text-gray-900">
            Our Projects
          </h1>
          <div className="w-60 h-1 bg-[#00733C]" />
          <p className="mt-4 text-gray-600 text-lg">
            Take a look at some of the impactful work we’ve done so far.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-5 py-3 pr-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-4 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filter */}
          <div className="w-full md:w-1/6 relative">
            <select
              className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition-all cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option
                  key={category}
                  className="text-gray-700 bg-white"
                >
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
