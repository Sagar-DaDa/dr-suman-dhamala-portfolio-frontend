import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggler from "./DarkModeToggler";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/state";

export default function BlogNavbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const { showPageLoaderAction } = bindActionCreators(actionCreators, dispatch);

  return (
    <nav
      className={`px-3 py-4 md:px-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm fixed top-0 w-full z-10`}
    >
      <div className=" flex items-center">
        <NavLink to="/">
          <p className="text-2xl font-bold text-primary">Dr. Suman Dhamala</p>
        </NavLink>

        <div className={`hidden md:flex md:flex-row md:gap-8 ms-auto me-0`}>
          <NavLink to="/">
            <span
              className="cursor-pointer"
              onClick={() => showPageLoaderAction(true)}
            >
              Home
            </span>
          </NavLink>
          <NavLink to="/blog-home">
            <span className="cursor-pointer">Blog</span>
          </NavLink>
        </div>

        <div className="flex items-center ms-auto me-0 md:m-0">
          <DarkModeToggler className={`md:ml-8 text-2xl`} />

          <span
            className={`${
              isMenuToggled ? "fa-xmark" : "fa-bars"
            } w-6 text-2xl fa-solid md:hidden ml-2 cursor-pointer text-primary flex justify-center items-center`}
            onClick={() => setIsMenuToggled((prevState) => !prevState)}
          ></span>
        </div>
      </div>

      {isMenuToggled && (
        <div
          className={`md:hidden flex flex-col gap-3 ms-auto me-0 text-center p-5`}
        >
          <NavLink to="/">
            <span
              className="cursor-pointer"
              onClick={() => showPageLoaderAction(true)}
            >
              Home
            </span>
          </NavLink>
          <NavLink to="/blog-home">
            <span className="cursor-pointer">Blog</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
