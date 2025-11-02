import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Araçlar & Diğer",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "Next.js", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Yeteneklerim</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern web teknolojileri ve araçlar konusunda deneyimim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">9+</div>
            <div className="text-gray-600">Teknoloji</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
            <div className="text-gray-600">Yıl Deneyim</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-600">Proje</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
