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

## 📄 Licencing
This repository is available under the **Apache 2.0** licence – feel free to copy, remix, or embed.

If you use this repo in your own portfolio or in an article, add a short attribution, e.g.:

```text
Portfolio powered by Duke‑Portfolio (https://github.com/TheOnlyDuke/Duke-Portfolio)
```
