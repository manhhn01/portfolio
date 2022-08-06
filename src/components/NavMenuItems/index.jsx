import React, { useContext } from "react";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

function NavMenuItems() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <li>
        <Link
          className="text-black active:bg-light-acc dark:active:bg-dark-acc dark:text-white"
          to={"/"}
          onClick={() => {
            document.querySelector(".drawer-content").scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-black active:bg-light-acc dark:active:bg-dark-acc dark:text-white"
          to={"#about"}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="text-black active:bg-light-acc dark:active:bg-dark-acc dark:text-white"
          to={"#projects"}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className="text-black active:bg-light-acc dark:active:bg-dark-acc dark:text-white"
          to={"#skills"}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className="text-black active:bg-light-acc dark:active:bg-dark-acc dark:text-white"
          to={"#contact"}
        >
          Contact
        </Link>
      </li>
      <li className="flex justify-center mt-10 lg:hidden">
        <button
          type="button"
          className="relative mx-auto border-2 w-14 h-7 bg-dark-pri/10 border-dark-pri/40 dark:bg-light-pri/10 dark:border-light-pri/40 !rounded-3xl"
          onClick={toggleTheme}
        >
          <span
            className={
              "absolute transition-transform -translate-y-1/2 left-2 top-1/2 " +
              (theme === "dark" ? "translate-x-5" : "")
            }
          >
            <span
              className={"transition-color text-dark-pri dark:text-light-pri-2"}
            >
              {theme === "dark" ? <BsCloudMoonFill /> : <BsCloudSunFill />}
            </span>
          </span>
        </button>
      </li>
    </>
  );
}

export default NavMenuItems;
