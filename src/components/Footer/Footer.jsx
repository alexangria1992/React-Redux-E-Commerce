import React from "react";
import "./Footer.css";
const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];

  return (
    <footer className="bg-dark text-light flex justify-between px-4 py-4 ">
      <a href="/" className="text-2xl text-yellow font-krona">
        Wavey
      </a>
      <div className="bg-emerald-300 flex items-center">
        {links.map((link) => (
          <a href="/" key={link} className="ml-4">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
