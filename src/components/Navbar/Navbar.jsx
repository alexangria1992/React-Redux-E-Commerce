import React from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
import BrandLink from "../BrandLink/BrandLink";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <nav className=" container mx-auto flex font-krona bg-red-300 justify-between p-3">
      <BrandLink classes="text-yellow" />
      <div className="flex bg-green-300 items-end ">
        <NavLinks />
        {/* ICONS  */}
        {/* TODO: add colors to icons {text-dark} */}
        <div className="flex bg-purple-300">
          <HeartIcon className="w-5 h-5 mr-4" />
          <ShoppingBagIcon className="w-5 h-5  " />

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
