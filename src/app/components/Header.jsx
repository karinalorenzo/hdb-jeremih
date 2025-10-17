import React from "react";
const Header = () => {
  return (
    <header className="fixed top-6 w-full text-white p-4 z-50">
      <div className="flex items-center">
        <a
          href="/"
          className="font-bad-script text-[20px] text-white hover:text-gray-300 transition-colors duration-300"
        >
          Jeremih Reyes
        </a>
      </div>
    </header>
  );
};

export default Header;
