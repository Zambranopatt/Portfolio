import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/os.png";
import view from "../assets/image.png";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };
  return (
    <header className="secs flex relative h-[60px] items-center justify-between bg-black text-white px-20">
      <div>
        <h1 className="text-2xl font-bold uppercase tracking-wide text-green-500">
          Patzy
        </h1>
      </div>
      <nav className="hidden sm:flex space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="contacts">Contacts</Link>
      </nav>
      <div className="flex md:hidden">
        <button
          onClick={showNav}
          className="text-white cursor-pointer font-medium tracking-wider text-2xl rotate-90   "
        >
          lll
        </button>
      </div>
    </header>
  );
};

export default Header;
