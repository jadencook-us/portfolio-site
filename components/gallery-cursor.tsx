"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function GalleryCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useSpring(-100, { damping: 30, stiffness: 500, mass: 0.2 });
  const cursorY = useSpring(-100, { damping: 30, stiffness: 500, mass: 0.2 });

  useEffect(() => {
    const updatePosition = (event: MouseEvent) => {
      cursorX.set(event.clientX - 12);
      cursorY.set(event.clientY - 12);
      setIsVisible(true);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      setIsHovered(Boolean(target.closest("a, button")));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 rounded-full bg-primary mix-blend-difference md:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovered ? 2.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 24, stiffness: 320 }}
    />
  );
}
