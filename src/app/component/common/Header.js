"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Header() {
  const headerList = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    {
      id: 3,
      name: "Services",
      sublist: [
        { id: 1, name: "Traffic Flow Analysis" },
        { id: 2, name: "Queue Length Assessment" },
        { id: 3, name: "Link and Mid-Block Traffic Analysis" },
        { id: 4, name: "Non-Motorized Traffic Studies" },
        { id: 5, name: "Traffic Safety and Conflict Analysis" },
        { id: 6, name: "Origin-Destination Mapping" },
        { id: 7, name: "Travel Time Evaluation" },
        { id: 8, name: "Monitoring Unauthorized Movements" },
        { id: 9, name: "Level Crossing Surveillance" },
      ],
    },
    { id: 4, name: "Careers" },
    { id: 5, name: "Contact Us" },
  ];

  const [menu, setMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const menuRef = useRef(null);

  // Close the menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    if (menu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menu]);

  return (
    <div className="top-0 fixed w-[100%] z-10">
      <div className="flex justify-between items-center bg-slate-800 py-5 px-3 md:px-10 text-white">
        <div>
          <h1 className="text-white text-xl">Seyan Tek Solution</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="sm:block hidden">
          <ul className="flex flex-row gap-6">
            {headerList.map((res) => (
              <li key={res.id} className="relative group">
                <span className="flex items-center gap-1 cursor-pointer">
                  {res.name}
                  {res.sublist && <MdArrowDropDown />}
                </span>
                {res.sublist && (
                  <ul className="hidden group-hover:block mt-5 -ml-16 absolute bg-slate-700 text-white  py-2 rounded shadow-lg">
                    {res.sublist.map((sub) => (
                      <li
                        key={sub.id}
                        className="px-4 py-2 hover:bg-slate-600 w-[300px]  cursor-pointer"
                      >
                        {sub.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="block sm:hidden">
          <button onClick={() => setMenu(true)} aria-label="Open menu">
            <FaBars />
          </button>
          {menu && (
            <div
              ref={menuRef}
              className="absolute w-[280px] top-0 right-0 z-10 bg-slate-800  "
            >
              <div className="py-[18px] px-3 flex justify-between items-center border-b-2 ">
                <p className="text-lg">Menu</p>
                <button onClick={() => setMenu(false)} aria-label="Close menu">
                  <IoMdClose className="text-2xl" />
                </button>
              </div>
              <ul className="flex flex-col gap-3 mt-4   h-[100vh]">
                {headerList.map((res) => (
                  <li key={res.id} className="relative px-3">
                    <div
                      className="flex items-center gap-1 cursor-pointer  "
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === res.id ? null : res.id
                        )
                      }
                    >
                      {res.name}
                      {res.sublist && <MdArrowDropDown />}
                    </div>
                    {res.sublist && mobileDropdown === res.id && (
                      <ul className="text-white mt-2 py-1 overflow-y-auto max-h-[200px] border-zinc-300">
                        {res.sublist.map((sub) => (
                          <li
                            key={sub.id}
                            className="p-2 hover:bg-slate-600 cursor-pointer"
                          >
                            {sub.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
