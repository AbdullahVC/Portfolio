"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    // Mobil ve tablette cursor'u devre dışı bırak
    const isMobileOrTablet = window.innerWidth < 1024;
    if (isMobileOrTablet) {
      return;
    }

    const cursor = document.querySelector(".cursor") as HTMLElement;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <div className="cursor"></div>;
}
