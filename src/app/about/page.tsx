import React from "react";
import { ShootingStars } from "../../app/components/ui/shooting-stars";
import { StarsBackground } from "../../app/components/ui/stars-background";
import { FloatingNav } from "../../app/components/ui/floating-navbar";

export default function About() {
  return (
    <div className="relative min-h-screen text-white p-8">
      <ShootingStars className="absolute inset-0 bg-[#462339] bg-opacity-90" />
      <StarsBackground className="absolute inset-0" />
      <FloatingNav />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8">our program</h2>
        <div className="flex justify-between mb-12">
          <div className="w-1/2 pr-4">
            <p className="text-5xl font-bold mb-2">$1M raised</p>
            <p className="text-lg opacity-80">
              Our Founders have gone on to raise quite a bit of $$$.
            </p>
          </div>
          <div className="w-1/2 pl-4 text-right">
            <p className="text-5xl font-bold mb-2">16 weeks</p>
            <p className="text-lg opacity-80">
              Filled with fireside chats, information on how to grow your
              startup, and build sessions with you are fellow founders.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 h-32 rounded-md"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
