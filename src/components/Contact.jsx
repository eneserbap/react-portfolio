import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="text-blue-600">İletişim</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Bana ulaşmak için aşağıdaki seçeneklerden birini kullanabilirsiniz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <a
            href="mailto:enes@example.com"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all duration-200"
          >
            <Mail className="text-blue-600 w-6 h-6" />
            <span className="text-gray-700 text-sm">enes@example.com</span>
          </a>

          <a
            href="tel:+905555555555"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all duration-200"
          >
            <Phone className="text-green-600 w-6 h-6" />
            <span className="text-gray-700 text-sm">+90 555 555 555</span>
          </a>

          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all duration-200"
          >
            <Github className="text-gray-800 w-6 h-6" />
            <span className="text-gray-700 text-sm">github.com/username</span>
          </a>

          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all duration-200"
          >
            <Linkedin className="text-blue-600 w-6 h-6" />
            <span className="text-gray-700 text-sm">
              linkedin.com/in/username
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
