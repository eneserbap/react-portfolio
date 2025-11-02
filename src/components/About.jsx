import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 opacity-0 animate-fadeInUp">
            <span className="text-blue-600">Hakkımda</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full opacity-0 animate-fadeInUp animate-delay-200"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative opacity-0 animate-fadeInUp animate-delay-400">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

              <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm ml-4">Enes.jsx</div>
                </div>

                <div className="p-6 font-mono text-sm leading-relaxed space-y-2">
                  <div className="text-purple-400">
                    <span className="text-pink-400">const</span> developer = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">name:</span>{" "}
                    <span className="text-green-400">"Enes"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-400">"Software Engineer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">skills:</span> [
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400">"React"</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400">"JavaScript"</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400">"Node.js"</span>
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-blue-400">passion:</span>{" "}
                    <span className="text-green-400">"Building amazing apps"</span>
                  </div>
                  <div className="text-purple-400">{"}"}</div>
                  <div className="pt-4 text-gray-500">// Always learning & growing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fadeInUp animate-delay-600">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Öğrenmeye Açık Yazılım Geliştirici
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Karmaşık sorunlara zarif çözümler üretme konusunda derin bir
              tutkuya sahip bir yazılım mühendisiyim. Web geliştirme yolculuğum
              merakla başladı ve kullanıcı merkezli uygulamalar oluşturmaya
              odaklanan özverili bir kariyere dönüştü.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Modern web teknolojileri, özellikle React ve JavaScript ekosistemi
              konusunda uzmanım. Temiz, verimli kod ve özenli tasarımla
              fikirleri gerçeğe dönüştürmeyi seviyorum.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Yıllık </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
        </div>
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
          animation: fadeInUp 0.8s forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}

export default About;
