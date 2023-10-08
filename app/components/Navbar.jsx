"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="filter drop-shadow-md lg:px-24 h-20 px-2 border-2 rounded-full border-gray-900 relative flex items-center justify-between py-3 mx-3 md:mx-16 my-5 z-50">
        <div className="container px-4 mx-auto flex items-center justify-center lg:justify-between w-full">
          <div className="w-full lg:w-auto flex justify-start items-center">
            <Link
              href={"/"}
              className="w-full relative flex flex-row justify-center items-center "
            >
              <Image
                src={"/jetprotocol.svg"}
                width={0}
                height={0}
                alt="logo"
                className="w-full h-full"
              />
            </Link>
            <button
              className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <FaTimes className="text-xl font-bold" />
              ) : (
                <FaBars className="text-xl font-bold" />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow justify-center items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  dao
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  build
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-base font-medium leading-snug hover:opacity-75"
                  href="#"
                >
                  docs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row list-none">
            <button className="px-4 py-2 w-full font-bold rounded-full text-black bg-[#64AE9D] hover:bg-[#64AE9D] shadow">
              launch app
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
