import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavMenuItems from "../../components/NavMenuItems";

function DefaultLayout() {
  return (
    <div className="transition-colors duration-200 bg-light-pri dark:bg-dark-pri drawer drawer-end">
      <input id="drawerToggler" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content !transform-none !duration-200 text-black transition-colors dark:text-white">
        <Header />
        <Outlet />
        <div className="mx-2 border-b border-b-slate-600/10 lg:block dark:border-b-slate-300/10"></div>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="drawerToggler" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-light-pri-0 dark:bg-dark-pri-0 text-base-content">
          <NavMenuItems />
        </ul>
      </div>
    </div>
  );
}

export default DefaultLayout;
