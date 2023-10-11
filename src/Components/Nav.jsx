import React from "react";
import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { close2 } from "../assets/icons";
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="hover:transition-all hover:duration-300"
            >
              <a
                href={item.href}
                className="font-montserrat transition-all duration-300 hover:underline hover:underline-offset-8 hover:ease-in-out decoration-slate-500 leading-normal text-lg text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={!isNavOpen ? hamburger : close2}
            alt="hamburger"
            className="hidden max-lg:block cursor-pointer"
            height={25}
            width={25}
            onClick={() => setIsNavOpen((prev) => !prev)}
          />
        </div>
        {/* <div className="max-sm:hidden relative"> */}
        {isNavOpen && (
          <ul className="flex-1 flex flex-col absolute top-10 max-sm:right-16 max-md:right-28 justify-center items-center p-2 bg-slate-100 gap-4 ">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="hover:transition-all hover:duration-300"
              >
                <a
                  href={item.href}
                  className="font-montserrat leading-normal hover:text-slate-300 text-lg text-slate-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Nav;
