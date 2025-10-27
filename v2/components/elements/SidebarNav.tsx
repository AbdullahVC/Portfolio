"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface SidebarNavProps {
  setIsOpen?: (isOpen: boolean) => void;
}

export default function SidebarNav({ setIsOpen }: SidebarNavProps = {}) {
  const t = useTranslations("SidebarNav");
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "skills", "experiences"];

    const observer = new IntersectionObserver(
      (entries) => {
        // En çok görünen section'ı bul
        let maxVisibleRatio = 0;
        let mostVisibleSection = "about";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibleRatio) {
            maxVisibleRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (maxVisibleRatio > 0) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    // Her section'ı observe et
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    const baseClasses = "w-fit inline-block px-1 transition-all duration-300 origin-right";

    if (isActive) {
      return `${baseClasses} text-text scale-110 drop-shadow-[0_0_10px_rgba(97,218,251,0.5)] underline underline-offset-4 decoration-sky-500`;
    }

    return `${baseClasses} hover:text-text hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.5)]`;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex flex-col items-end gap-2 mt-10 text-secondaryText text-lg md:text-xl font-bold text-right">
      <a href="#about" className={getLinkClasses("about")} onClick={handleClick}>
        {t("About")}
      </a>
      <a href="#projects" className={getLinkClasses("projects")} onClick={handleClick}>
        {t("Projects")}
      </a>
      <a href="#skills" className={getLinkClasses("skills")} onClick={handleClick}>
        {t("Skills")}
      </a>
      <a href="#experiences" className={getLinkClasses("experiences")} onClick={handleClick}>
        {t("Experiences")}
      </a>
    </nav>
  );
}
