"use client";

import React, { useState } from "react";
import { menu } from "../../utility/data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-[100%] h-[50px] shadow-sm relative bg-bgClrBlue">
      <div className="max-w-[1180px] mx-auto h-full flex justify-between items-center max-[1180px]:px-5">
        <div className="text-xl font-bold text-[red]">Logo</div>
        {/* mobile screen menu btn */}
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={${showMenu ? "/icons/closeMenuicon.svg" : "/icons/menu.svg"}}
          alt="menu icon"
          className="cursor-pointer sm:hidden block"
        />

        {/* menu section */}
        <div
          className={`${
            showMenu ? "max-sm:left-[0%]" : "max-sm:left-[-100%]"
          } max-sm:bg-bgClrBlue max-sm:absolute max-sm:w-full max-sm:h-[100vh] max-sm:top-[50px]  max-sm:transition-all  max-sm:duration-1000`}
        >
          <ul className="flex gap-5 max-sm:flex-col max-sm:items-center max-sm:mt-5">
            {menu?.map((v, index) => {
              return (
                <li
                  key={index}
                  className="capitalize font-semibold cursor-pointer hover:text-navBgClr"
                >
                  {v?.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;