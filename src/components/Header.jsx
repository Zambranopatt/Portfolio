import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/os.png";
import view from "../assets/image.png";

const Header = () => {
  return (
    <header className="flex h-[60px] items-center justify-between bg-black text-white px-20">
      <div>
        <h1 className="text-2xl font-bold uppercase tracking-wide text-green-500">
          Patzy
        </h1>
      </div>
      <nav className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
