import React from "react";
import "./BrandLink.css";
import { Link } from "react-router-dom";
const BrandLink = ({ classes }) => {
  return (
    <Link to="/" className={`text-2xl font-krona ${classes}`}>
      Wavey
    </Link>
  );
};

export default BrandLink;
