import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import images
import aiResumeImg from "../assets/projects/ai-resume-hr.png";
import echoNestImg from "../assets/projects/echonest.png";
import mentalWellnessImg from "../assets/projects/mental-wellness.png";

const projectList = [
  {
    name: "AI Resume HR",
    description: "AI-powered resume platform for HR automation.",
    github: "https://github.com/GaniBasha/ai-resume-hr",
    live: "https://ganibasha.github.io/ai-resume-hr/",
    image: aiResumeImg,
  },
  {
    name: "EchoNest",
    description: "Music web app with personalized recommendations.",
    github: "https://github.com/GaniBasha/EchoNest",
    live: "https://ganibasha.github.io/EchoNest/#/login",
    image: echoNestImg,
  },
  {
    name: "Mental Wellness Website",
    description: "Platform for mental health awareness and resources.",
    github: "https://github.com/GaniBasha/mental-wellness-website",
    live: "https://ganibasha.github.io/mental-wellness-website/#/login",
    image: mentalWellnessImg,
  },
];

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.9) {
          setVisibleIndex((prev) => Math.max(prev, index));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="min-h-screen py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {projectList.map((project, index) => (
          <div
            key={project.name}
            className={`project-card bg-gray-950 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 transition-opacity ease-out ${
              index <= visibleIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-400 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
