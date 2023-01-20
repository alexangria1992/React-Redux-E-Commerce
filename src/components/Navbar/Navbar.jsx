import React from "react";
import "./Navbar.css";
import BrandLink from "../BrandLink/BrandLink";
import NavLinks from "../NavLinks";
import HeartIcon from "../../Icons/HeartIcon";
import CartIcon from "../../Icons/CartIcon";

const Navbar = () => {
  return (
    <nav className=" container mx-auto flex font-krona bg-red-300 justify-between p-3">
      <BrandLink classes="text-yellow" />
      <div className="flex bg-green-300 items-end ">
        <NavLinks />

        <div className="flex bg-purple-300">
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
