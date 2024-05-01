import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggler from "./DarkModeToggler";

export default function BlogNavbar() {
  return (
    <nav
      className={`px-3 py-4 md:px-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm fixed top-0 w-full z-10`}
    >
      <div className="flex items-center">
        <p className="text-2xl font-bold text-primary">Dr. Suman Dhamala</p>

        <div className={`flex justify-center items-center gap-2 ms-auto me-0`}>
          <NavLink to="/main">
            <span className="cursor-pointer material-symbols-outlined h-8 w-8 text-2xl flex justify-center items-center text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-custom-light-high">house</span>
          </NavLink>

          <DarkModeToggler className={``} />
        </div>
      </div>
    </nav>
  );
}
