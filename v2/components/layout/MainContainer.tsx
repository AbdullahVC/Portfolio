"use client";

import { useEffect } from "react";
import LanguageSwitcher from "../elements/LanguageSwitcher";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      const container = document.querySelector(".main-container");
      if (container) {
        container.scrollTop = parseInt(savedPosition);
        localStorage.removeItem("scrollPosition");
      }
    }
  }, []);

  return (
    <div
      className="main-container 
                    ml-0 w-full px-4
                    lg:ml-[45%] lg:w-[40%]
                    h-screen overflow-y-auto snap-y snap-mandatory">
      {/* LanguageSwitcher: Her zaman sağ üst */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>
      {children}
    </div>
  );
}
