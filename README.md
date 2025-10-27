# Personal Portfolio Website

Modern web teknolojileri kullanılarak geliştirilmiş kişisel portfolyo web sitesi. Proje iki versiyondan oluşuyor: v1 (Vite + React) ve v2 (Next.js 15 + TypeScript).

## 🔍 Demo

Live: [abdullahvcoskun.dev](https://abdullahvcoskun.dev/)

## 📦 Versiyonlar

### v1 - React + Vite

- React 19 ile geliştirilmiş klasik SPA
- Vite 6 ile hızlı geliştirme ortamı
- Custom cursor animasyonu
- Material UI 7 + Tailwind CSS 4
- Temel responsive tasarım

### v2 - Next.js 15 + TypeScript (⭐ Aktif)

- Next.js 15 App Router ile geliştirilmiş
- TypeScript ile tam tip güvenliği
- **Üç dilli destek** (Türkçe, İngilizce, Almanca) - `next-intl`
- **SEO optimizasyonu**: Metadata, sitemap, robots.txt, JSON-LD
- **Responsive tasarım**: Mobile, tablet, desktop breakpoints
- GitHub API entegrasyonu ile otomatik proje çekme
- Intersection Observer ile aktif section tracking
- Smooth scroll ve snap scroll
- Hamburger menu (mobile/tablet)
- Sidebar navigation (desktop)
- Language switcher (yuvarlak bayraklar)
- Glassmorphism efektleri
- Accessibility (ARIA, focus management, reduced motion)

## 🚀 Teknolojiler (v2)

- **Framework**: Next.js 15
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, react-icons, lucide-react
- **i18n**: next-intl
- **Code Quality**: ESLint 9
- **Package Manager**: pnpm
- **Icons**: react-icons, lucide-react, country-flag-icons
- **Animation**: react-rotating-text

## 📋 Özellikler (v2)

### UI/UX

- ✅ Modern ve responsive tasarım
- ✅ Aktif section highlighting
- ✅ Smooth scroll
- ✅ Glassmorphism efektleri
- ✅ Custom animasyonlar
- ✅ Dark theme

### İçerik

- ✅ Hakkımda bölümü (dinamik, dilli)
- ✅ Projeler (GitHub API ile otomatik)
- ✅ Yetenekler (kategorize, görsel)
- ✅ Deneyimler (iş/eğitim, dilli)

### Teknik

- ✅ URL tabanlı dil yönetimi
- ✅ Scroll position preservation
- ✅ Image optimization (next/image)
- ✅ SEO optimizasyonu
- ✅ Accessibility (WCAG)
- ✅ Performance optimizations

## 🏗️ Proje Yapısı

### v1 (Vite + React)

```
v1/
├── src/
│   ├── components/
│   │   ├── Elements/       # UI components (Cursor, ProjectCard, ExperienceCard)
│   │   ├── Layouts/        # Layout components (Main, Sidebar)
│   │   └── Sections/       # Content sections (About, Skills, Projects, Experiences)
│   ├── hooks/              # Custom hooks
│   ├── data/               # Data files
│   ├── locales/             # Translations
│   └── styles/              # CSS files
├── public/                  # Static assets
└── index.html
```

### v2 (Next.js 15) ⭐

```
v2/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── layout.tsx      # Root layout with i18n
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── icon.ico            # Favicon
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots
├── components/
│   ├── elements/           # UI elements
│   │   ├── HamburgerButton.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── SidebarNav.tsx
│   │   └── SocialLinks.tsx
│   ├── layout/             # Layout components
│   │   ├── MainContainer.tsx
│   │   └── Sidebar.tsx
│   ├── sections/           # Content sections
│   │   ├── about.tsx
│   │   ├── experiences.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   └── LayoutWrapper.tsx   # Global layout wrapper
├── lib/
│   ├── github.ts           # GitHub API client
│   └── data/               # Static data
├── messages/               # i18n translations
│   ├── tr.json
│   ├── en.json
│   └── de.json
├── public/                 # Static assets
│   └── favicon/            # Favicon files
├── i18n.ts                 # i18n config
├── middleware.ts           # Next.js middleware
└── next.config.ts          # Next.js config
```

## 📑 Bölümler

### v1 & v2

1. **About Me** (Hakkımda)

   - Kişisel bilgiler ve tanıtım
   - v2: Dilli destek

2. **My Skills** (Yetenekler)

   - Teknik yetenekler ve teknolojiler
   - v2: Kategorize (Frontend, Backend, AI, Tools, Languages)
   - v2: Görsel iconlar

3. **My Experiences** (Deneyimler)

   - İş ve eğitim geçmişi
   - v2: Dilli başlık, açıklama, süre
   - v2: Responsive layout

4. **My Projects** (Projeler)
   - Geliştirilen projeler
   - v2: GitHub API ile otomatik çekme
   - v2: Open Graph görseller

## 🌍 i18n Desteği (v2)

- **Diller**: Türkçe (tr), İngilizce (en), Almanca (de)
- **URL Yapısı**: `/tr`, `/en`, `/de` (default: tr)
- **Kütüphane**: next-intl
- **Dosya Yapısı**: `messages/{locale}.json`

### Çeviri Dosyaları

- `messages/tr.json` - Türkçe
- `messages/en.json` - İngilizce
- `messages/de.json` - Almanca

Her dosya şu anahtarları içerir:

- About, Metadata, SidebarNav, Projects, Skills, experience

## 🎨 Tasarım Kararları (v2)

### Responsive Breakpoints

- **Mobile**: `< 768px` (full width, hamburger menu)
- **Tablet**: `768px - 1024px` (full width, hamburger menu)
- **Desktop**: `> 1024px` (sidebar + main content)

### Layout

- Desktop: Fixed sidebar (45% width) + scrollable content (40% width)
- Mobile/Tablet: Hamburger menu + full width content
- Language switcher: Top right corner

### Colors

- Background: `#0f172a` (slate-900)
- Text: `#ccd6f6` (slate-100)
- Secondary: `#8892b0` (slate-400)
- Accent: `#0ea5e9` (sky-500)

## 🔧 Geliştirme

### v2 Kurulum

```bash
cd v2
pnpm install
pnpm dev
```

### Ortam Değişkenleri (.env)

```env
GITHUB_TOKEN=your_github_token
```

### Build

```bash
pnpm build
pnpm start
```

## 🔄 Veri Yönetimi

### v1

- Veriler `src/data/` klasöründe JSON dosyalarında
- Manuel güncelleme gerekli

### v2

- **Projeler**: GitHub API ile otomatik (`lib/github.ts`)
- **Deneyimler**: `lib/data/experiences.ts` (manuel)
- **Skills**: `components/sections/skills.tsx` (hardcoded)
- **About**: `messages/{locale}.json` içinde

## 📊 Performans (v2)

- ✅ Image optimization (next/image)
- ✅ Package import optimization
- ✅ Compressed assets
- ✅ Static generation
- ✅ SEO metadata

## ♿ Accessibility (v2)

- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Reduced motion support
- ✅ Semantic HTML

## 🔮 Gelecek Planları

- [ ] Blog bölümü
- [ ] PDF CV indirme
- [ ] Dark/Light mode toggle
- [ ] Animasyon iyileştirmeleri
- [ ] PWA desteği
- [ ] Analytics entegrasyonu

## 💬 İletişim

Abdullah Veysel Çoşkun - [info@abdullahvcoskun.dev](mailto:info@abdullahvcoskun.dev)

Project Link: [https://github.com/AbdullahVC/Portfolio](https://github.com/AbdullahVC/Portfolio)

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.
