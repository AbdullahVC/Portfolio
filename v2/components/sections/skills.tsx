"use client";

import { useTranslations } from "next-intl";
import { RiNextjsLine, RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { TbApi, TbBrandTailwind, TbBrandTypescript, TbHexagon3D } from "react-icons/tb";
import {
  SiDocker,
  SiEslint,
  SiExpress,
  SiPnpm,
  SiNestjs,
  SiPostman,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiRailway,
  SiShadcnui,
  SiVercel,
  SiGithub,
  SiGithubactions,
  SiOpenai,
  SiN8N,
} from "react-icons/si";
import { TR, DE, GB } from "country-flag-icons/react/3x2";

function GroupCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-700/40 p-3 md:p-5">
      <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold tracking-wide text-sky-500 underline decoration-sky-500 decoration-2 underline-offset-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-3">{children}</div>
    </div>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center flex-col rounded-lg">
      <span className="text-sky-500 text-2xl md:text-3xl">{icon}</span>
      <span className="text-xs md:text-sm text-text-color">{label}</span>
    </div>
  );
}

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="min-h-screen py-12">
      <h2 id="skills-title" className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        <span className="text-sky-500">// </span>
        {t("title")}
      </h2>

      {/* Kartları yan yana/gride yerleştir */}
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Frontend */}
        <GroupCard title={t("frontend")}>
          <Row icon={<RiNextjsLine />} label="Next.js" />
          <Row icon={<RiReactjsLine />} label="React" />
          <Row icon={<TbBrandTypescript />} label="TypeScript" />
          <Row icon={<TbBrandTailwind />} label="Tailwind CSS" />
          <Row icon={<SiShadcnui />} label="Shadcn/UI" />
        </GroupCard>

        {/* Backend */}
        <GroupCard title={t("backend")}>
          <Row icon={<RiNodejsLine />} label="Node.js" />
          <Row icon={<TbBrandTypescript />} label="TypeScript" />
          <Row icon={<SiExpress />} label="Express" />
          <Row icon={<SiNestjs />} label="NestJS" />
          <Row icon={<TbApi />} label="REST APIs" />
          <Row icon={<SiPrisma />} label="Prisma" />
          <Row icon={<SiPostgresql />} label="PostgreSQL" />
        </GroupCard>

        {/* AI & Automation */}
        <GroupCard title={t("ai")}>
          <Row icon={<TbHexagon3D />} label="CursorAI" />
          <Row icon={<SiOpenai />} label="OpenAI" />
          <Row icon={<SiN8N />} label="n8n" />
        </GroupCard>

        {/* Tools */}
        <GroupCard title={t("tools")}>
          <Row icon={<SiGithub />} label="GitHub" />
          <Row icon={<SiDocker />} label="Docker" />
          <Row icon={<SiPnpm />} label="pnpm" />
          <Row icon={<SiPostman />} label="Postman" />
          <Row icon={<SiGithubactions />} label="GitHub Actions" />
          <Row icon={<SiEslint />} label="ESLint" />
          <Row icon={<SiPrettier />} label="Prettier" />
          <Row icon={<SiVercel />} label="Vercel" />
          <Row icon={<SiRailway />} label="Railway" />
        </GroupCard>

        {/* Languages */}
        <GroupCard title={t("languages")}>
          <div className="flex items-center flex-col">
            <TR title="Turkish" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            <span className="text-xs md:text-sm text-slate-200">{t("turkish")}</span>
          </div>
          <div className="flex items-center flex-col">
            <DE title="German" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            <span className="text-xs md:text-sm text-slate-200">{t("german")}</span>
          </div>
          <div className="flex items-center flex-col">
            <GB title="English" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
            <span className="text-xs md:text-sm text-slate-200">{t("english")}</span>
          </div>
        </GroupCard>
      </div>
    </section>
  );
}
