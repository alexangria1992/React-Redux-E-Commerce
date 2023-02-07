import React from "react";
import "./ButtonLink.css";
import { Link } from "react-router-dom";

const ButtonLink = ({ path, text, isMain, className }) => {
  return (
    <Link
      to={path}
      className={`inline-block py-4 px-10 bg-yellow rounded-full font-bold font-krona text-xs ${
        isMain ? "bg-yellow py-4 px-10" : "bg-dark text-white py-2 px-4 "
      }, ${className}`}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
