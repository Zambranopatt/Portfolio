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

const Home = () => {
  const convert = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  const stacks = [
    {
      img: html,
      tech: "Html",
      desc: "For structure",
    },
    {
      img: css,
      tech: "Css",
      desc: "For design",
    },
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
      <section className="min-h-screen flex items-center justify-between px-20 bg-black transition-colors w-screen">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="text-green-600">John Patrick Zambrano</span>{" "}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Fresh Graduate in Information Technology | Aspiring Web Developer
            Skilled in{" "}
            <span className="font-semibold">
              JavaScript, React, Node.js, MERN Stack
            </span>
            . Passionate about creating modern, functional, and responsive web
            solutions.
          </p>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
            >
              About Me
            </Link>
            <Link
              to="/services"
              className="px-6  py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
            >
              My Services
            </Link>
          </div>
        </div>

        <div>
          <img
            src={myImage}
            alt="John Patrick Zambrano"
            className="w-98 h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>
      <section className="h-screen overflow-hidden bg-black px-20 text-3xl font-bold">
        <div>
          <h1 className="text-green-500">Tech Stacks</h1>
        </div>
        <div className="flex space-x-5 space-y-5 flex-wrap mt-10 ">
          {stacks &&
            stacks.map((el, i) => (
              <div
                key={i}
                className="p-5 h-[200px] bg-gray-900 w-[150px] rounded-lg flex flex-col items-center justify-center "
              >
                <img src={el.img} className="w-[70px]" alt="" />
                <h2 className="text-white font-thin text-2xl">
                  {convert(el.tech)}
                </h2>
                <p className="text-white text-sm font-thin">
                  {convert(el.desc)}
                </p>
              </div>
            ))}
        </div>
      </section>
      <section className="min-h-screen px-20 bg-black text-white">
        <div>
          <h1 className="text-3xl text-green-500 font-bold">Projects</h1>
        </div>
        <div className="space-y-5">
          {projects &&
            projects.map((pro, i) => (
              <div
                key={i}
                className="p-5 min-h-[150px] justify-between space-x-10 flex rounded-lg flex-row items-center bg-gray-900"
              >
                <div className="flex flex-col gap-5">
                  <h1 className="text-lg ">{pro.name}</h1>
                  <p>{pro.technologies}</p>
                  <span>{pro.description}</span>
                  <div className="flex  gap-5 rounded bg-white w-[350px] mt-3">
                    <img src={mongo} className="h-[50px]" alt="" />
                    <img src={express} className="h-[50px]" alt="" />
                    <img src={react} className="h-[50px]" alt="" />
                    <img src={node} className="h-[50px]" alt="" />
                  </div>
                </div>
                <div className="">
                  <img
                    className="rounded h-[200px] w-[400px]"
                    src={pro.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-black text-white px-20 py-16">
        <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Feel free to reach out! Whether you have a question, project idea,
              or just want to say hi.
            </p>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow">
              <span className="text-green-600 text-2xl">📧</span>
              <p className="text-gray-300">johnpatrickzambrano@email.com</p>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow">
              <span className="text-green-600 text-2xl">📱</span>
              <p className="text-gray-300">+63 912 345 6789</p>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow">
              <span className="text-green-600 text-2xl">📍</span>
              <p className="text-gray-300">Quezon City, Philippines</p>
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="text-gray-300 hover:text-green-600 text-2xl"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-gray-300 hover:text-green-600 text-2xl"
              >
                💼
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                className="text-gray-300 hover:text-green-600 text-2xl"
              >
                📘
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
        <button></button>
      </section>
    </>
  );
};

export default Home;
