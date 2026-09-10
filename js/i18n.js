/* i18n dictionary */
window.I18N = {
ar:{
 dir:"rtl", langName:"العربية",
 tagline:"منصة متكاملة لأدوات PDF أونلاين",
 heroTitle:"عدّل، حوّل، اضغط، وفعّل OCR لملفات PDF مباشرة من المتصفح",
 heroSub:"مجموعة أدوات PDF أونلاين: تعديل وتحويل وضغط وإدارة ملفات PDF دون تثبيت برامج أو إنشاء حساب. ارفع الملف وابدأ فورا.",
 ctaTools:"تصفح كل الأدوات", ctaStart:"ابدأ الآن",
 searchPh:"ابحث عن أداة… (مثال: دمج، ضغط، JPG)",
 sections:"أقسام أدوات PDF", sectionsSub:"استعرض الأدوات حسب المهمة — تعديل، تنظيم، تحويل، مسح، تحسين أو حماية",
 popular:"أشهر أدوات PDF", popularSub:"الأدوات الأكثر استخداما للمهام اليومية",
 allTools:"استعراض كل الأدوات", toolsCount:"أداة أونلاين",
 canDo:"ماذا يمكنك أن تفعل؟", features:"لماذا تختار منصتنا؟", faq:"الأسئلة الشائعة",
 free:"مجاني بالكامل داخل المتصفح", private:"ملفاتك آمنة — تُحذف تلقائيا ولا تُشارك",
 noSignup:"بدون حساب", fast:"سريع وسهل",
 dropTitle:"اسحب الملفات هنا أو اضغط للاختيار", dropSub:"PDF حتى 500MB — صور حتى 50MB — تتم المعالجة داخل متصفحك",
 process:"تنفيذ", download:"تحميل النتيجة", reset:"إعادة",
 needServer:"هذه الأداة في النسخة الأصلية تحتاج سيرفر (OCR / ترجمة AI / تحويل Office). هذه النسخة تعرض الواجهة كاملة، والمعالجة الحقيقية مفعّلة للأدوات المميزة بشارة (شغّالة).",
 working:"شغّالة داخل المتصفح", demo:"واجهة عرض",
 back:"رجوع", home:"الرئيسية",
 footerNote:"ملفاتك آمنة. المعالجة تتم داخل متصفحك ولا تُرفع لأي سيرفر.",
 langBtn:"EN",
},
en:{
 dir:"ltr", langName:"English",
 tagline:"All-in-one online PDF tools",
 heroTitle:"Edit, convert, compress & OCR your PDFs right in the browser",
 heroSub:"Free online PDF toolkit: edit, convert, compress and manage PDFs with no installs and no sign-up. Upload a file and start instantly.",
 ctaTools:"Browse all tools", ctaStart:"Start now",
 searchPh:"Search a tool… (e.g. merge, compress, JPG)",
 sections:"PDF tool categories", sectionsSub:"Browse tools by task — edit, organize, convert, scan, optimize or secure",
 popular:"Most popular PDF tools", popularSub:"Most-used tools for everyday tasks",
 allTools:"View all tools", toolsCount:"online tools",
 canDo:"What can you do?", features:"Why choose us?", faq:"FAQ",
 free:"Completely free in the browser", private:"Your files stay safe — auto-deleted, never shared",
 noSignup:"No sign-up", fast:"Fast & easy",
 dropTitle:"Drag files here or click to choose", dropSub:"PDF up to 500MB — images up to 50MB — processed inside your browser",
 process:"Process", download:"Download result", reset:"Reset",
 needServer:"In the original service this tool needs a server (OCR / AI translate / Office conversion). This clone ships the full UI, and real in-browser processing is enabled for tools badged (working).",
 working:"Works in-browser", demo:"UI demo",
 back:"Back", home:"Home",
 footerNote:"Your files are safe. Processing happens inside your browser, nothing is uploaded.",
 langBtn:"عربي",
}
};
window.getLang = function(){ return localStorage.getItem("ps-lang") || "ar"; };
window.setLang = function(l){ localStorage.setItem("ps-lang", l); location.reload(); };
window.T = function(k){ const l = window.getLang(); return (window.I18N[l]&&window.I18N[l][k]) || window.I18N.ar[k] || k; };
