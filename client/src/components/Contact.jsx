import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className=" absolute top-32 right-2/5 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      {/* <div className="absolute bottom-16 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div> */}

      <div className="container-custom mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Contact Me</h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <a
                  href="mailto:swapnildhotre9767@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  swapnildhotre9767@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-xl" />
                <a
                  href="tel:+917058557532"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 70585 57532
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <span>Pune, Maharashtra, India</span>
              </div>

              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/Swapnil7058"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    size={28}
                    className="hover:text-cyan-400 transition"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/swapnil-dhotre-726b421a4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin
                    size={28}
                    className="hover:text-cyan-400 transition"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="glass p-8">
            <div className="glass p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                Have a Project in Mind?
              </h3>

              <p className="text-slate-400 mb-8">
                I'm currently open to internships, freelance projects and
                full-time opportunities.
              </p>

              <a
                href="mailto:swapnildhotre9767@gmail.com"
                className=" 
                px-8 
                py-4
                bg-cyan-500
                rounded-lg
                font-semibold
                hover:bg-cyan-600
                transition
                flex
                items-center
                gap-3
              "
              >
                <FaEnvelope />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
