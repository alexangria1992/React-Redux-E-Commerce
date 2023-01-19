import React from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className=" container mx-auto flex font-krona bg-red-300 justify-between p-3">
      {/* BRAND */}
      {/* TODO extract to a component */}
      <a href="/" className="text-2xl">
        Wavey
      </a>

      <div className="flex bg-green-300 items-end lowercase">
        <a href="/home" className="text-sm mr-8 ">
          Home
        </a>
        <a href="/search" className="text-sm mr-8 ">
          Search
        </a>
        <a href="/about" className="text-sm mr-8 ">
          About
        </a>

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
