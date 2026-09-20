<p align="center">
  <img src="assets/banner.svg" alt="PDF Suite banner" width="100%">
</p>

<p align="center">
  <img src="assets/logo.svg" alt="PDF Suite logo" width="96"/>
</p>

# PDF Suite — Online PDF Tools | أدوات PDF أونلاين

**English first.** All-in-one PDF toolkit that runs **100% in the browser** — no server, no sign-up, your files never leave your device.

منصة متكاملة لأدوات PDF تعمل **داخل المتصفح بالكامل** — بدون سيرفر، بدون حساب، وملفاتك لا تغادر جهازك.

🌐 **Live demo:** `https://salim-studio.github.io/pdf-suite/`

## Brand Identity

| Element | Description |
|---|---|
| **Name** | PDF Suite |
| **Tagline** | Fast, Private, All-in-One PDF Toolkit |
| **Logo** | `assets/logo.svg` — white document + red PDF badge + blue speed bolt on deep navy (also used as favicon) |
| **Banner** | `assets/banner.svg` — 1200×380 social / GitHub preview |
| **Hero visual** | `assets/hero.svg` — homepage illustration |
| **Palette** | Navy `#0B1220` • Green `#22C55E` • Sky `#38BDF8` • Red `#EF4444` • Muted `#93A4C4` |
| **Language** | English by default, Arabic available via toggle (RTL/LTR) |
| **Owner** | Salim Slimani — Copyright © 2026 salim-slimani. All rights reserved. |

## Features | المميزات

- **111 tools** in 6 categories: edit, organize, convert, scan & OCR, compress, secure — **81 working in-browser**
- 🎨 macOS-style icons + English (LTR) and Arabic (RTL)
- ✏️ **Visual PDF editor** (`edit-pdf.html`): text, images, shapes, drawn signature, and **OCR that turns scans into editable text**
- 🔍 OCR with Tesseract.js (English, Arabic, French, Spanish, German…)
- 🌍 PDF translation with auto language detection
- 📄 Real Office ↔ PDF: Word↔PDF (real DOCX), Excel↔PDF (XLSX/CSV), PDF→PPTX
- 🖼️ Images↔PDF, merge, split, extract, delete, rotate, compress, filters (grayscale/dark/contrast)

## Quick start | التشغيل

```bash
# Any static server, e.g.:
python -m http.server 8000
# Then open: http://localhost:8000
```

Or open `index.html` directly (a local server is recommended so everything works).

## Structure | البنية

```
index.html       Home (categories + popular tools + search + hero visual)
tools.html       All 111 tools with search and filters
tool.html        Run any tool (?tool=merge-pdf)
edit-pdf.html    Visual editor (text/images/shapes/signature/OCR)
assets/          logo.svg, banner.svg, hero.svg (brand identity)
css/style.css    Styles + brand header/footer
js/tools-data.js Tool catalog (111)
js/engine.js     Processing engine (pdf-lib + pdf.js + Tesseract…)
js/icons.js      Icon system + favicon
js/i18n.js       English/Arabic (default: English)
```

## Tech | التقنيات

- [pdf-lib](https://github.com/Hopding/pdf-lib) — create and edit PDFs
- [pdf.js](https://github.com/mozilla/pdf.js) — render, extract text and images
- [Tesseract.js](https://github.com/naptha/tesseract.js) — in-browser OCR
- [MyMemory API](https://mymemory.translated.net/) (free) — translation
- [mammoth](https://github.com/mwilliamson/mammoth.js), [SheetJS](https://sheetjs.com/), [docx](https://github.com/dolanmiu/docx), [PptxGenJS](https://github.com/gitbrent/PptxGenJS), [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) — Office conversions

## Privacy | الخصوصية

All processing happens locally in your browser. The only exception: translation text is sent to the free MyMemory service.

## License

MIT — Copyright © 2026 salim-slimani. All rights reserved.
