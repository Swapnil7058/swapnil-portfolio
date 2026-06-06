import React from "react";

const Navbar = () => {
  return (
    <header
      className="
    fixed
    top-0
    left-0
    w-full
    z-50
    background-blur-md
    bg-slate-900/70
    border-b
    border-slate-800
    "
    >
      <div className=" container-custom mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <a href="#home" className="text-2xl font-bold text-cyan-400">
            Swapnil.dev
          </a>

          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
