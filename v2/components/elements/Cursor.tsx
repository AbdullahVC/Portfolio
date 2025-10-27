"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        className="cursor-outer"
        style={{
          transform: `translate(${mousePos.x - 15}px, ${mousePos.y - 15}px)`,
        }}
      />

      {/* Inner cursor */}
      <div
        className="cursor-inner"
        style={{
          transform: `translate(${mousePos.x - 3}px, ${mousePos.y - 3}px)`,
        }}>
        {isHovering && <div className="cursor-hover" />}
      </div>
    </>
  );
}
