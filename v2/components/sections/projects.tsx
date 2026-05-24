import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { fetchPinnedRepos } from "@/lib/github";
import { getTranslations } from "next-intl/server";

export default async function Projects() {
  const repos = await fetchPinnedRepos(); // Server component: güvenli
  const t = await getTranslations("Projects");

  return (
    <section id="projects">
      <h2 id="projects-title" className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        <span className="text-sky-500">// </span>
        {t("title")}
      </h2>

      {repos.length === 0 && (
        <p className="text-muted-foreground text-sm md:text-base">{t("noProjects")}</p>
      )}

      <ul className="space-y-4 md:space-y-6">
        {repos.map((r) => (
          <li key={r.url} className="rounded-2xl p-3 md:p-6 hover:border-sky-500 transition-all">
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
              {/* Sol: Görsel */}
              <div className="relative w-full md:w-56 h-32 md:h-40 overflow-hidden rounded-xl">
                {r.openGraphImageUrl ? (
                  <Image
                    src={r.openGraphImageUrl}
                    alt={`${r.name} önizleme`}
                    fill
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                    sizes="(max-width:768px) 100vw, 224px"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center text-slate-500 text-sm">
                    {t("noImage")}
                  </div>
                )}
              </div>

              {/* Sağ: İçerik */}
              <div className="flex-1">
                <div className="md:pl-5">
                  <div className="flex items-start justify-between">
                    <a
                      href={r.url}
                      target="_blank"
                      className="font-semibold text-base md:text-lg hover:underline cursor-target">
                      {r.name}
                    </a>
                  </div>

                  {r.description && (
                    <p className="text-xs md:text-sm text-slate-300 mt-1 mb-3 leading-relaxed">
                      {r.description}
                    </p>
                  )}

                  {/* Teknolojiler */}
                  <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                    {r.primaryLanguage?.name && (
                      <span
                        className="bg-sky-500/10 text-sky-500 text-xs
    px-2 py-1 rounded-lg border border-sky-500/40
     transition">
                        {r.primaryLanguage.name}
                      </span>
                    )}

                    {r.topics.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="bg-sky-500/10 text-sky-500 text-xs px-2 py-1 rounded-lg border border-sky-500/40 transition">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Butonlar */}
                  <div className="flex gap-2 md:gap-3">
                    <a
                      href={r.url}
                      target="_blank"
                      className="inline-flex items-center gap-1 border border-text rounded-lg px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm hover:border-sky-500 hover:text-sky-500 hover:bg-sky-500/10 text-text transition cursor-target">
                      <Github size={14} className="md:w-4 md:h-4" /> GitHub
                    </a>

                    {r.homepageUrl && (
                      <Link
                        href={r.homepageUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 border border-text rounded-lg px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm hover:border-sky-500 hover:text-sky-500 hover:bg-sky-500/10 text-text transition cursor-target">
                        <ExternalLink size={14} className="md:w-4 md:h-4" /> Live
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
