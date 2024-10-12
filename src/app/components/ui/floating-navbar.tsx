"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NavButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 flex items-center gap-2 pointer-events-auto outline-none border-none text-sm font-semibold text-white rounded-[8px] hover:bg-white/20 active:scale-95 scale-100 transition-all ${className}`}
  >
    {children}
  </button>
);

const DownloadOption = ({ src, alt, label, noEta }) => (
  <motion.div
    className="flex gap-3.5 items-center shrink-0 pointer-events-auto group/row cursor-pointer"
    initial={{ opacity: 0, y: 24, scale: 0.9, rotate: 0 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    exit={{ opacity: 0, y: 24, scale: 0.9, rotate: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex size-16 shrink-0 rounded-lg group-hover/row:scale-105 scale-100 transition-transform pointer-events-none">
      <Image src={src} alt={alt} width={64} height={64} />
    </div>
    <div className="relative pointer-events-none bg-white/70 shadow-xl rounded-[12px] overflow-hidden group-hover/row:scale-105 scale-100 transition-transform">
      <div className="z-10 relative px-3 py-1 group-hover/row:bg-black/70 transition-colors bg-black/60">
        <span className="whitespace-nowrap text-sm font-semibold [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
          {label}
          {noEta && (
            <span className="font-bold ml-1 opacity-80 tracking-wide uppercase text-xxs">
              No ETA
            </span>
          )}
        </span>
      </div>
    </div>
  </motion.div>
);

export const FloatingNav = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[5000] pb-4">
      <div
        className="flex items-end backdrop-blur-[40px] justify-center text-primary [&_.text-primary]:text-white/80 text-white/80 [&_.text-secondary]:text-white/60 [&_.text-tertiary]:text-white/50 shadow-lg"
        style={{
          width: "auto",
          height: "48px",
          overflow: "visible",
          maxHeight: "calc(-56px + 100vh)",
          backgroundColor: "rgba(0, 0, 0, 0.38)",
          borderRadius: "12px",
        }}
      >
        <div className="flex items-center h-full w-full px-1.5 gap-1">
          <NavButton>
            <div
              className="flex h-[20px] pointer-events-none aspect-[32/24] items-center justify-center -ml-1"
              style={{
                backgroundImage: "url('/2024/images/film.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 14 14"
              >
                <path
                  d="M 2 1.741 C 2 0.969 2.837 0.488 3.504 0.877 L 12.519 6.136 C 13.181 6.522 13.181 7.478 12.519 7.864 L 3.504 13.123 C 2.837 13.512 2 13.031 2 12.259 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Watch <span className="hidden lg:inline-flex -ml-1">film</span>
          </NavButton>

          <NavButton>
            <span className="size-4 flex items-center justify-center -ml-0.5 rounded-[8px] opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 5v-.667M8 11v.667M9.444 6c-.288-.399-.827-.667-1.444-.667h-.185c-.818 0-1.482.531-1.482 1.186v.05c0 .469.331.897.854 1.106l1.626.65c.523.21.854.637.854 1.106 0 .682-.692 1.236-1.545 1.236H8c-.617 0-1.156-.268-1.444-.667M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
                ></path>
              </svg>
            </span>
            Pricing
          </NavButton>

          <div className="relative">
            <NavButton onClick={() => setIsDownloadOpen(!isDownloadOpen)}>
              <span className="size-4 flex items-center justify-center -ml-0.5 rounded-[8px] opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M13 9c0 .63-.046 1.411-.099 2.097a1.923 1.923 0 0 1-1.807 1.767C10.057 12.93 8.775 13 8 13c-.775 0-2.057-.07-3.094-.136A1.924 1.924 0 0 1 3.1 11.097 29.39 29.39 0 0 1 3 9"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 4.75 2.633 2.852a.5.5 0 0 0 .734 0L11 4.75M8 6.25V1.5"
                  ></path>
                </svg>
              </span>
              Download
            </NavButton>

            <AnimatePresence>
              {isDownloadOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col-reverse gap-2 mb-2">
                  <DownloadOption
                    src="/2024/images/iOS.webp"
                    alt="iOS"
                    label="iOS"
                  />
                  <DownloadOption
                    src="/2024/images/AppleSilicon.png"
                    alt="macOS Silicon"
                    label="macOS Silicon"
                  />
                  <DownloadOption
                    src="/2024/images/AppleIntel.png"
                    alt="macOS Intel"
                    label="macOS Intel"
                  />
                  <DownloadOption
                    src="/2024/images/iOS.webp"
                    alt="Windows"
                    label="Windows"
                  />
                  <DownloadOption
                    src="/2024/images/Windows+Android.png"
                    alt="Android"
                    label="Android"
                    noEta={true}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
