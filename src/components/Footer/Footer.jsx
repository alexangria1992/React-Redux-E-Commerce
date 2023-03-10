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
    <footer className="bg-dark text-light flex flex-col md:flex-row justify-between p-8">
      <BrandLink classes="text-yellow md:pl-4 mb-4 md:pl-4 md:mb-0 inline-block order-1" />

      <div
        className="flex flex-col md:flex-row justify-between md:mx-auto space-x-0  space-y-8 md md:space-x-8 md:space-y-0 
       order-3 md:order-2"
      >
        {links.map((item) => (
          <div className="flex flex-col flex-wrap">
            <h6 className="font-krona text-sm">{item.title}</h6>
            <div>
              {item.links.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className="lowercase text-sm block hover:text-yellow"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-yellow space-x-4 order-2 flex md:block md:order-3 md:space-x-0 mb-6 md:mb-0">
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
