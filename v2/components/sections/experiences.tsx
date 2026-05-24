"use client";

import { useTranslations } from "next-intl";
import { experiences } from "@/lib/data/experiences";

export default function Experiences() {
  const t = useTranslations("experience");

  return (
    <section id="experiences">
      <h2
        id="experiences-title"
        className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-text">
        <span className="text-sky-500">// </span>
        {t("title")}
      </h2>

      <ul className="space-y-6 md:space-y-8">
        {experiences.map((exp) => {
          const key = exp.titleKey.split(".")[2];
          return (
            <li key={exp.id}>
              {/* Header: Duration (left) and Title (right) */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                {/* Duration - left side, light blue */}
                <span className="text-sky-400 font-medium text-sm md:text-base">
                  {exp.duration}
                </span>

                {/* Title and company - right side */}
                <div className="text-left md:text-right">
                  <h3 className="text-base md:text-xl font-bold text-white">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    {t(`items.${key}.company`)}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-3 md:mt-4">
                {t(`items.${key}.description`)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
