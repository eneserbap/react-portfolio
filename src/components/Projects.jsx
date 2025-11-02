import React from "react";

function Projects() {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      description:
        "Gerçek zamanlı stok yönetimi ve güvenli ödeme entegrasyonu olan modern bir e-ticaret platformu.",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    },
    {
      title: "Görev Yönetim Uygulaması",
      description:
        "Gerçek zamanlı güncellemeler ve takım işbirliği özellikleri olan görev yönetim aracı.",
      tags: ["React", "Firebase", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    },
    {
      title: "Hava Durumu Paneli",
      description:
        "Tahminler, haritalar ve konum tabanlı hava durumu uyarıları içeren güzel bir hava durumu uygulaması.",
      tags: ["React", "API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Projelerim</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yeteneklerimi ve geliştirme tutkumu sergileyen son projelerimden
            bazıları
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}

export default Projects;
