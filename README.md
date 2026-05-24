# avc-portfolio — Next.js Scaffold

Kişisel portföy sitesi. Next.js 15 App Router + next-intl (TR/DE/EN) + Tailwind CSS.
Brittany Chiang v4 ilhamlı.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000/tr` (varsayılan), `/de`, `/en` adreslerinden açılır.

## Yapı

```
src/
├── app/
│   ├── globals.css           # Token CSS vars
│   └── [locale]/
│       ├── layout.tsx        # Fonts, providers, html lang
│       └── page.tsx          # Sayfa kompozisyonu
├── components/               # 9 component (Hero, About, ...)
├── data/
│   ├── projects.ts           # Featured projects
│   └── stack.ts              # Stack categories
├── i18n/
│   ├── routing.ts            # next-intl routing
│   └── request.ts            # i18n config
└── middleware.ts             # Locale routing middleware

messages/
├── tr.json
├── de.json
└── en.json

public/                       # Statik dosyalar (foto, projeler, resume.pdf)
```

## Tokenlar

CSS variables `src/app/globals.css` içinde. Tailwind onları `tailwind.config.ts`
üzerinden utility class'lara map'liyor:

- `bg-bg` → arka plan (#0A192F)
- `bg-surface` → kart yüzey (#112240)
- `text-primary` → sky blue accent (#38BDF8)
- `text-slate-100` → başlık metin (#CCD6F6)
- `text-slate-300` → gövde metin (#8892B0)
- `font-sans` → Space Grotesk
- `font-mono` → JetBrains Mono

## İçerik

Yer tutucular var. **CONTENT-TODO.md** dosyasını oku — neyi nereye koyacağını
adım adım listeledim.

Foto için: `public/photo.jpg` (1:1, About bölümü için), `public/photo-2.jpg`
(opsiyonel, Hikayem benzeri).
Proje görselleri: `public/projects/{id}.png` (16:10).
Resume: `public/resume.pdf`.

About / Hero / Services metinleri `messages/{tr,de,en}.json` içinde — her dilde
düzenle.

## Deploy

```bash
npm run build
# veya doğrudan Vercel'e push, otomatik deploy
```

## İlham

Yapı + estetik referans: [v4.brittanychiang.com](https://v4.brittanychiang.com).
