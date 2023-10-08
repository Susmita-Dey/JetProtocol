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
          <div className="w-full lg:w-auto flex justify-between items-center">
            <Link href={"/"} className="w-32 lg:w-auto">
              <Image
                src={"/jetprotocol.svg"}
                width={120}
                height={40}
                alt="logo"
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
              (navbarOpen ? " flex flex-col mt-10" : " hidden")
            }
          >
            <div
              className={
                "lg:flex flex-grow justify-center items-center" +
                (navbarOpen
                  ? " flex flex-col mt-10 w-full px-4 h-[50vh] bg-blue-950/80"
                  : " hidden")
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
            <button
              className="bg-[#54C0A0] text-black font-bold py-2 px-4 rounded-full border border-[rgba(255,255,255,0.24)] hover:bg-[#09ffb5]"
              style={{
                boxShadow:
                  "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
              }}
            >
              launch app
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
