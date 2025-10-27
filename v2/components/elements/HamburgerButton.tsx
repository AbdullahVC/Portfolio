"use client";

import { forwardRef } from "react";
import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ isOpen, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="fixed top-4 left-4 z-50 lg:hidden 
                   w-11 h-11 rounded-full bg-slate-800/50 backdrop-blur-md
                   border border-slate-700/50 flex items-center justify-center
                   hover:bg-slate-700/70 hover:border-sky-500/50
                   transition-all duration-200
                   touch-manipulation
                   motion-safe:transition-transform"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}>
        {isOpen ? (
          <X size={24} className="text-text-color" />
        ) : (
          <Menu size={24} className="text-text-color" />
        )}
      </button>
    );
  }
);

HamburgerButton.displayName = "HamburgerButton";

export default HamburgerButton;
