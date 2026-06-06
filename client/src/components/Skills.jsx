import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Socket.IO",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];
const Skills = () => {
  return (
    <section id="skills" className=" py-24">
      <div className="container-custom mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass p-6"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <h3 className="text-xl font-bold to-cyan-400 mb-4">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
