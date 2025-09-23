import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/grad_pic.png";
import js from "../assets/js.jpg";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";
import ts from "../assets/ts.png";
import postman from "../assets/postman.png";
import tw from "../assets/tw.png";
import gym2 from "../assets/gym2.png";
import ec from "../assets/e_commerce.png";
import personnel from "../assets/personnel.png";
import { Mail, Phone, MapPin, Github, Facebook } from "lucide-react";

const Home = () => {
  const convert = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const stacks = [
    { img: html, tech: "Html", desc: "For structure" },
    { img: css, tech: "Css", desc: "For design" },
    { img: js, tech: "Javascript", desc: "For functions and Interactive" },
    { img: react, tech: "react", desc: "Js library / Frontend" },
    { img: node, tech: "node", desc: "Backend" },
    { img: ts, tech: "TypeScript", desc: "For type scripting" },
    { img: express, tech: "express", desc: "Node Framework" },
    { img: tw, tech: "Tailwind", desc: "Css framework" },
    { img: postman, tech: "Postman", desc: "Api Testing" },
    { img: mongo, tech: "mongo", desc: "Database" },
    { img: git, tech: "Git", desc: "Version control" },
  ];

  const projects = [
    {
      img: ec,
      name: "E-Commerce Website",
      description:
        "An online shopping platform with product listings, shopping cart, checkout, and order tracking.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      img: personnel,
      name: "Personnel Management System",
      description:
        "A system to manage employee records, attendance, payroll, and user authentication.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      img: "POS",
      name: "Point of Sale (POS) System",
      description:
        "A POS application for handling sales, inventory management, and generating receipts.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      img: gym2,
      name: "Gym Attendance Management System",
      description:
        "A system to track gym member attendance, manage subscriptions, and generate reports.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <>
      <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-15 lg:px-20 bg-black w-screen">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6">
            Hi, I'm{" "}
            <span className="text-green-600">John Patrick Zambrano</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8">
            Fresh Graduate in Information Technology | Aspiring Web Developer
            Skilled in{" "}
            <span className="font-semibold">
              JavaScript, React, Node.js, MERN Stack
            </span>
            . Passionate about creating modern, functional, and responsive web
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/about"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
            >
              About Me
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
            >
              My Services
            </Link>
          </div>
        </div>

        <div className="mb-10 lg:mb-0">
          <img
            src={myImage}
            alt="John Patrick Zambrano"
            className="w-60 md:w-80 h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>
      <section className="bg-black text-white px-6 md:px-20 py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-10">
          Every project is more than just code — it’s about solving problems,
          creating experiences, and delivering value. I’m passionate about
          building{" "}
          <span className="text-green-500">
            modern, responsive, and scalable
          </span>{" "}
          web solutions. Let’s turn ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 text-gray-200 font-medium rounded-lg shadow hover:bg-gray-700 transition"
          >
            Let’s Connect
          </Link>
        </div>
      </section>
      {/* PERSONAL INFORMATION SECTION */}
      <section className="bg-black text-white px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10 text-center">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left Side - Basic Info */}
          <div className="space-y-6 bg-gray-900 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Basic Details
            </h3>
            <p>
              <span className="font-semibold text-gray-300">Full Name:</span>{" "}
              <span className="text-gray-400">John Patrick Zambrano</span>
            </p>
            <p>
              <span className="font-semibold text-gray-300">Birthday:</span>{" "}
              <span className="text-gray-400">December 28, 2002</span>
            </p>
            <p>
              <span className="font-semibold text-gray-300">Location:</span>{" "}
              <span className="text-gray-400">Las Piñas, Philippines</span>
            </p>
            <p>
              <span className="font-semibold text-gray-300">Course:</span>{" "}
              <span className="text-gray-400">
                Bachelor of Science In Information Technology
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-300">Status:</span>{" "}
              <span className="text-gray-400">Fresh Graduate</span>
            </p>
          </div>

          {/* Right Side - Hobbies / Interests */}
          <div className="space-y-6 bg-gray-900 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              Hobbies & Interests
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Exploring new technologies and frameworks</li>
              <li>Building personal web projects</li>
              <li>Fitness & Gym</li>
              <li>Watching tech tutorials and self-learning</li>
              <li>Collaborating on team projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="min-h-[60vh] bg-gray-950 px-6 md:px-20 py-16 text-center">
        <h1 className="text-green-500 text-3xl md:text-4xl font-bold mb-6">
          What I Do
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I build modern and scalable web applications by combining clean
          design, efficient code, and user-focused functionality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-green-600/30 transition">
            <h2 className="text-white font-semibold mb-2">
              Frontend Development
            </h2>
            <p className="text-gray-400 text-sm">
              Creating responsive, accessible, and visually appealing
              interfaces.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-green-600/30 transition">
            <h2 className="text-white font-semibold mb-2">
              Backend Development
            </h2>
            <p className="text-gray-400 text-sm">
              Building secure, fast, and scalable APIs with modern technologies.
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-green-600/30 transition">
            <h2 className="text-white font-semibold mb-2">Problem Solving</h2>
            <p className="text-gray-400 text-sm">
              Turning complex requirements into elegant and efficient solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-black px-6 md:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-green-500 text-3xl md:text-4xl font-bold mb-4">
            Tech Stacks
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These are the technologies I use to bring ideas to life — from
            crafting sleek interfaces to building robust backends.
            <span className="text-green-500">
              {" "}
              Tools that fuel my passion for web development.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {stacks.map((el, i) => (
            <div
              key={i}
              className="group p-6 bg-gray-900 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-green-600/30 hover:scale-105 transition transform"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg group-hover:bg-green-600/10 transition">
                <img
                  src={el.img}
                  className="w-10 h-10 object-contain"
                  alt={el.tech}
                />
              </div>
              <h2 className="text-white mt-4 font-semibold text-lg">
                {convert(el.tech)}
              </h2>
              <p className="text-gray-400 text-sm text-center mt-1">
                {convert(el.desc)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-screen px-6 md:px-20 py-16 bg-black text-white">
        <h1 className="text-3xl text-green-500 font-bold mb-10">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((pro, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-gray-900 hover:shadow-lg hover:scale-[1.02] transition"
            >
              <img
                className="rounded-lg h-48 w-full object-cover mb-4"
                src={pro.img}
                alt={pro.name}
              />
              <h1 className="text-xl font-semibold mb-2">{pro.name}</h1>
              <p className="text-gray-400 text-sm mb-3">{pro.description}</p>
              <div className="flex flex-wrap gap-2">
                {pro.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-green-600/20 text-green-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12 text-center">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Feel free to reach out! Whether you have a question, project idea,
              or just want to say hi.
            </p>

            <div className="overflow-hidden flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow">
              <span className="text-green-600 text-2xl">
                <Mail />
              </span>
              <p className="text-gray-300">johnpatrickzambrano@email.com</p>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow">
              <span className="text-green-600 text-2xl">
                <Phone />
              </span>
              <p className="text-gray-300">+63 905-887-8315</p>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow">
              <span className="text-green-600 text-2xl">
                <MapPin />
              </span>
              <p className="text-gray-300">Las Piñas, Philippines</p>
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/zambranopatt"
                target="_blank"
                className="text-gray-300 hover:text-green-600 text-2xl"
              >
                <Github />
              </a>

              <a
                href="https://facebook.com/johnpatrickzambrano"
                target="_blank"
                className="text-gray-300 hover:text-green-600 text-2xl"
              >
                <Facebook />
              </a>
            </div>
          </div>

          <form className="bg-gray-800 p-8 rounded-lg shadow space-y-6">
            <div>
              <label className="block mb-2 text-gray-400">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-400">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
