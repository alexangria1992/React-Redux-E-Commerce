import React from "react";
import "./Navbar.css";
import BrandLink from "../BrandLink/BrandLink";
import NavLinks from "../NavLinks";
import HeartIcon from "../../Icons/HeartIcon";
import CartIcon from "../../Icons/CartIcon";

const Navbar = () => {
  return (
    <nav className=" container mx-auto flex font-krona  justify-between p-3">
      <BrandLink classes="text-yellow" />
      <div className="flex  items-end ">
        <NavLinks />

        <div className="flex ">
          <HeartIcon />
          <CartIcon />

          {/* HOME */}
          {/* SEARCH */}
          {/* ABOUT */}
          {/* ICONS */}
          {/* Liked */}
          {/* CART */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
