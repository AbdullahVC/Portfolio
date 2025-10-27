# Personal Portfolio - v2

Modern Next.js 15 ile geliştirilmiş, TypeScript destekli, üç dilli (TR/EN/DE) kişisel portfolyo web sitesi.

## Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **i18n**: next-intl
- **UI**: shadcn/ui, react-icons, lucide-react
- **Animation**: react-rotating-text
- **Package Manager**: pnpm@9

## Yerel Geliştirme

### 1. Kurulum

```bash
cd v2
pnpm install
```

### 2. Environment Variables

`.env.example` dosyasını kopyalayın ve `.env` oluşturun:

```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin ve `GITHUB_TOKEN` değerini ekleyin:

```env
GITHUB_TOKEN=your_github_token_here
```

**GitHub Token Nasıl Alınır:**

1. https://github.com/settings/tokens adresine gidin
2. "Generate new token" → "Generate new token (classic)"
3. Token için bir isim verin (örn: "Portfolio API")
4. Scope olarak `public_repo` seçin
5. "Generate token" tıklayın ve token'ı kopyalayın
6. `.env` dosyasındaki `GITHUB_TOKEN` değerine yapıştırın

### 3. Çalıştırma

```bash
# Development mode
pnpm dev

# Production build (local test)
pnpm build

# Start production server
pnpm start
```

Uygulama http://localhost:3000 adresinde çalışır.

## Vercel Deployment

### Seçenek 1: Vercel Dashboard

1. **Projeyi GitHub'a Push Edin**

   ```bash
   git add v2/
   git commit -m "chore(v2): vercel deploy setup"
   git push origin main
   ```

2. **Vercel'e Git**

   - https://vercel.com adresine gidin
   - "Add New Project" tıklayın
   - GitHub repository'yi seçin

3. **Project Settings**

   - **Root Directory**: `v2` **SEÇİN** (ÖNEMLİ!)
   - **Framework Preset**: Next.js (auto-detect)
   - **Build Command**: `pnpm build` (auto)
   - **Output Directory**: `.next` (auto)
   - **Install Command**: `pnpm install` (auto)

4. **Environment Variables**

   - "Environment Variables" sekmesine gidin
   - Aşağıdaki değişkeni ekleyin:
     - **Name**: `GITHUB_TOKEN`
     - **Value**: GitHub token'ınız
     - **Environment**: Production, Preview, Development (hepsini seçin)

5. **Deploy**
   - "Deploy" tıklayın
   - Build başarıyla tamamlanınca projeniz canlıda!

### Seçenek 2: Vercel CLI

```bash
# Vercel CLI ile login
pnpm dlx vercel login

# Preview deployment (ilk deploy)
cd v2
pnpm dlx vercel --yes

# Production deployment
pnpm dlx vercel --prod --yes
```

**Önemli:** Vercel CLI kullanırken de Root Directory `v2` olduğundan emin olun.

## Domain Bağlama

Vercel projenizin otomatik verdiği domain (örn: `portfolio-xyz.vercel.app`) yerine özel domain kullanmak isterseniz:

1. Vercel Dashboard → Project → Settings → Domains
2. "Add Domain" tıklayın
3. Domain'inizi girin (örn: `abdullahvcoskun.dev`)
4. DNS ayarlarını yapın:
   - **A Record**: `@` → Vercel'in verdiği IP (dashboard'da gösterilir)
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
5. DNS propagasyonu 5-10 dakika sürebilir

## Sık Karşılaşılan Hatalar

### 1. "Build Failed - node_modules not found"

**Sebep:** Vercel Root Directory yanlış seçilmiş.

**Çözüm:** Vercel Dashboard → Project → Settings → General → Root Directory → `v2` seçin.

### 2. "GITHUB_TOKEN missing in .env"

**Sebep:** Environment variable eklenmemiş veya yanlış.

**Çözüm:** Vercel Dashboard → Project → Settings → Environment Variables → `GITHUB_TOKEN` ekleyin.

### 3. "Module not found: Can't resolve..."

**Sebep:** `package.json` eksik veya yanlış konumda.

**Çözüm:** `v2/package.json` dosyasının varlığını kontrol edin ve Root Directory'nin `v2` olduğundan emin olun.

### 4. "Image Optimization Error"

**Sebep:** `next.config.ts` içinde GitHub image domain'leri eksik.

**Çözüm:** `next.config.ts` dosyasında `remotePatterns` kontrol edin:

```typescript
images: {
  remotePatterns: [
    { protocol: "https", hostname: "avatars.githubusercontent.com" },
    { protocol: "https", hostname: "opengraph.githubassets.com" },
  ],
}
```

### 5. Build Başarılı Ama Site Boş Gözüküyor

**Sebep:** Root Directory yanlış.

**Çözüm:** Vercel Dashboard'da Root Directory'nin `v2` olduğundan emin olun.

## Build Komutları

```bash
# Development
pnpm dev

# Production build (local test)
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint

# Type check
pnpm tsc --noEmit
```

## Branch Stratejisi

- **`main`**: Production branch (Vercel production deployment)
- **`v2`**: Development branch (opsiyonel, deploy öncesi test için kullanılabilir)

Production'a deploy etmek için:

1. `main` branch'e push yapın veya
2. `v2` branch'i `main`'e merge edin

Vercel otomatik olarak `main` branch'inden production deployment yapar.

## Proje Yapısı

```
v2/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── icon.png            # Favicon
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── elements/           # UI elements
│   ├── layout/             # Layout components
│   └── sections/           # Content sections
├── lib/
│   ├── github.ts           # GitHub API client
│   └── data/               # Static data
├── messages/               # i18n translations
│   ├── tr.json
│   ├── en.json
│   └── de.json
├── public/
│   └── favicon/
├── .env.example
├── .gitignore
├── next.config.ts
└── package.json
```

## Lisans

MIT License - Detaylar için kök `LICENSE` dosyasına bakın.
