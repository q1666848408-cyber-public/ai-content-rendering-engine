# AI-Content-Rendering-Engine

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

> **Showcase** — ~15% skeleton. Core implementation not included.

Dual-engine content renderer. The graphic engine converts HTML templates to 1080x1440 PNG. The video engine renders 60 fps 1080x1920 MP4 using React and Remotion.

## Stack

- Node.js, TypeScript
- Puppeteer (graphic engine)
- Next.js 14, Remotion (video engine)

## Engines

### Graphic Engine

Renders HTML/CSS templates to static images via Puppeteer headless Chrome.

- Output: 1080x1440 PNG
- 4 themes (light, dark, brand, minimal)
- 22 component types (quote card, data chart, thread post, etc.)

### Video Engine

Programmatic video composition with React components timed to a frame timeline.

- Output: 1080x1920 MP4 at 60 fps
- 5 portrait templates (product showcase, news summary, tutorial, listicle, quote reel)

## Usage

```bash
npm install

# Render a graphic
npx ts-node graphic/render.ts   --template quote-card   --theme dark   --data '{"text":"...", "author":"..."}'   --out output.png

# Render a video
npx remotion render video/templates/ProductShowcase   --props '{"title":"...","clips":[...]}'   --output output.mp4
```

## Structure

```
AI-Content-Rendering-Engine/
├── graphic/
│   ├── templates/     # 22 HTML/CSS component templates
│   ├── themes/        # 4 theme definitions
│   └── render.ts      # Puppeteer render entry
├── video/
│   ├── templates/     # 5 Remotion composition templates
│   └── Root.tsx       # Remotion root
├── shared/
│   └── types.ts
└── package.json
```

## API

Both engines expose a REST endpoint when running as a service:

```bash
node server.js   # listens on :3000

POST /render/graphic  { template, theme, data }  → PNG
POST /render/video    { template, props }         → MP4
```
