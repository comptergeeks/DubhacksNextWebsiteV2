import React from "react";
import { ShootingStars } from "../../app/components/ui/shooting-stars";
import { StarsBackground } from "../../app/components/ui/stars-background";
import { FloatingNav } from "../../app/components/ui/floating-navbar";

export default function Team() {
  return (
    <div className="relative min-h-screen text-white p-8">
      <ShootingStars className="absolute inset-0 bg-[#462339] bg-opacity-90" />
      <StarsBackground className="absolute inset-0" />
      <FloatingNav />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8">the team</h2>
        <p className="text-lg opacity-80 mb-12">
          What would you do without us?
        </p>
      </div>
    </div>
  );
}
