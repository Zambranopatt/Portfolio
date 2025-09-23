import React from "react";
import { MapPin, User, Hash, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white min-h-[150px] flex flex-row justify-around items-center  px-20 py-5 bg-gray-900">
      <div>
        <h1 className=" text-green-500 text-2xl tracking-wider italic font-medium">
          Patzy
        </h1>
        <p className="tracking-wider">Portfolio Website </p>
      </div>
      <div>
        <h2>Vist my social media accounts</h2>
        <div className="flex gap-2 p-1">
          <Facebook />
          <p className="text-sm">John Patrick Zambrano</p>
        </div>
        <div className="flex gap-2 p-1">
          <Instagram />
          <p className="text-sm">John Patrick Zambrano</p>
        </div>
        <div className="flex gap-2 p-1">
          <Github />
          <p className="text-sm">Zambranopatt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
