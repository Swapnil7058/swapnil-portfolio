import React from "react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
    <div className="absolute top-24 left-1/3 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      {/* <div className=" absolute bottom-20 right-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div> */}
      <div className="container-custom mx-auto px-6 z-10 relative">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="glass p-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            I am a MERN Stack Developer with hands-on experience building
            full-stack applications using React.js, Node.js, Express.js, and
            MongoDB. I have developed scalable projects including and Alumni
            Connect Platform, a Moving Service Management System and a Food
            Recipe Application. My focus is on creating responsive user
            interfaces, secure REST APIs, authentication systems and real-time
            application using Socket.IO.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="glass p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">Top 20</h3>

            <p>BuildX India Hackathon</p>
          </div>

          <div className="glass p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">MERN</h3>

            <p>Full Stack Internship</p>
          </div>

          <div className="glass p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">3+</h3>

            <p>Production Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
