import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../constants/Portfolio/Projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <Link
            to="/portfolio"
            className="text-green-600 underline hover:text-green-700 transition"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-25 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          to="/portfolio"
          className="text-green-600 hover:text-green-700 text-sm mb-6 inline-block transition"
        >
          ← Back to Portfolio
        </Link>

        {/* Project Banner */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700 mb-6">
              <div>
                <p className="text-lg font-semibold text-green-600">
                  {project.donations}
                </p>
                <span>Total Donations</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-green-600">
                  {project.peopleHelped}
                </p>
                <span>People Helped</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-green-600">
                  {project.stats.volunteers}+
                </p>
                <span>Volunteers Involved</span>
              </div>
            </div>

            {/* Join Program Button */}
            <button className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition">
              Join This Program
            </button>
          </div>
        </div>

        {/* Past Events Timeline */}
        {project.pastEvents?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Past Events
            </h2>
            <div className="relative border-l-2 border-green-600 pl-6 space-y-8">
              {project.pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-[7px] top-1.5 items-center" />
                  <div className="ml-4">
                    <p className="text-lg text-gray-800 font-medium">
                      {event.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.gallery?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  loading="lazy"
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 sm:h-56 object-cover rounded-md shadow-md hover:opacity-90 transition"
                />
              ))}
            </div>
          </div>
        )}

        {/* Volunteers */}
        {project.volunteers?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Volunteers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.volunteers.map((volunteer, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition"
                >
                  <img
                    src={volunteer.image}
                    loading="lazy"
                    alt={volunteer.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {volunteer.name}
                    </h4>
                    <p className="text-sm text-gray-500">{volunteer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
