"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "NLP Scheduling",
    description:
      "Schedule your todos using natural language, Amie understands you.",
    image: "/2024/images/features/feature-nlp-preview.png",
    icon: "/2024/images/features/feature-nlp.png",
    bgColor: "bg-black/40",
    textColor: "text-white",
  },
  {
    title: "Widgets",
    description: "Birthdays, todos and schedules – only a glance away.",
    image: "/2024/images/features/feature-widgets-preview.png",
    icon: "/2024/images/features/feature-widgets.png",
    bgColor: "bg-white/75",
    textColor: "text-neutral",
  },
  {
    title: "Multiple accounts",
    description: "All your accounts, happily together in one place.",
    image: "/2024/images/features/feature-accounts-preview.png",
    icon: "/2024/images/features/feature-accounts.png",
    bgColor: "bg-white/75",
    textColor: "text-neutral",
  },
  {
    title: "Pomodoro",
    description: "Find the right balance between focus and breaks.",
    image: "/2024/images/features/feature-pomodoro-preview.png",
    icon: "/2024/images/features/feature-pomodoro.png",
    bgColor: "bg-white/75",
    textColor: "text-neutral",
  },
  {
    title: "Timezones",
    description:
      "Traveling? Amie helps you juggle multiple timezones so you can beat the jet lag.",
    image: "/2024/images/features/feature-timezones-preview.png",
    icon: "/2024/images/features/feature-timezones.png",
    bgColor: "bg-[#2A2A2A]",
    textColor: "text-white",
  },
];

const FeatureCarousel = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const handleDragEnd = (event, info) => {
    const dragThreshold = 50;
    const draggedDistance = info.offset.x;

    if (draggedDistance > dragThreshold && currentFeature > 0) {
      setCurrentFeature(currentFeature - 1);
    } else if (
      draggedDistance < -dragThreshold &&
      currentFeature < features.length - 1
    ) {
      setCurrentFeature(currentFeature + 1);
    } else {
      controls.start({ x: -currentFeature * 380 });
    }
  };

  useEffect(() => {
    controls.start({ x: -currentFeature * 380 });
  }, [currentFeature, controls]);

  return (
    <div className="w-full max-w-full overflow-hidden relative pb-24">
      <div className="flex items-center">
        <motion.div
          className="w-[380px] mr-[92px] flex-shrink-0"
          animate={{ x: -currentFeature * 380 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h2 className="text-6xl font-bold mb-8">our program</h2>
          <div className="px-4 flex items-center space-x-4">
            <Image
              src="/icons/arrowup.png"
              alt="Raised amount icon"
              width={32}
              height={32}
            />
            <h2 className="text-[#FFB4F8] text-5xl font-bold">$1M</h2>
          </div>
          <p className="px-4">
            Our Founders have gone on to raise quite a bit of $$$.
          </p>
          <div className="px-4 flex items-center space-x-4">
            <Image
              src="/icons/calendar.png"
              alt="Raised amount icon"
              width={32}
              height={32}
            />
            <h2 className="text-[#FFB4F8] text-5xl font-bold">16 weeks</h2>
          </div>
          <p className="px-4">
            Our Founders have gone on to raise quite a bit of $$$.
          </p>
        </motion.div>
        <motion.div
          ref={containerRef}
          className="flex cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -(features.length - 1) * 380, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`shrink-0 p-8 rounded-[40px] ${feature.bgColor} border-white/60 border-[1px] w-[340px] h-[540px] mr-[40px] flex flex-col`}
            >
              <div className="flex items-center mb-3">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="-m-3"
                />
                <h3
                  className={`text-[22px] ${feature.textColor} font-semibold ml-3`}
                >
                  {feature.title}
                </h3>
              </div>
              <p
                className={`text-[18px] ${feature.textColor === "text-white" ? "text-white/35" : "text-[#808080]"} opacity-80 font-medium`}
              >
                {feature.description}
              </p>
              <Image
                src={feature.image}
                alt={`${feature.title} preview`}
                width={320}
                height={307}
                className="mt-4 -mx-6"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setCurrentFeature(index)}
            className="flex items-center justify-center relative before:content-[''] before:absolute before:w-[38px] before:h-[40px] before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]"
          >
            <span
              className={`
                inline-flex rounded-full text-white text-[14px] font-semibold px-1 py-1 overflow-hidden box-border pointer-events-none
                whitespace-nowrap backdrop-blur-sm
                justify-center bg-black/30 translate-z-0
              `}
              style={{
                width: index === currentFeature ? "100px" : "8px",
                height: index === currentFeature ? "28px" : "8px",
                color:
                  index === currentFeature
                    ? "rgb(255, 255, 255)"
                    : "rgba(255, 255, 255, 0)",
              }}
            >
              {feature.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
