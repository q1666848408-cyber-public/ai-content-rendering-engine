<div align="center">

# 🎨 AI Content Rendering Engine

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![Remotion](https://img.shields.io/badge/Remotion-Video-FF6E00?style=flat-square)](https://remotion.dev)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-Graphic-40B5A4?style=flat-square&logo=puppeteer&logoColor=white)](https://pptr.dev)
[![Bun](https://img.shields.io/badge/Bun-Runtime-000000?style=flat-square&logo=bun&logoColor=white)](https://bun.sh)

**Dual-engine content renderer — graphic (Puppeteer + HTML templates) and video (Next.js + Remotion) in one repo**

> ⚠️ **Showcase Only** — ~15% skeleton. Template library, business logic & deploy scripts not included.

</div>

---

## ✨ Overview

A unified rendering layer that takes structured content (JSON / Markdown) and outputs either **1080×1440 graphic cards** or **1080×1920 60-fps videos**. The two engines share a templating mindset (templates as code) but use different runtimes optimized for their output format.

---

## 🏗️ Architecture

```
                Structured Content (JSON)
                          │
              ┌───────────┴──────────────┐
              ▼                          ▼
    ┌──────────────────┐       ┌──────────────────┐
    │  Graphic Engine  │       │  Video Engine    │
    │  graphic/        │       │  src/remotion/   │
    │                  │       │                  │
    │  HTML templates  │       │  React templates │
    │  + Puppeteer     │       │  + Remotion      │
    └────────┬─────────┘       └────────┬─────────┘
             │                          │
             ▼                          ▼
       PNG cards                 MP4 (1080×1920)
       1080×1440 ×N              60 FPS
```

---

## 📁 Structure

```
ai-content-rendering-engine/
├── graphic/
│   ├── screenshot.js            # Puppeteer renderer
│   └── templates/example.html
├── src/
│   └── remotion/
│       ├── Root.tsx             # Remotion entrypoint
│       └── templates/NewsVideo.tsx
└── package.json
```

---

## 🔧 Tech Stack

| Engine | Stack |
|---|---|
| **Graphic** | HTML / CSS · Puppeteer · Node.js |
| **Video** | Next.js · Remotion · React · TypeScript |
| Runtime | Bun (preferred) / Node.js |

---

## 🚀 Quick Start

```bash
bun install
# Graphic:
cd graphic && node screenshot.js templates/example.html
# Video:
bun remotion studio
```

---

<div align="center">
<sub>Showcase version · Production templates not included · For portfolio reference only</sub>
</div>
