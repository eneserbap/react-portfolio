import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="hero"
          onClick={(e) => {
            e.preventDefault();
            const hero = document.getElementById("hero");
            if (hero) hero.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-2xl font-bold text-blue-600"
        >
          Enes
        </a>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => handleScrollTo("about")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Hakkımda
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Projeler
          </button>
          <button
            onClick={() => handleScrollTo("skills")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Yetenekler
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            İletişim
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 focus:outline-none"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <button
            onClick={() => handleScrollTo("about")}
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Hakkımda
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Projeler
          </button>
          <button
            onClick={() => handleScrollTo("skills")}
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Yetenekler
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            İletişim
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
