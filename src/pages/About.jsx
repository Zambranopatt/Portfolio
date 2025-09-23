import React from "react";
import myImage from "../assets/grad_pic.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongo.png";
import expressLogo from "../assets/express.png";

const About = () => {
  const textJustify = {
    textAlign: "justify",
  };

  return (
    <>
      {/* About Me */}
      <section className="secs min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-black transition-colors gap-10">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            About Me
          </h1>
          <p style={textJustify} className="text-lg text-gray-300">
            I’m{" "}
            <span className="font-semibold text-green-500">
              John Patrick Zambrano
            </span>
            , a fresh graduate in Information Technology with a strong passion
            for <span className="font-semibold">web development</span> and
            modern digital solutions.
          </p>
          <p style={textJustify} className="text-lg text-gray-300">
            I gained practical experience during my internship where I worked on
            creating responsive and user-friendly websites using{" "}
            <span className="font-semibold">
              JavaScript, Node.js, and React
            </span>
            . My goal is to continuously grow my skills while contributing to
            meaningful projects.
          </p>
          <p style={textJustify} className="text-lg text-gray-300">
            Outside of coding, I’m eager to learn new technologies, collaborate
            with teams, and solve real-world problems through tech.
          </p>
        </div>

        <div>
          <img
            src={myImage}
            alt="John Patrick Zambrano"
            className="w-72 sm:w-80 md:w-96 h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* What I Do */}
      <section className="bg-black text-white secs px-6 md:px-20 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-12 text-center">
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

      {/* My Hobbies */}
      <section className="bg-black text-white secs px-6 md:px-20 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-12 text-center">
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

      {/* Why Mern */}
      <section className="secs min-h-screen flex flex-col md:flex-row items-center justify-between w-full text-white bg-black px-6 md:px-20 py-16 gap-10">
        {/* Left Side */}
        <div className="space-y-5 w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500">
            Why Mern
          </h1>
          <p className="ques">
            My first programming language to explore is JavaScript. It was easy
            for me to understand, and since I wanted to become a web developer,
            I researched and found out it can do both frontend and backend with
            the same language.
          </p>
          <p className="ques">
            In college, we learned different languages like C++, C#, Java, and
            PHP. I know their syntax, but I focused on JS fundamentals during
            nights—it hooked me like React (haha kidding). Consistency is the
            key to success.
          </p>
          <p className="ques">
            After plain vanilla JS projects, handling huge DOM manipulations was
            difficult. Switching to React made my code efficient and reusable.
          </p>
          <p className="ques">
            When I got confident with frontend, I learned backend. Although we
            were introduced to Python, I preferred Node.js since I already knew
            JS syntax and workflow.
          </p>
          <p className="ques">
            For databases, I had MySQL experience, but for Node.js, MongoDB is
            the best fit. That’s why I embraced the full MERN stack.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 max-w-xs sm:max-w-sm md:max-w-md">
            <img
              className="w-full h-auto object-contain hover:scale-110 transition"
              src={reactLogo}
              alt="React"
            />
            <img
              className="w-full h-auto object-contain hover:scale-110 transition"
              src={nodeLogo}
              alt="Node.js"
            />
            <img
              className="w-full h-auto bg-white rounded-lg object-contain hover:scale-110 transition"
              src={mongoLogo}
              alt="MongoDB"
            />
            <img
              className="w-full h-auto bg-white rounded-lg object-contain hover:scale-110 transition"
              src={expressLogo}
              alt="Express"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
