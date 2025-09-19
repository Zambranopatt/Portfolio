import React from "react";
import myImage from "../assets/grad_pic.png";

const About = () => {
  const textJustify = {
    textAlign: "justify",
  };

  return (
    <>
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-20 py-16 bg-black transition-colors">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About Me
          </h1>
          <p
            style={textJustify}
            className="text-lg text-gray-600 dark:text-gray-300 mb-4"
          >
            I’m{" "}
            <span className="font-semibold text-green-600">
              John Patrick Zambrano
            </span>
            , a fresh graduate in Information Technology with a strong passion
            for
            <span className="font-semibold"> web development</span> and modern
            digital solutions.
          </p>
          <p
            style={textJustify}
            className="text-lg text-gray-600 dark:text-gray-300 mb-4"
          >
            I gained practical experience during my internship where I worked on
            creating responsive and user-friendly websites using
            <span className="font-semibold">
              {" "}
              JavaScript, Node.js, and React
            </span>
            . My goal is to continuously grow my skills while contributing to
            meaningful projects.
          </p>
          <p
            style={textJustify}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Outside of coding, I’m eager to learn new technologies, collaborate
            with teams, and solve real-world problems through tech.
          </p>
        </div>

        <div>
          <img
            src={myImage}
            alt="John Patrick Zambrano"
            className="w-80 h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      <section className="bg-black text-white px-20 py-16">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          What I Do
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-gray-400">
              Building responsive and modern UIs using React, Tailwind CSS, and
              JavaScript.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <p className="text-gray-400">
              Creating scalable server-side applications with Node.js, Express,
              and MongoDB.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
            <p className="text-gray-400">
              Applying logical thinking and technical skills to solve real-world
              challenges effectively.
            </p>
          </div>
        </div>
      </section>
      {/* Hobbies Section */}
      <section className="bg-black text-white px-20 py-16">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          My Hobbies
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            🎮
            <h3 className="text-xl font-semibold mt-3">Gaming</h3>
            <p className="text-gray-400">
              Playing strategy and adventure games to relax and improve
              problem-solving.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            📚
            <h3 className="text-xl font-semibold mt-3">Reading</h3>
            <p className="text-gray-400">
              Exploring tech blogs, coding articles, and personal development
              books.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            🎵
            <h3 className="text-xl font-semibold mt-3">Music</h3>
            <p className="text-gray-400">
              Listening to music for inspiration and focus while coding.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition text-center">
            💻
            <h3 className="text-xl font-semibold mt-3">Coding</h3>
            <p className="text-gray-400">
              Practicing new frameworks, solving coding challenges, and building
              side projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
