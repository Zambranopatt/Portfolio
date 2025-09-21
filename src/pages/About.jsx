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
      <section className="h-screen overflow-hidden flex w-full p-20 text-white bg-black">
        <div className="space-y-5 w-[50%]">
          <h1 className="text-4xl text-green-500">Why Mern</h1>
          <p className="ques">
            My First programming language to explore is Javascript it is easy
            for me to understand and also i want to become to become web
            developer so i've reseached about it and i found out it can do
            frontend and backend in same programming language.
          </p>
          <p className="ques">
            While in my college days each semester they teached us different
            types of languages like c++, c# , java, php i know each of their
            synstax but i keep learning js fundamentals during night and it
            hooks me like a react HAHAHA kidding aside... so that it will
            enhance my knowledge about the language because i believe that
            consistency is the key so success.
          </p>
          <p className="ques">
            After learning js and creating plain vanilla js projects there was a
            problem when the project is huge or using dom manipulation it is
            difficult to handle, So ive switch to react and learn hooks ,
            components and syntax it made my code efficient and become reusable
            like a funtion.
          </p>
          <p className="ques">
            When im confident in the front-end its time to learn Backend, During
            my 4th year in college we've introduce to python another language
            but i prefer js to backend cause i know it will be easy for me cause
            i know the synstax and workflow so i choose node js.
          </p>
          <p className="ques">
            if there is a backend there should be storage for data i have
            knowledge before in database our school teach us mysql but to
            complete and i've research the best database for node is MongoDb.
          </p>
        </div>
        <div className="w-[50%] flex gap-3 items-center justify-center">
          <div className="w-[400px] h-[400px] flex gap-5 flex-wrap">
            <img className="w-[140px] flex-1" src="react.png" alt="" />
            <img className="w-[140px] flex-1" src="node.png" alt="" />
            <img
              className="w-[140px] bg-white rounded-lg flex-1"
              src="mongo.png"
              alt=""
            />
            <img
              className="w-[140px]  bg-white rounded-lg flex-1"
              src="express.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
