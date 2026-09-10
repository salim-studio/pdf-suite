/* PDF Suite - Tools catalog: 111 tools in 6 categories (mirrors i2PDF structure) */
window.CATS = [
  { id:"edit", ar:"تعديل ملف PDF أونلاين", en:"Edit PDF online", arD:"قص الصفحات، إضافة تعليقات، تغيير المقاس والألوان، أرقام الصفحات", enD:"Crop, annotate, resize, page numbers and more, right in the browser.", count:17 },
  { id:"organize", ar:"ترتيب صفحات PDF أونلاين", en:"Organize PDF pages", arD:"دمج، تقسيم، سحب صفحات، تدوير أو حذف الصفحات", enD:"Merge, split, extract, rotate or delete pages.", count:10 },
  { id:"convert", ar:"تحويل PDF أونلاين (من وإلى PDF)", en:"Convert PDF (to & from)", arD:"PDF إلى Word وExcel وصور وHTML وغيرها، أو حوّل ملفاتك إلى PDF", enD:"PDF to Word, Excel, images, HTML and back to PDF.", count:66 },
  { id:"scan", ar:"مسح و OCR وتحسين PDF", en:"Scan, OCR & enhance", arD:"خلّ الملفات الممسوحة قابلة للبحث وواضحة", enD:"Make scans searchable and readable with OCR and enhancement.", count:6 },
  { id:"optimize", ar:"ضغط وتحسين PDF", en:"Compress & optimize", arD:"قلّل حجم الملف وسرّع التحميل وجهّزه للإرسال", enD:"Reduce size, speed loading, prepare for email and web.", count:5 },
  { id:"secure", ar:"حماية وتأمين PDF", en:"Protect & secure PDF", arD:"قفل بكلمة مرور، حجب بيانات، علامة مائية، توقيع", enD:"Password lock, redact, watermark, sign and flatten.", count:7 },
];

/* fn = client-side engine kind. null = needs server (UI demo) */
window.TOOLS = [
/* ---- EDIT (17) ---- */
{t:"edit-pdf",c:"edit",ar:"تعديل ملف PDF",en:"Edit PDF",arD:"إضافة نص وصور وتوقيع وأشكال",enD:"Add text, images, signature and shapes",fn:null},
{t:"crop-pdf",c:"edit",ar:"تصغير هامش صفح PDF",en:"Crop PDF",arD:"تصغير هامش الصفحات أو حذفه",enD:"Trim margins of PDF pages",fn:"crop"},
{t:"translate-pdf",c:"edit",ar:"ترجمة ملفات PDF",en:"Translate PDF",arD:"ترجمة الصفحات لأكثر من 50 لغة بالذكاء الاصطناعي",enD:"Translate pages to 50+ languages with AI",fn:null,badge:"AI"},
{t:"add-page-numbers",c:"edit",ar:"إضافة أرقام الصفحات",en:"Add page numbers",arD:"ترقيم صفحات PDF بخطوط ومواضع مخصصة",enD:"Number PDF pages with custom style",fn:"numbers"},
{t:"resize-pdf-pages",c:"edit",ar:"تغيير مقاس صفحات PDF",en:"Resize PDF pages",arD:"تكبير / تصغير الصفحات لمقاسات A4 و Letter",enD:"Resize pages to A4, Letter and more",fn:"resize"},
{t:"invert-pdf-colors",c:"edit",ar:"عكس ألوان PDF",en:"Invert PDF colors",arD:"عكس الألوان لقراءة مريحة وإجهاد أقل",enD:"Invert colors for comfortable reading",fn:null},
{t:"pdf-dark-mode",c:"edit",ar:"PDF وضع مظلم",en:"PDF dark mode",arD:"تحويل ألوان PDF للوضع المظلم للقراءة ليلا",enD:"Convert PDF to dark mode for night reading",fn:null},
{t:"add-text-to-pdf",c:"edit",ar:"إضافة نص إلى PDF",en:"Add text to PDF",arD:"اكتب نصا جديدا فوق أي صفحة",enD:"Type new text over any page",fn:null},
{t:"annotate-pdf",c:"edit",ar:"التعليق على PDF",en:"Annotate PDF",arD:"تمييز ونصوص وتعليقات لاصقة",enD:"Highlight, notes and sticky comments",fn:null},
{t:"add-images-to-pdf",c:"edit",ar:"إضافة صور إلى PDF",en:"Add image to PDF",arD:"إدراج صور JPG/PNG داخل الصفحات",enD:"Insert JPG/PNG images into pages",fn:null},
{t:"add-shapes-to-pdf",c:"edit",ar:"إضافة أشكال إلى PDF",en:"Add shapes",arD:"مستطيلات ودوائر وأسهم فوق الصفحات",enD:"Rectangles, circles and arrows",fn:null},
{t:"rotate-pdf-pages-edit",c:"edit",ar:"تدوير صفحات محددة",en:"Rotate selected pages",arD:"تدوير صفحات معينة ±90° و 180°",enD:"Rotate specific pages ±90° & 180°",fn:"rotate"},
{t:"deskew-text-pdf",c:"edit",ar:"تصحيح ميلان النص",en:"Deskew text",arD:"ضبط استقامة الصفحات المائلة",enD:"Straighten skewed pages",fn:null},
{t:"pdf-to-grayscale-edit",c:"edit",ar:"تحويل PDF لأبيض وأسود",en:"PDF to grayscale",arD:"تحويل الألوان لدرجات رمادي",enD:"Convert colors to grayscale",fn:null},
{t:"extract-text-from-pdf",c:"edit",ar:"استخراج نص PDF",en:"Extract text",arD:"نسخ النصوص من الصفحات القابلة للتحرير",enD:"Copy text from editable pages",fn:"text"},
{t:"edit-metadata",c:"edit",ar:"تعديل بيانات PDF",en:"Edit metadata",arD:"تغيير العنوان والمؤلف والكلمات المفتاحية",enD:"Change title, author, keywords",fn:"meta"},
{t:"nup-pdf",c:"edit",ar:"دمج صفحات في صفحة (N-Up)",en:"N-Up PDF",arD:"طباعة صفحتين أو 4 في ورقة واحدة",enD:"Print 2 or 4 pages per sheet",fn:null},

/* ---- ORGANIZE (10) ---- */
{t:"merge-pdf",c:"organize",ar:"دمج ملفات PDF",en:"Merge PDF",arD:"ادمج ملفات PDF في ملف واحد",enD:"Combine PDFs into one file",fn:"merge"},
{t:"split-pdf",c:"organize",ar:"تقسيم ملف PDF",en:"Split PDF",arD:"كل مجموعة صفحات في ملف منفصل",enD:"Split into separate files by range",fn:"split"},
{t:"extract-pages-from-pdf",c:"organize",ar:"استخراج صفحات من PDF",en:"Extract pages",arD:"استخراج صفحات إلى ملف منفصل",enD:"Extract pages to a new file",fn:"extract"},
{t:"split-pdf-pages-in-half",c:"organize",ar:"تقسيم صفحات PDF للنصف",en:"Split pages in half",arD:"تقسيم صفحة عمودين مثل A4 لصفحتي A5",enD:"Split double-column pages in half",fn:"split"},
{t:"split-pdf-by-bookmarks",c:"organize",ar:"تقسيم PDF بالإشارات",en:"Split by bookmarks",arD:"تقسيم حسب جدول المحتويات",enD:"Split by bookmarks / TOC",fn:null},
{t:"split-pdf-by-size",c:"organize",ar:"تقسيم PDF بالحجم",en:"Split by size",arD:"تقسيم لملفات بحجم معين دون فقد الجودة",enD:"Split into fixed-size files",fn:"split"},
{t:"remove-pages-from-pdf",c:"organize",ar:"حذف صفحات من PDF",en:"Delete pages",arD:"حذف صفحات نهائيا من الملف",enD:"Permanently delete pages",fn:"remove"},
{t:"rotate-pdf",c:"organize",ar:"تدوير ملف PDF",en:"Rotate PDF",arD:"تدوير الصفحات ±90° و 180°",enD:"Rotate pages ±90° & 180°",fn:"rotate"},
{t:"organize-pdf",c:"organize",ar:"تنظيم صفحات PDF",en:"Organize PDF",arD:"إعادة ترتيب وتدوير وحذف الصفحات",enD:"Reorder, rotate and delete pages",fn:"organize"},
{t:"reverse-pdf",c:"organize",ar:"عكس ترتيب PDF",en:"Reverse PDF",arD:"عكس ترتيب الصفحات بالكامل",enD:"Reverse the whole page order",fn:"reverse"},

/* ---- CONVERT TO PDF (from images/office) ---- */
{t:"images-to-pdf",c:"convert",ar:"تحويل الصور إلى PDF",en:"Images to PDF",arD:"JPG PNG TIFF GIF WEBP SVG BMP إلى PDF",enD:"JPG PNG TIFF GIF WEBP SVG BMP to PDF",fn:"images2pdf"},
{t:"jpg-to-pdf",c:"convert",ar:"تحويل JPG إلى PDF",en:"JPG to PDF",arD:"تحويل صور JPG إلى PDF",enD:"Convert JPG images to PDF",fn:"images2pdf"},
{t:"png-to-pdf",c:"convert",ar:"تحويل PNG إلى PDF",en:"PNG to PDF",arD:"تحويل صور PNG إلى PDF",enD:"Convert PNG to PDF",fn:"images2pdf"},
{t:"tiff-to-pdf",c:"convert",ar:"تحويل TIFF إلى PDF",en:"TIFF to PDF",arD:"تحويل صور TIFF إلى PDF",enD:"Convert TIFF to PDF",fn:"images2pdf"},
{t:"gif-to-pdf",c:"convert",ar:"تحويل GIF إلى PDF",en:"GIF to PDF",arD:"تحويل صور GIF إلى PDF",enD:"Convert GIF to PDF",fn:"images2pdf"},
{t:"webp-to-pdf",c:"convert",ar:"تحويل WEBP إلى PDF",en:"WEBP to PDF",arD:"تحويل صور WEBP إلى PDF",enD:"Convert WEBP to PDF",fn:"images2pdf"},
{t:"svg-to-pdf",c:"convert",ar:"تحويل SVG إلى PDF",en:"SVG to PDF",arD:"تحويل فيكتور SVG إلى PDF",enD:"Convert SVG vector to PDF",fn:"images2pdf"},
{t:"bmp-to-pdf",c:"convert",ar:"تحويل BMP إلى PDF",en:"BMP to PDF",arD:"تحويل صور BMP إلى PDF",enD:"Convert BMP to PDF",fn:"images2pdf"},
{t:"eps-to-pdf",c:"convert",ar:"تحويل EPS إلى PDF",en:"EPS to PDF",arD:"تحويل ملفات EPS إلى PDF",enD:"Convert EPS to PDF",fn:"images2pdf"},
{t:"ps-to-pdf",c:"convert",ar:"تحويل PS إلى PDF",en:"PS to PDF",arD:"تحويل بوست سكريبت إلى PDF",enD:"Convert PostScript to PDF",fn:null},
{t:"dicom-to-pdf",c:"convert",ar:"DICOM إلى PDF",en:"DICOM to PDF",arD:"تحويل صور الأشعة إلى PDF",enD:"Convert medical DICOM to PDF",fn:null},
{t:"word-to-pdf",c:"convert",ar:"Word إلى PDF",en:"Word to PDF",arD:"تحويل DOC و DOCX إلى PDF",enD:"Convert DOC/DOCX to PDF",fn:null},
{t:"excel-to-pdf",c:"convert",ar:"Excel إلى PDF",en:"Excel to PDF",arD:"تحويل XLS و XLSX إلى PDF",enD:"Convert XLS/XLSX to PDF",fn:null},
{t:"ppt-to-pdf",c:"convert",ar:"PowerPoint إلى PDF",en:"PowerPoint to PDF",arD:"تحويل PPT و PPTX إلى PDF",enD:"Convert PPT/PPTX to PDF",fn:null},
{t:"text-to-pdf",c:"convert",ar:"نص إلى PDF",en:"Text to PDF",arD:"تحويل TXT إلى PDF منسق",enD:"Convert TXT to formatted PDF",fn:"text2pdf"},
{t:"html-to-pdf",c:"convert",ar:"HTML إلى PDF",en:"HTML to PDF",arD:"تحويل صفحات الويب إلى PDF",enD:"Convert web pages to PDF",fn:null},
{t:"markdown-to-pdf",c:"convert",ar:"ماركداون إلى PDF",en:"Markdown to PDF",arD:"تحويل MD إلى PDF",enD:"Convert Markdown to PDF",fn:null},
{t:"epub-to-pdf",c:"convert",ar:"EPUB إلى PDF",en:"EPUB to PDF",arD:"تحويل الكتب الإلكترونية إلى PDF",enD:"Convert e-books to PDF",fn:null},
{t:"source-code-to-pdf",c:"convert",ar:"كود إلى PDF",en:"Code to PDF",arD:"تحويل ملفات الكود مع تلوين syntax",enD:"Convert source code with highlighting",fn:"text2pdf"},
{t:"csv-to-pdf",c:"convert",ar:"CSV إلى PDF",en:"CSV to PDF",arD:"تحويل الجداول إلى PDF",enD:"Convert CSV tables to PDF",fn:null},
{t:"dxf-to-pdf",c:"convert",ar:"CAD إلى PDF",en:"CAD to PDF",arD:"تحويل DXF و DWG إلى PDF",enD:"Convert DXF/DWG to PDF",fn:null},

/* ---- CONVERT FROM PDF ---- */
{t:"pdf-to-images",c:"convert",ar:"تحويل PDF إلى صور",en:"PDF to images",arD:"تحويل الصفحات إلى صور JPG PNG TIFF",enD:"Convert pages to JPG PNG TIFF images",fn:"pdf2images"},
{t:"pdf-to-jpg",c:"convert",ar:"تحويل PDF إلى JPG",en:"PDF to JPG",arD:"تحويل كل صفحة لصورة JPG",enD:"Convert each page to JPG",fn:"pdf2images"},
{t:"pdf-to-png",c:"convert",ar:"تحويل PDF إلى PNG",en:"PDF to PNG",arD:"تحويل كل صفحة لصورة PNG",enD:"Convert each page to PNG",fn:"pdf2images"},
{t:"pdf-to-tiff",c:"convert",ar:"تحويل PDF إلى TIFF",en:"PDF to TIFF",arD:"تحويل الصفحات لصور TIFF",enD:"Convert pages to TIFF",fn:"pdf2images"},
{t:"pdf-to-bmp",c:"convert",ar:"تحويل PDF إلى BMP",en:"PDF to BMP",arD:"تحويل الصفحات لصور BMP",enD:"Convert pages to BMP",fn:"pdf2images"},
{t:"pdf-to-gif",c:"convert",ar:"تحويل PDF إلى GIF",en:"PDF to GIF",arD:"تحويل الصفحات لصور GIF",enD:"Convert pages to GIF",fn:"pdf2images"},
{t:"pdf-to-webp",c:"convert",ar:"تحويل PDF إلى WEBP",en:"PDF to WEBP",arD:"تحويل الصفحات لصور WEBP",enD:"Convert pages to WEBP",fn:"pdf2images"},
{t:"pdf-to-ps",c:"convert",ar:"تحويل PDF إلى PS",en:"PDF to PS",arD:"تحويل PDF إلى بوست سكريبت",enD:"Convert PDF to PostScript",fn:null},
{t:"pdf-to-eps",c:"convert",ar:"تحويل PDF إلى EPS",en:"PDF to EPS",arD:"تحويل PDF إلى EPS",enD:"Convert PDF to EPS",fn:null},
{t:"pdf-to-dicom",c:"convert",ar:"PDF إلى DICOM",en:"PDF to DICOM",arD:"تحويل الصفحات لصور طبية",enD:"Convert pages to medical images",fn:null},
{t:"pdf-to-word",c:"convert",ar:"PDF إلى Word",en:"PDF to Word",arD:"تحويل PDF إلى DOCX قابل للتحرير",enD:"Convert PDF to editable DOCX",fn:null},
{t:"pdf-to-excel",c:"convert",ar:"PDF إلى Excel",en:"PDF to Excel",arD:"استخراج الجداول إلى XLSX",enD:"Extract tables to XLSX",fn:null},
{t:"pdf-to-ppt",c:"convert",ar:"PDF إلى PowerPoint",en:"PDF to PowerPoint",arD:"تحويل الصفحات لشرائح PPTX",enD:"Convert pages to PPTX slides",fn:null},
{t:"pdf-to-text",c:"convert",ar:"PDF إلى نص",en:"PDF to text",arD:"استخراج النصوص من الصفحات",enD:"Extract text from pages",fn:"text"},
{t:"pdf-to-html",c:"convert",ar:"PDF إلى HTML",en:"PDF to HTML",arD:"تحويل الصفحات لصفحة ويب",enD:"Convert pages to web page",fn:null},
{t:"pdf-to-markdown",c:"convert",ar:"PDF إلى ماركداون",en:"PDF to Markdown",arD:"تحويل لماركداون جاهز لنماذج اللغة",enD:"Convert to LLM-ready Markdown",fn:"text",badge:"جديد!"},
{t:"pdf-to-epub",c:"convert",ar:"PDF إلى EPUB",en:"PDF to EPUB",arD:"تحويل PDF لكتاب إلكتروني",enD:"Convert PDF to e-book",fn:null},
{t:"pdf-to-csv",c:"convert",ar:"PDF إلى CSV",en:"PDF to CSV",arD:"استخراج الجداول لملف CSV",enD:"Extract tables to CSV",fn:null},
{t:"pdf-to-dxf",c:"convert",ar:"PDF إلى CAD",en:"PDF to CAD",arD:"تحويل الرسومات لملف DXF",enD:"Convert drawings to DXF",fn:null},
{t:"extract-images-from-pdf",c:"convert",ar:"استخراج الصور من PDF",en:"Extract images",arD:"استخراج الصور المخزنة JPG PNG TIFF",enD:"Extract embedded JPG PNG TIFF",fn:"extractimg"},
{t:"pdf-to-json",c:"convert",ar:"PDF إلى JSON",en:"PDF to JSON",arD:"استخراج النصوص والبيانات لـ JSON",enD:"Extract text and data to JSON",fn:"text"},
{t:"pdf-to-xml",c:"convert",ar:"PDF إلى XML",en:"PDF to XML",arD:"استخراج هيكل المستند لـ XML",enD:"Extract document structure to XML",fn:null},
{t:"pdf-to-rtf",c:"convert",ar:"PDF إلى RTF",en:"PDF to RTF",arD:"تحويل لنص منسق RTF",enD:"Convert to rich text RTF",fn:null},
{t:"pdf-to-odt",c:"convert",ar:"PDF إلى ODT",en:"PDF to ODT",arD:"تحويل لمستند ليبر أوفيس",enD:"Convert to LibreOffice doc",fn:null},
{t:"pdf-to-pages",c:"convert",ar:"PDF إلى Pages",en:"PDF to Pages",arD:"تحويل لمستند Apple Pages",enD:"Convert to Apple Pages",fn:null},
{t:"mobi-to-pdf",c:"convert",ar:"MOBI إلى PDF",en:"MOBI to PDF",arD:"تحويل كتب كيندل إلى PDF",enD:"Convert Kindle books to PDF",fn:null},
{t:"azw-to-pdf",c:"convert",ar:"AZW إلى PDF",en:"AZW to PDF",arD:"تحويل كتب أمازون إلى PDF",enD:"Convert Amazon books to PDF",fn:null},
{t:"fb2-to-pdf",c:"convert",ar:"FB2 إلى PDF",en:"FB2 to PDF",arD:"تحويل كتب FB2 إلى PDF",enD:"Convert FB2 books to PDF",fn:null},
{t:"xps-to-pdf",c:"convert",ar:"XPS إلى PDF",en:"XPS to PDF",arD:"تحويل مستندات XPS إلى PDF",enD:"Convert XPS documents to PDF",fn:null},
{t:"odt-to-pdf",c:"convert",ar:"ODT إلى PDF",en:"ODT to PDF",arD:"تحويل مستندات ليبر أوفيس",enD:"Convert LibreOffice docs",fn:null},
{t:"rtf-to-pdf",c:"convert",ar:"RTF إلى PDF",en:"RTF to PDF",arD:"تحويل النص المنسق إلى PDF",enD:"Convert rich text to PDF",fn:null},
{t:"latex-to-pdf",c:"convert",ar:"LaTeX إلى PDF",en:"LaTeX to PDF",arD:"تحويل مستندات TEX إلى PDF",enD:"Convert TEX documents to PDF",fn:null},
{t:"xml-to-pdf",c:"convert",ar:"XML إلى PDF",en:"XML to PDF",arD:"تحويل ملفات XML إلى PDF",enD:"Convert XML files to PDF",fn:null},
{t:"json-to-pdf",c:"convert",ar:"JSON إلى PDF",en:"JSON to PDF",arD:"تحويل بيانات JSON إلى PDF",enD:"Convert JSON data to PDF",fn:null},
{t:"url-to-pdf",c:"convert",ar:"رابط إلى PDF",en:"URL to PDF",arD:"حفظ أي صفحة ويب كـ PDF",enD:"Save any web page as PDF",fn:null},
{t:"pdf-to-svg",c:"convert",ar:"PDF إلى SVG",en:"PDF to SVG",arD:"تحويل الصفحات لفيكتور SVG",enD:"Convert pages to SVG vector",fn:null},
{t:"heic-to-pdf",c:"convert",ar:"HEIC إلى PDF",en:"HEIC to PDF",arD:"تحويل صور الآيفون إلى PDF",enD:"Convert iPhone photos to PDF",fn:"images2pdf"},
{t:"pdf-to-heic",c:"convert",ar:"PDF إلى HEIC",en:"PDF to HEIC",arD:"تحويل الصفحات لصور HEIC",enD:"Convert pages to HEIC",fn:null},
{t:"raw-to-pdf",c:"convert",ar:"RAW إلى PDF",en:"RAW to PDF",arD:"تحويل صور الكاميرا الخام إلى PDF",enD:"Convert camera RAW to PDF",fn:null},
{t:"visio-to-pdf",c:"convert",ar:"Visio إلى PDF",en:"Visio to PDF",arD:"تحويل مخططات VSDX إلى PDF",enD:"Convert VSDX diagrams to PDF",fn:null},
{t:"dwg-to-pdf",c:"convert",ar:"DWG إلى PDF",en:"DWG to PDF",arD:"تحويل رسومات أوتوكاد إلى PDF",enD:"Convert AutoCAD drawings to PDF",fn:null},
{t:"keynote-to-pdf",c:"convert",ar:"Keynote إلى PDF",en:"Keynote to PDF",arD:"تحويل عروض آبل إلى PDF",enD:"Convert Apple Keynote to PDF",fn:null},
{t:"numbers-to-pdf",c:"convert",ar:"Numbers إلى PDF",en:"Numbers to PDF",arD:"تحويل جداول آبل إلى PDF",enD:"Convert Apple Numbers to PDF",fn:null},
{t:"publisher-to-pdf",c:"convert",ar:"Publisher إلى PDF",en:"Publisher to PDF",arD:"تحويل ملفات PUB إلى PDF",enD:"Convert PUB files to PDF",fn:null},
{t:"avif-to-pdf",c:"convert",ar:"AVIF إلى PDF",en:"AVIF to PDF",arD:"تحويل صور AVIF الحديثة إلى PDF",enD:"Convert modern AVIF images to PDF",fn:"images2pdf"},

/* ---- SCAN (6) ---- */
{t:"pdf-ocr",c:"scan",ar:"تحويل PDF إلى نص (OCR)",en:"PDF OCR",arD:"تحويل الصفحات الممسوحة لنص +100 لغة",enD:"OCR scanned pages in 100+ languages",fn:null},
{t:"contrast-pdf",c:"scan",ar:"تباين PDF",en:"PDF contrast",arD:"تحسين تباين الصفحات الممسوحة",enD:"Improve contrast of scanned pages",fn:null},
{t:"enhance-scanned-pdf",c:"scan",ar:"تحسين صفحات PDF الممسوحة",en:"Enhance scanned PDF",arD:"زيادة جودة المكتوب بخط اليد للطباعة",enD:"Enhance handwritten scans for print",fn:null},
{t:"pdf-to-scan",c:"scan",ar:"PDF إلى ملف ممسوح",en:"PDF to scan effect",arD:"تحويل الملف القابل للتحرير لممسوح ضوئيا",enD:"Make editable PDF look scanned",fn:null},
{t:"deskew-pdf",c:"scan",ar:"تصحيح ميلان المسح",en:"Deskew PDF",arD:"ضبط استقامة الصفحات الممسوحة مائلة",enD:"Straighten skewed scanned pages",fn:null},
{t:"clean-scan-margins",c:"scan",ar:"تنظيف هوامش المسح",en:"Clean scan margins",arD:"إزالة الحواف السوداء من المسح الضوئي",enD:"Remove black edges from scans",fn:"crop"},

/* ---- OPTIMIZE (5) ---- */
{t:"compress-pdf",c:"optimize",ar:"ضغط ملف PDF",en:"Compress PDF",arD:"تقليل حجم الملف لسهولة المشاركة",enD:"Reduce file size for easy sharing",fn:"compress"},
{t:"pdf-to-grayscale",c:"optimize",ar:"PDF لأبيض وأسود",en:"PDF to grayscale",arD:"تحويل الألوان لرمادي لتقليل الحجم",enD:"Convert to grayscale to save size",fn:null},
{t:"repair-pdf",c:"optimize",ar:"إصلاح ملف PDF",en:"Repair PDF",arD:"محاولة إصلاح الملفات التالفة",enD:"Try to repair damaged files",fn:null},
{t:"optimize-web-pdf",c:"optimize",ar:"تحسين PDF للويب",en:"Web-optimize PDF",arD:"تحميل سريع وعرض تدريجي بالمتصفح",enD:"Fast linearized loading in browser",fn:"compress"},
{t:"reduce-scan-size",c:"optimize",ar:"تصغير ملفات المسح",en:"Reduce scan size",arD:"ضغط ملفات المسح الكبيرة بذكاء",enD:"Smartly compress big scans",fn:"compress"},

/* ---- SECURE (7) ---- */
{t:"protect-pdf",c:"secure",ar:"حماية PDF بكلمة مرور",en:"Protect PDF",arD:"قفل الملف بكلمة مرور قوية",enD:"Lock file with a strong password",fn:null},
{t:"unlock-pdf",c:"secure",ar:"فك قفل PDF",en:"Unlock PDF",arD:"إزالة كلمة المرور من ملفك",enD:"Remove password from your file",fn:null},
{t:"redact-pdf",c:"secure",ar:"تنقيح ملف PDF",en:"Redact PDF",arD:"حجب النصوص والصور الحساسة نهائيا",enD:"Permanently black out sensitive data",fn:null},
{t:"sign-pdf",c:"secure",ar:"توقيع ملف PDF",en:"Sign PDF",arD:"إضافة توقيع إلكتروني للملف",enD:"Add electronic signature",fn:null},
{t:"watermark-pdf",c:"secure",ar:"علامة مائية PDF",en:"Watermark PDF",arD:"إضافة نص أو صورة كعلامة مائية",enD:"Add text or image watermark",fn:"watermark"},
{t:"flatten-pdf",c:"secure",ar:"تسطيح نماذج PDF",en:"Flatten PDF forms",arD:"تثبيت الحقول والتعليقات نهائيا",enD:"Permanently burn in fields",fn:"compress"},
{t:"compare-pdf",c:"secure",ar:"مقارنة ملفي PDF",en:"Compare PDFs",arD:"عرض الفروق بين إصدارين",enD:"Show differences between versions",fn:null},
];
/* PRO engines — تعمل داخل المتصفح بدون سيرفر (OCR / ترجمة / Office) */
(function(){
 const M={"pdf-ocr":"ocr","translate-pdf":"translate",
 "word-to-pdf":"office2pdf","odt-to-pdf":"office2pdf","rtf-to-pdf":"office2pdf",
 "excel-to-pdf":"sheet2pdf","csv-to-pdf":"sheet2pdf","numbers-to-pdf":"sheet2pdf",
 "ppt-to-pdf":"ppt2pdf","keynote-to-pdf":"ppt2pdf",
 "pdf-to-word":"pdf2docx","pdf-to-rtf":"pdf2docx","pdf-to-odt":"pdf2docx","pdf-to-pages":"pdf2docx",
 "pdf-to-excel":"pdf2sheet","pdf-to-csv":"pdf2sheet","pdf-to-numbers":"pdf2sheet",
 "pdf-to-ppt":"pdf2pptx","pdf-to-keynote":"pdf2pptx",
 "pdf-to-html":"pdf2html","markdown-to-pdf":"md2pdf","html-to-pdf":"html2pdf",
 "latex-to-pdf":"file2pdf","xml-to-pdf":"file2pdf","json-to-pdf":"file2pdf"};
 Object.entries(M).forEach(([s,f])=>{const t=window.TOOLS.find(x=>x.t===s);if(t)t.fn=f});
})();
window.TOOL_COUNT = window.TOOLS.length;
/* EDITOR + FILTER engines — محرر مرئي وفلاتر حقيقية داخل المتصفح */
(function(){
 const M={"edit-pdf":"edit","add-text-to-pdf":"edit","annotate-pdf":"edit","add-images-to-pdf":"edit","add-shapes-to-pdf":"edit","sign-pdf":"edit",
 "pdf-to-grayscale":"filter","pdf-to-grayscale-edit":"filter","invert-pdf-colors":"filter","pdf-dark-mode":"filter","contrast-pdf":"filter","enhance-scanned-pdf":"filter","pdf-to-scan":"filter"};
 Object.entries(M).forEach(([s,f])=>{const t=window.TOOLS.find(x=>x.t===s);if(t)t.fn=f});
 window.FILTERS={"pdf-to-grayscale":"grayscale(1)","pdf-to-grayscale-edit":"grayscale(1)","invert-pdf-colors":"invert(1)","pdf-dark-mode":"invert(.92) hue-rotate(180deg)","contrast-pdf":"contrast(1.35)","enhance-scanned-pdf":"contrast(1.25) brightness(1.06)","pdf-to-scan":"grayscale(1) contrast(1.15) brightness(.97)"};
})();
