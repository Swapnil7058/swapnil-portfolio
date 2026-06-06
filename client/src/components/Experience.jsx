import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "Freelance MERN Developer",
    company: "Alumni Connect Platform",
    description:
      "Developed a role-based Alumni Connect platform using React, Flask, MongoDB, JWT authentication and Socket.IO. Secured Top 20 position at BuildX India Hackathon.",
  },
  {
    year: "2025",
    title: "Software Engineer Intern",
    company: "Jyesta Pvt Ltd",
    description:
      "Build a moving-sevice management platform using React, Node.js, Express.js, MongoDB, JWT and Socket.IO.",
  },
  {
    year: "2024",
    title: "MERN Stack Training",
    company: "SpeedUP Infotech",
    description:
      "Learned React.js, Node.js, Express.js, MongoDB and built multiple full-stack applications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container-custom mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>

        <div className="relative border-l border-slate-700 ml-4">
          {experience.map((exp, index) => (
            <motion.div
            key={index}
            className="mb-12 ml-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
                {/* Timeline Dot */}

                <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2"></div>

                <div className="glass p-6">
                    <span className="text-cyan-400 font-semibold">
                        {exp.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-2">
                        {exp.title}
                    </h3>

                    <p className="text-slate-400 mt-1">
                        {exp.company}
                    </p>

                    <p className="text-slate-300 mt-4">
                        {exp.description}
                    </p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;