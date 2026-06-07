import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const project = [
  {
    title: "Alumni Connect Platform",
    description:
      "Role-based platform connecting students and alumni with mentorship, networking, job posting portal, real-time chat, JWT authentication, and admin dashboards.",
    tech: ["React", "Tailwind", "Flask", "MongoDB", "Socket.IO", "JWT"],
    github: "https://github.com/Swapnil7058/Alumni-Connect-Platform.git",
    demo: "#",
  },
  {
    title: "Students Driven Moving and Transport Service Platform",
    description:
      "Full-stack management system for quotes, booking, workforce allocation, OTP verification and real-time move tracking.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Twillio",
      "Socket.IO",
      "JWT",
    ],
    github: "https://github.com/Swapnil7058/Student-Driven-Moving-and-Transport-Service-Platform.git",
    demo: "#",
  },

  {
    title: "Food Recipe Application",
    description:
      "Recipe browsing application with 14,000+ Indian recipes, advanced search, filtering and optimized data rendering.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/Swapnil7058/Food-Recipes-Explorer-Platform.git",
    demo: "https://food-recipes-explorer-platform.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" relative py-24">
      <div className=" absolute top-16 right-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-16 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="container-custom mx-auto px6">
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {project.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-6 flex flex-col"
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                     bg-slate-800
                     px-3
                     py-1
                     rounded-full
                     text-sm
                     text-cyan-400
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  border border-cyan-500
                  hover:bg-cyan-500/10
                  transition
                "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2
                  px-4 py-2
                  bg-cyan-600
                  transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
