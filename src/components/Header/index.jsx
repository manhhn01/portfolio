import React, { useContext } from "react";
import { AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import NavMenuItems from "../NavMenuItems";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-sm bg-light-pri-2/50 dark:bg-dark-pri-2/50 h-[60px] flex items-center border-b border-b-slate-900/5">
      <div className="container p-2 navbar">
        <div className="flex-1">
          <Link
            to="/"
            className="text-xl text-black normal-case btn btn-ghost dark:text-white"
          >
            <img src="/images/logo.png" className="object-cover w-full h-full p-1 rounded-full" alt="logo" />
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="p-2 menu menu-horizontal rounded-box">
            <NavMenuItems />
          </ul>
        </div>
        <div className="flex-none hidden h-8 mr-2 border-r border-r-slate-600/40 lg:block dark:border-r-slate-300/40"></div>
        <div className="items-center flex-none hidden mr-2 lg:flex">
          <button
            type="button"
            className="relative ml-4 border-2 w-14 h-7 bg-dark-pri/10 border-dark-pri/40 dark:bg-light-pri/10 dark:border-light-pri/40 rounded-3xl"
            onClick={toggleTheme}
          >
            <span
              className={
                "absolute transition-transform -translate-y-1/2 left-2 top-1/2 " +
                (theme === "dark" ? "translate-x-5" : "")
              }
            >
              <span
                className={
                  "transition-color text-dark-pri dark:text-light-pri-2"
                }
              >
                {theme === "dark" ? <BsCloudMoonFill /> : <BsCloudSunFill />}
              </span>
            </span>
          </button>
        </div>
        <div className="flex-none hidden lg:block">
          <a
            href="https://github.com/manhhn01"
            target="blank"
            className="text-black btn btn-ghost dark:text-white"
          >
            <AiFillGithub size="24px" />
          </a>
        </div>
        <div className="flex-none lg:hidden">
          <label htmlFor="drawerToggler" className="btn btn-square btn-ghost">
            <AiOutlineMenu />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
