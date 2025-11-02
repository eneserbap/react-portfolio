import React from "react";

function Hero() {
  return (
    <header
      id="hero"
      className="relative bg-white min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[pulse_6s_ease-in-out_infinite]"></div>

        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[pulse_7s_ease-in-out_infinite]"></div>

        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-[pulse_8s_ease-in-out_infinite]"></div>

        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[pulse_9s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 opacity-0 animate-fadeInUp">
          Merhaba, ben <span className="text-blue-600">Enes</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed opacity-0 animate-fadeInUp animate-delay-200">
          Modern web uygulamaları geliştirmeye odaklı tutkulu bir yazılım
          mühendisiyim, özellikle React ve güncel teknolojilerle çalışıyorum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 opacity-0 animate-fadeInUp animate-delay-400">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Çalışmalarımı Gör
          </a>

          <a
            href="contact"
            onClick={(e) => {
              e.preventDefault(); // varsayılan jump engelle
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105"
          >
            İletişime Geç
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </header>
  );
}

export default Hero;
