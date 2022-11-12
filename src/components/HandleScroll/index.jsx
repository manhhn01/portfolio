import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function HandleScroll() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id)
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);
  return <Outlet />;
}

export default HandleScroll;
