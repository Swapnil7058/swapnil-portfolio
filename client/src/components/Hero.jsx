import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative overflow-hidden min-h-screen flex items-center pt-24"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className=" absolute bottom-20 right-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="container-custom mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-medium mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Swapnil Dhotre
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
              Building Scalable <br />
              Full-Stack Applications <br />
              with MERN Stack
            </h2>

            <p className="text-slate-400 mt-6 max-w-xl leading-relaxed">
              Building scalable web applications using React, Node.js, Express
              and MongoDB. Passionate about responsive UI, REST APIs and
              real-time applications.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a
              href="#projects"
                className="
                px-6 py-3
                bg-cyan-500
                rounded-lg
                font-semibold
                hover:bg-cyan-600
                transition
                "
              >
                View Projects
              </a>

              <a
                href="/Swapnil_Dhotre_Resume(1).pdf"
                download
                className=" px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/Swapnil7058"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  size={26}
                  className="cursor-pointer hover:text-cyan-400 transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/swapnil-dhotre-726b421a4/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={26}
                  className="cursor-pointer hover:text-cyan-400 transition"
                />
              </a>
              <a
                href="mailto:swapnildhotre9767gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope
                  size={26}
                  className="cursor-pointer hover:text-cyan-400 transition"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div
              className="
              glass
              w-[380px]
              h-[380px]
              flex
              items-center
              justify-center
              text-center
              "
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-10">
                  Freelance MERN Developer
                </h3>
                {/* <br /> */}
                <h3 className="text-2xl font-bold mb-10">
                  🏆 BuildX India Hackathon Ranked Top 20
                </h3>
                {/* <br /> */}

                <p className="text-slate-400 mt-3">
                  React • Node • Express • MongoDB
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
