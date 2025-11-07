"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import RotatingText from "react-rotating-text";
import SidebarNav from "../elements/SidebarNav";
import SocialLinks from "../elements/SocialLinks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  // Açıldığında odak sidebar'a
  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      const firstFocusable = sidebarRef.current.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop: Sabit sol tarafta */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-[45%] h-screen flex-col justify-between px-12 py-16">
        <div>
          <h1 className="text-7xl text-right font-bold text-text-color">Abdullah V.</h1>
          <h2 className="text-7xl text-right font-bold text-text-color">ÇOŞKUN</h2>
          <p className="text-4xl text-right mt-3 chakra">Full Stack Web Developer</p>
          <div className="text-3xl text-right mt-3 chakra">
            <RotatingText
              items={[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "REST API",
              ]}
              pause={2000}
              typingInterval={70}
              deletingInterval={40}
            />
          </div>
        </div>
        <SidebarNav setIsOpen={onClose} />
        <SocialLinks />
      </aside>

      {/* Tablet & Mobil: Overlay menü */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 left-0 w-80 md:w-96 h-screen flex flex-col justify-between px-6 py-8 pb-safe 
                    bg-slate-800 z-50 
                    lg:hidden
                    motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out
                    ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-11 h-11 rounded-full bg-slate-700/50 hover:bg-slate-600/70 
                     flex items-center justify-center transition-colors duration-200 z-50"
          aria-label="Close menu">
          <X size={24} className="text-text-color" />
        </button>

        <div>
          <h1 className="text-3xl text-right font-bold text-text-color">Abdullah V.</h1>
          <h2 className="text-3xl text-right font-bold text-text-color">ÇOŞKUN</h2>
          <p className="text-xl text-right mt-2 chakra">Full Stack Web Developer</p>
          <div className="text-lg text-right mt-2 chakra">
            <RotatingText
              items={[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "REST API",
              ]}
              pause={2000}
              typingInterval={70}
              deletingInterval={40}
            />
          </div>
        </div>
        <SidebarNav setIsOpen={onClose} />
      </aside>
    </>
  );
}
