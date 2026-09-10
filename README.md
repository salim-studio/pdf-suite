# PDF Suite — أدوات PDF أونلاين | Online PDF Tools

منصة متكاملة لأدوات PDF تعمل **داخل المتصفح بالكامل** — بدون سيرفر، بدون حساب، وملفاتك لا تغادر جهازك.

All-in-one PDF toolkit that runs **100% in the browser** — no server, no sign-up, your files never leave your device.

🌐 **Live demo:** `https://salim-studio.github.io/pdf-suite/` *(فعّل GitHub Pages من Settings ← Pages ← Deploy from a branch ← `main` / `/(root)`)*

## ✨ المميزات | Features

- **111 أداة** في 6 أقسام: تعديل، تنظيم، تحويل، مسح وOCR، ضغط، حماية — **81 أداة شغالة فعليًا**
- 🎨 أيقونات على طراز macOS + عربي (RTL) وإنجليزي (LTR)
- ✏️ **محرر PDF مرئي** (`edit-pdf.html`): نص، صور، أشكال، توقيع بالرسم، و**OCR يحوّل الممسوح لنص قابل للتحرير**
- 🔍 OCR بـ Tesseract.js (عربي، إنجليزي، فرنسي، إسباني، ألماني…)
- 🌍 ترجمة PDF مع كشف تلقائي للغة (فرنسي، إسباني، ألماني… + عربي/إنجليزي)
- 📄 تحويل Office من وإلى PDF: Word↔PDF (DOCX حقيقي)، Excel↔PDF (XLSX/CSV)، PDF→PPTX
- 🖼️ صور↔PDF، دمج، تقسيم، استخراج، حذف، تدوير، ضغط، فلاتر (رمادي/داكن/تباين)

## 🚀 التشغيل | Quick start

```bash
# أي سيرفر ستاتيك، مثلا:
python -m http.server 8000
# ثم افتح: http://localhost:8000
```

أو افتح `index.html` مباشرة في المتصفح (يُفضّل سيرفر محلي ليعمل كل شيء).

## 📁 البنية | Structure

```
index.html      الصفحة الرئيسية (الأقسام + أشهر الأدوات + بحث)
tools.html      كل الأدوات الـ111 مع بحث وفلترة
tool.html       تشغيل أي أداة (?tool=merge-pdf)
edit-pdf.html   المحرر المرئي (نص/صور/أشكال/توقيع/OCR)
css/style.css   التنسيقات
js/tools-data.js كتالوج الأدوات (111)
js/engine.js     محرك المعالجة (pdf-lib + pdf.js + Tesseract…)
js/icons.js      نظام الأيقونات + favicon
js/i18n.js       عربي/إنجليزي
```

## 🛠️ التقنيات | Tech

- [pdf-lib](https://github.com/Hopding/pdf-lib) — إنشاء وتعديل PDF
- [pdf.js](https://github.com/mozilla/pdf.js) — العرض واستخراج النص والصور
- [Tesseract.js](https://github.com/naptha/tesseract.js) — OCR داخل المتصفح
- [MyMemory API](https://mymemory.translated.net/) (مجاني) — الترجمة
- [mammoth](https://github.com/mwilliamson/mammoth.js)، [SheetJS](https://sheetjs.com/)، [docx](https://github.com/dolanmiu/docx)، [PptxGenJS](https://github.com/gitbrent/PptxGenJS)، [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) — تحويلات Office

## 🔒 الخصوصية | Privacy

كل المعالجة تتم محليًا في متصفحك. الاستثناء الوحيد: نصوص الترجمة تُرسل لخدمة MyMemory المجانية.
