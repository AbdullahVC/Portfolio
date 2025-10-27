"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  const paragraphs = ["p1", "p2", "p3", "p4"].map((k) => t(k));

  return (
    <section id="about">
      <h2 id="about-title" className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-text">
        <span className="text-sky-500">// </span>
        {t("title")}
      </h2>

      <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-6 md:leading-7 text-color">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-4 text-base md:text-lg font-semibold text-white">"{t("p5")}"</p>
    </section>
  );
}
