import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center border border-amber-900">
      <div className="container-custom mx-auto px-6 border-red-700 border">
        <div className="grid lg:grid-cols-2 gap-10 items-center border border-amber-900">
          {/* Left Side */}
          <div className="border border-amber-600">
            <p className="text-cyan-400 font-medium mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Swapnil Dhotre
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
              MERN Stack Developer
            </h2>

            <p className="text-slate-400 mt-6 max-w-xl leading-relaxed">
              Building scalable web applications using React, Node.js, Express
              and MongoDB. Passionate about responsive UI, REST APIs and
              real-time applications.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
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
              </button>

              <button
                className="
                px-6 py-3
                border border-cyan-500
                rounded-lg
                hover:bg-cyan-500/10
                transition
                "
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center border border-amber-600">
            <div
              className="
              glass
              w-[320px]
              h-[320px]
              flex
              items-center
              justify-center
              text-center
              "
            >
              <div>
                <h3 className="text-2xl font-bold">MERN Developer</h3>

                <p className="text-slate-400 mt-3">React • Node • Express • MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
