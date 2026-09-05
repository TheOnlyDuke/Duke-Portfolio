[🇬🇧 English (Current)](README.md) | [🇮🇷 فارسی](README.fa.md)

# Minimal R&D Portfolio

A lightweight, zero‑configuration Next.js site that serves as a base for quick research and product demos.

## ✨ Features
- **Fast bootstrap** – cook‑off in < 2 min.
- **Zero‑config build** – all build tooling is pre‑tuned for production.
- **Component‑driven UI** – all React components start in `src/components` for easy reuse.
- **Tooling** – ESLint for style, Prettier for formatting, and a TypeScript dev env for future migration.
- **Design system ready** – powered by Material‑UI v9 + Emotion, ready to drop in a theme.

## 🛠️ Tech stack
- **Framework**: Next.js 16.3+ (app router, TypeScript support, image optimisation)
- **UI**: React 19, MUI v9, Emotion
- **Tooling**: ESLint, TypeScript (dev), Node 18+ (recommended)
- **Linting/formatting**: ESLint

## 📁 Project layout
```
├─ src
│  ├─ app        # Next.js app router pages
│  ├─ components # Reusable UI primitives
│  ├─ data       # JSON snippets for demo data
│  ├─ theme      # MUI + Emotion theme config
│  └─ assets
└─ public
```

## 🚀 Quick start
```bash
# clone
git clone https://github.com/TheOnlyDuke/Duke-Portfolio.git
cd Duke-Portfolio

# install
npm install

# run locally
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to preview.

## 📦 Build / Deploy
```bash
npm run build
npm start # or
npx serve out
```

> The site ships to a static `out/` directory; any hosting provider that serves static assets will work.

## 🛠️ Customizing Your Portfolio
You do **not** need to modify any application source code to personalize this portfolio. All content — profile, education, experience, skills, projects, research, publications, and contact details — lives in a single data file:

`src/data/portfolio-data.ts`

Edit this file to update your information. The application automatically reflects your changes.

> **Future improvement:** An admin interface is planned, which will make managing and updating your portfolio content even easier without manually editing the data file.

For a detailed guide on the file structure and how to customize each section, see:
[📖 Data Management Manual](Manual/English/Data-Management.md)

## 📄 Licencing
This repository is available under the **Apache 2.0** licence – feel free to copy, remix, or embed.

If you use this repo in your own portfolio or in an article, add a short attribution, e.g.:

```text
Portfolio powered by Duke‑Portfolio (https://github.com/TheOnlyDuke/Duke-Portfolio)
```
