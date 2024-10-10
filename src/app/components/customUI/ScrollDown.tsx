import React from "react";

interface ScrollDownProps {
  position: "left" | "right";
}

const ScrollDown: React.FC<ScrollDownProps> = ({ position }) => {
  const positionClass = position === "left" ? "left-8" : "right-8";

  return (
    <div className={`absolute bottom-8 ${positionClass} text-center`}>
      <a href="#" className="text-white no-underline text-opacity-75">
        <div className="animate-bounce-smooth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ScrollDown;
