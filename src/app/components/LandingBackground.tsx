"use client";
import React from "react";
import Image from "next/image";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import localFont from "next/font/local";
import { Input } from "./ui/input";
import ScrollDown from "./customUI/ScrollDown";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "400 600 700", // This specifies regular, semi-bold, and bold weights
});
//bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
export function LandingPage() {
  return (
    <div
      className={`${generalSans.variable} font-sans h-screen rounded-md bg-neutral-900 flex flex-col items-center relative w-full`}
    >
      <div className="mt-[10rem] flex flex-col items-center justify-center z-10 mb-2">
        <Image
          src="/logos/dubhacksnext.png"
          alt="Dubhacks Logo"
          width={84}
          height={84}
          className="mb-8"
        />
        <div className="inline-flex py-4 h-10 text-[1rem] animate-shimmer items-center rounded-[0.5rem] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] pl-4 pr-6 font-semibold text-[#d0d0d0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-[#d0d0d0] mr-4"
            viewBox="0 0 256 256"
          >
            <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
          </svg>
          UW Entrepreneurship Organization
        </div>
      </div>
      <h1 className="text-[6rem] font-bold text-white z-20 mb-4 text-opacity-75">
        DUBHACKS NEXT
      </h1>
      <p className="text-center z-10 text-white text-opacity-75 text-[1.25rem] leading-relaxed mb-8">
        We are the premier organization at the University of Washington
        dedicated to providing an
        <br />
        elite entrepreneurship experience for the most talented builders on
        campus.
      </p>

      <div className="z-10 w-screen max-w-md px-4 flex items-center space-x-4">
        <Input
          className="w-[20rem] h-12 px-4 rounded-md text-black border border-neutral-700 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out"
          id="email"
          placeholder="youremail@example.com"
          type="email"
        />
        <button className="whitespace-nowrap h-12 px-6 text-[1rem] animate-shimmer items-center rounded-[0.5rem] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-semibold text-[#d0d0d0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Sign Up!
        </button>
      </div>
      <ShootingStars className="bg-[#462339] bg-opacity-23" />
      <StarsBackground />
      <div>
        <ScrollDown position="left" />
        <ScrollDown position="right" />
      </div>
    </div>
  );
}
