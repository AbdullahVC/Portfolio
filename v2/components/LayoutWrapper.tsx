"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";
import MainContainer from "@/components/layout/MainContainer";
import HamburgerButton from "@/components/elements/HamburgerButton";
import Cursor from "@/components/elements/Cursor";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    hamburgerButtonRef.current?.focus();
  };

  // Scroll kilidi & ESC key
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsSidebarOpen(false);
          hamburgerButtonRef.current?.focus();
        }
      };

      document.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  return (
    <>
      <Cursor />
      <HamburgerButton ref={hamburgerButtonRef} isOpen={isSidebarOpen} onClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <MainContainer>{children}</MainContainer>
    </>
  );
}
