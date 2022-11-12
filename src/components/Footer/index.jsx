import React from "react";

function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <footer className="p-4 text-black transition-colors duration-200 footer footer-center dark:text-white">
      <div>
        <p>Copyright © {getYear()} - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
