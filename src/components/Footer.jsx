import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="text-white font-bold text-lg">Enes Erbap</div>

        <div className="flex gap-6 mt-2">
          <a
            href="mailto:enes@example.com"
            className="hover:text-blue-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-gray-400 mt-4 text-center">
          &copy; {new Date().getFullYear()} Enes Erbap. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
