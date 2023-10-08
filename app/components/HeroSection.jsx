import React from "react";
import { playfair_display } from "../fonts";

export default function HeroSection() {
  return (
    <div className="relative flex text-center flex-col items-center justify-center lg:justify-between w-full min-h-full gap-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-base text-[#54C0A0] font-medium">JET PROTOCOL</p>
          <h2 className="text-4xl font-semibold ">the next generation of</h2>
          <h2
            className={`text-4xl font-bold italic  ${playfair_display.className}`}
          >
            defi governance
          </h2>
        </div>
        <p className="text-lg text-gray-400 font-normal">
          experience open source, transport and efficient borrowing
          <br /> and landing on solana blockchain.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row items-center justify-center">
        <button className="bg-[#54C0A0] text-black font-bold py-2 px-4 rounded-full">
          read docs
        </button>
        <button className="border-gray-400 border-2 font-bold py-2 px-4 rounded-full">
          how it works
        </button>
      </div>
    </div>
  );
}
