"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const headerList = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Services", link: "#server" },
    { id: 5, name: "Contact Us", link: "#contact" },
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

  const handleLinkClick = (name) => {
    console.log(`${name} clicked`);
    setMenu(false);
  };

  return (
    <div className="top-0 fixed w-[100%] z-10">
      <div className="flex justify-between items-center bg-slate-100 py-2 px-0 md:px-10 text-black">
        <div className="relative">
          <Image
            src="/image/logo1.svg"
            width={300}
            height={250}
            className="object-contain"
            alt="banner"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="sm:block hidden">
          <ul className="flex flex-row gap-6">
            {headerList.map((res) => (
              <li key={res.id}>
                <Link
                  href={res.link}
                  className="flex items-center font-bold text-black hover:border-b-2 hover:text-[#000] hover:border-gray-900 gap-1 cursor-pointer"
                  onClick={() => handleLinkClick(res.name)}
                >
                  {res.name}
                </Link>
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
              className="absolute w-[280px] top-0 right-0 z-10 bg-slate-100"
            >
              <div className="py-[18px] px-3 flex justify-between items-center border-b-2">
                <p className="text-lg">Menu</p>
                <button onClick={() => setMenu(false)} aria-label="Close menu">
                  <IoMdClose className="text-2xl" />
                </button>
              </div>
              <ul className="flex flex-col gap-3 mt-4 h-[100vh]">
                {headerList.map((res) => (
                  <li key={res.id} className="relative px-3">
                    <Link
                      href={res.link}
                      className="flex items-center gap-1 font-bold cursor-pointer text-[#000]"
                      onClick={() => handleLinkClick(res.name)}
                    >
                      {res.name}
                    </Link>
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
