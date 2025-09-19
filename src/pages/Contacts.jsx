import React from "react";

const Contacts = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6 py-16">
      <div className="max-w-2xl w-full bg-gray-800 shadow rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Contact <span className="text-green-500">Me</span>
        </h1>
        <p className="text-gray-300 mb-6 text-center">
          Got a project idea, collaboration, or opportunity? <br />
          Feel free to reach out — I’d love to connect!
        </p>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-700 bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-700 bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-700 bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* EXTRA INFO */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            Email:{" "}
            <span className="text-green-500">
              johnpatrickzambrano@example.com
            </span>
          </p>
          <p>
            Phone: <span className="text-green-500">+63 900 000 0000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
