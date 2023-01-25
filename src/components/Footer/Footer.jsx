import React from "react";
import "./Footer.css";
import BrandLink from "../BrandLink/BrandLink";
import links from "../../data/footerLinks.json";
import { Link } from "react-router-dom";
import FacebookIcon from "../../Icons/FacebookIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
const Footer = () => {
  return (
    <footer className="bg-dark text-light flex flex-col md:flex-row p-8 justify-between ">
      <BrandLink classes="text-yellow mb-4 md:md-0 md:pl-4 inline-block order-1" />

      <div className="bg-emerald-300 flex justify-between mx-auto">
        {links.map((item) => (
          <div className=" flex flex-col flex-wrap mr-10">
            <h6 className="font-krona text-sm">{item.title}</h6>
            <div className="bg-red-200">
              {item.links.map((link) => (
                <Link
                  to={link.path}
                  key={link}
                  className="lowercase text-sm block hover:text-yellow"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-yellow pr-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light-grey block mb-4"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
