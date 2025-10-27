"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const FlagIcon = ({ country }: { country: string }) => {
  const flags = {
    tr: (
      <div className="w-full h-full rounded-full overflow-hidden">
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <g fillRule="evenodd">
            <path fill="#e30a17" d="M0 0h512v512H0z" />
            <path
              fill="#fff"
              d="M348.8 264c0 70.6-58.3 127.9-130.1 127.9s-130.1-57.3-130.1-128 58.2-127.8 130-127.8S348.9 193.3 348.9 264z"
            />
            <path
              fill="#e30a17"
              d="M355.3 264c0 56.5-46.6 102.3-104.1 102.3s-104-45.8-104-102.3 46.5-102.3 104-102.3 104 45.8 104 102.3z"
            />
            <path
              fill="#fff"
              d="m374.1 204.2-1 47.3-44.2 12 43.5 15.5-1 43.3 28.3-33.8 42.9 14.8-24.8-36.3 30.2-36.1-46.4 12.8z"
            />
          </g>
        </svg>
      </div>
    ),
    en: (
      <div className="w-full h-full rounded-full overflow-hidden">
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <path fill="#012169" d="M0 0h512v512H0z" />
          <path
            fill="#FFF"
            d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
          />
          <path
            fill="#C8102E"
            d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
          />
          <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
          <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
        </svg>
      </div>
    ),
    de: (
      <div className="w-full h-full rounded-full overflow-hidden">
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <path fill="#000" d="M0 0h512v170.7H0z" />
          <path fill="#DD0000" d="M0 170.7h512v170.6H0z" />
          <path fill="#FFCE00" d="M0 341.3h512V512H0z" />
        </svg>
      </div>
    ),
  };

  return flags[country as keyof typeof flags] || null;
};

const languages = [
  { code: "tr", name: "", flag: "tr" },
  { code: "en", name: "", flag: "en" },
  { code: "de", name: "", flag: "de" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    // Mevcut scroll pozisyonunu kaydet
    const scrollContainer = document.querySelector(".main-container");
    if (scrollContainer) {
      localStorage.setItem("scrollPosition", scrollContainer.scrollTop.toString());
    }

    // URL'den mevcut locale'i kaldır ve yenisini ekle
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <div className="relative">
      {/* Ana buton */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 md:w-8 md:h-8 rounded-full 
                   flex items-center justify-center text-2xl hover:bg-slate-700/50 
                   transition-all duration-200 hover:scale-110 hover:border-primary/50
                   hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.3)] cursor-target"
        title={currentLanguage.name}>
        <FlagIcon country={currentLanguage.flag} />
      </button>

      {/* Dropdown menü */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Bayraklar - Direkt aşağıya sıralı */}
          <div className="absolute top-full left-0 mt-3 gap-3 z-20 flex flex-col">
            {languages
              .filter((lang) => lang.code !== locale)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center text-2xl transition-all duration-200 hover:bg-slate-700/50 hover:scale-110 hover:border-primary/50 hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.3)] cursor-target`}>
                  <FlagIcon country={lang.flag} />
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
