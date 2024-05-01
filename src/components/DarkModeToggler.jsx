import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/state";

export default function DarkModeToggler({ className }) {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const { toggleDarkModeAction } = bindActionCreators(actionCreators, dispatch);

  const toggleDarkMode = () => {
    // const html = document.documentElement;
    // html.classList.toggle("dark");
    toggleDarkModeAction(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    toggleDarkModeAction(prefersDarkMode);
  }, []);

  return (
    <span
      className={`material-symbols-outlined h-8 w-8 text-2xl flex justify-center items-center rounded-full cursor-pointer ${className}`}
      onClick={toggleDarkMode}
    >{
      darkMode ? "dark_mode" : "light_mode"
    }</span>
  );
}
