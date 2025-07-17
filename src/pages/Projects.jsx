import React from 'react';

const projects = [
  {
    title: 'CR7 Page',
    tech: ['HTML', 'CSS'],
    link: 'https://cr7-page.vercel.app/',
  },
  {
    title: 'My Gallery',
    tech: ['HTML', 'CSS'],
    link: 'https://my-gallery-pied.vercel.app/',
  },
  {
    title: 'My Bio',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://mybio-pearl.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" shadow-md rounded-lg p-4 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold  text-green-600 mb-2">{project.title}</h2>
          <ul className="mb-3 text-sm text-white">
            {project.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
