import React, { useEffect, useRef } from "react";
import "particles.js";

function Particles({ children }) {
  const particlesRef = useRef(null);
  useEffect(() => {
    window.particlesJS.load(
      "particles",
      "/lib/particlesJS/config.json",
      function () {
        console.log("callback - particles.js config loaded");
      },
    );
  }, []);
  return (
    <>
      <div
        ref={particlesRef}
        id="particles"
        className="absolute z-0 h-full w-full min-w-[786px] top-0 left-1/2 -translate-x-1/2"
      ></div>
      <div className="absolute top-0 left-0 z-10 w-full h-full pt-[60px] flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}

export default Particles;
