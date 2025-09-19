import React from "react";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Building modern, responsive, and functional websites using React and MERN Stack.",
    },
    {
      icon: "🎨",
      title: "Frontend Development",
      desc: "Creating clean and user-friendly interfaces with HTML, CSS, JavaScript, and React.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Ensuring websites look great on all devices, from desktops to smartphones.",
    },
    {
      icon: "⚙️",
      title: "Full Stack System",
      desc: "Developing complete systems with both frontend and backend integration using MERN stack and REST APIs.",
    },
    {
      icon: "🎬",
      title: "Video Editing",
      desc: "Editing and enhancing videos with creative transitions, effects, and professional finishing touches.",
    },
    {
      icon: "🔧",
      title: "Troubleshooting",
      desc: "Diagnosing and fixing hardware/software issues to keep systems running smoothly.",
    },
  ];

  return (
    <section className="min-h-screen bg-black px-6 py-16 transition-colors">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          My <span className="text-green-500">Services</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          Here are some of the <span className="text-green-500">services</span>{" "}
          I can offer as a fresh IT graduate with a passion for web development:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition"
            >
              <div className="flex justify-center text-5xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
