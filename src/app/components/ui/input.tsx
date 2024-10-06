"use client";
import * as React from "react";
import { cn } from "../../lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent<HTMLDivElement>) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--pink-500),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <div className="relative bg-white bg-opacity-80 rounded-md">
          <input
            type={type}
            className={cn(
              `relative flex h-10 w-full border-none bg-transparent text-black rounded-md px-3 py-2 text-sm
              file:border-0 file:bg-transparent file:text-sm file:font-medium
              placeholder:text-neutral-600 focus-visible:outline-none
              disabled:cursor-not-allowed disabled:opacity-50
              transition duration-400`,
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </motion.div>
    );
  },
);

Input.displayName = "Input";

export { Input };
