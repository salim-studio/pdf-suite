/* macOS-style icon system: gradient squircle tiles + white glyphs. No emoji. */
window.MacIcons=(function(){
 const GRADS={edit:['#007AFF','#5AC8FA'],organize:['#FF9500','#FFCC00'],convert:['#AF52DE','#7D7AFF'],scan:['#28C76F','#7DEFA4'],optimize:['#FF2D55','#FF9F0A'],secure:['#8E8E93','#48484A']};
 const G={
 pencil:'<path d="M31 9l8 8L19 37l-10 3 3-10z"/><path d="M28 12l8 8"/>',
 layers:'<path d="M24 7l15 7-15 7-15-7z"/><path d="M9 22l15 7 15-7"/><path d="M9 29l15 7 15-7"/>',
 convert:'<path d="M9 17h22l-6-6"/><path d="M39 31H17l6 6"/>',
 scan:'<path d="M11 17v-6h6M31 11h6v6M37 31v6h-6M17 37h-6v-6"/><path d="M9 24h30"/>',
 compress:'<path d="M24 7v19M17 19l7 7 7-7"/><path d="M10 35h28"/>',
 lock:'<rect x="12" y="21" width="24" height="15" rx="4"/><path d="M17 21v-5a7 7 0 0 1 14 0v5"/>',
 unlock:'<rect x="12" y="21" width="24" height="15" rx="4"/><path d="M17 21v-5a7 7 0 0 1 13-3"/>',
 merge:'<path d="M7 15h12c7 0 7 9 13 9h9"/><path d="M7 33h12c7 0 7-9 13-9"/><path d="M34 20l7 4-7 4"/>',
 split:'<path d="M41 15H29c-7 0-7 9-13 9H7"/><path d="M41 33H29c-7 0-7-9-13-9"/><path d="M14 20l-7 4 7 4"/>',
 docOut:'<path d="M13 5h9l7 7v29H13z"/><path d="M22 5v7h7"/><path d="M31 25h7l-6 5 6 5h-7"/>',
 trash:'<path d="M11 13h26M19 13v-4h10v4M14 13l2 24h16l2-24"/><path d="M21 19v12M27 19v12"/>',
 rotate:'<path d="M39 24a15 15 0 1 1-4.5-10.5"/><path d="M35 6v8h-8"/>',
 swap:'<path d="M9 16h23l-5-5M39 32H16l5 5"/>',
 image:'<rect x="8" y="10" width="32" height="28" rx="4"/><circle cx="17" cy="19" r="3"/><path d="M10 34l9-9 6 6 5-5 8 8"/>',
 images:'<rect x="15" y="15" width="25" height="23" rx="4"/><path d="M15 20V10a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v5"/>',
 table:'<rect x="8" y="12" width="32" height="24" rx="3"/><path d="M8 20h32M8 28h32M20 12v24"/>',
 screen:'<rect x="8" y="9" width="32" height="22" rx="3"/><path d="M19 38h10M24 31v7"/>',
 doc:'<path d="M14 5h10l8 8v30H14z"/><path d="M24 5v8h8"/><path d="M19 26h10M19 31h10M19 36h6"/>',
 nib:'<path d="M24 5c7 9 7 20 0 28-7-8-7-19 0-28z"/><circle cx="24" cy="19" r="2"/><path d="M24 33v10"/>',
 drop:'<path d="M24 6c8 10 12 16 12 23a12 12 0 0 1-24 0c0-7 4-13 12-23z"/>',
 eye:'<path d="M5 24c7-8 13-12 19-12s12 4 19 12c-7 8-13 12-19 12S12 32 5 24z"/><circle cx="24" cy="24" r="4"/>',
 bubbles:'<path d="M8 10h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-9l-5 5v-5h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"/><path d="M40 24h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6l4 4v-4h-2"/>',
 para:'<path d="M11 9h26M11 16h26M11 23h26M11 30h16M11 37h10"/>',
 code:'<path d="M18 16l-8 8 8 8M30 16l8 8-8 8M27 11l-6 26"/>',
 globe:'<circle cx="24" cy="24" r="14"/><path d="M10 24h28M24 10c-7 7-7 21 0 28 7-7 7-21 0-28z"/>',
 tag:'<path d="M9 9h15l15 15-15 15-15-15z"/><circle cx="18" cy="18" r="2.5"/>',
 expand:'<path d="M18 9H9v9M30 9h9v9M9 30v9h9M39 30v9h-9"/>',
 crop:'<path d="M13 7v26h26"/><path d="M7 19h26v20"/>',
 moon:'<path d="M33 35A15 15 0 1 1 13 13a12 12 0 0 0 20 22z"/>',
 half:'<circle cx="24" cy="24" r="14"/><path d="M24 10a14 14 0 0 1 0 28z" fill="#fff" stroke="none"/>',
 book:'<path d="M24 11c-4-2.5-9-3.5-15-3.5v27c6 0 11 1 15 3.5 4-2.5 9-3.5 15-3.5v-27c-6 0-11 1-15 3.5z"/><path d="M24 11v27"/>',
 box:'<path d="M8 14l16-6 16 6v18l-16 6-16-6z"/><path d="M8 14l16 6 16-6M24 20v18"/>',
 link:'<path d="M19 29l-5 5a6 6 0 0 0 9 9l5-5M29 19l5-5a6 6 0 0 1 9 9l-5 5M17 31l14-14"/>',
 spark:'<path d="M24 7l2.6 7.4L34 17l-7.4 2.6L24 27l-2.6-7.4L14 17l7.4-2.6z"/><path d="M37 29l1.3 3.7L42 34l-3.7 1.3L37 39l-1.3-3.7L32 34l3.7-1.3z"/>',
 grid:'<rect x="10" y="10" width="28" height="28" rx="3"/><path d="M24 10v28M10 24h28"/>',
 redact:'<path d="M9 16h30M9 24h30M9 32h30"/><rect x="16" y="12" width="16" height="20" rx="2" fill="#fff" stroke="none" opacity=".9"/>',
 wrench:'<path d="M31 9a10 10 0 0 0-13 13L8 32l4 4 10-10a10 10 0 0 0 13-13l-7 7-5-4z"/>',
 compare:'<rect x="6" y="12" width="19" height="24" rx="3"/><rect x="23" y="12" width="19" height="24" rx="3"/><path d="M32 19v10M27 24h10"/>',
 key:'<circle cx="16" cy="24" r="7"/><path d="M23 24h17M35 24v7M40 24v5"/>',
 note:'<path d="M8 9h32v21H20l-8 7v-7H8z"/><path d="M15 18h18M15 24h12"/>',
 shapes:'<circle cx="17" cy="18" r="8"/><rect x="24" y="24" width="16" height="16" rx="2"/>',
 cursor:'<path d="M18 8h12M24 8v32M20 36h8"/>',
 n123:'<text x="24" y="33" font-size="19" text-anchor="middle" fill="#fff" font-weight="800" font-family="Arial" stroke="none">123</text>',
 md:'<text x="24" y="33" font-size="17" text-anchor="middle" fill="#fff" font-weight="800" font-family="Arial" stroke="none">Md</text>'
 };
 const CATG={edit:'pencil',organize:'layers',convert:'convert',scan:'scan',optimize:'compress',secure:'lock'};
 function defs(){
  if(document.getElementById('mac-defs'))return;
  const NS='http://www.w3.org/2000/svg',s=document.createElementNS(NS,'svg');
  s.setAttribute('id','mac-defs');s.setAttribute('width','0');s.setAttribute('height','0');s.style.position='absolute';
  let inner='<defs>';
  for(const k in GRADS){inner+='<linearGradient id="mac-'+k+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+GRADS[k][0]+'"/><stop offset="1" stop-color="'+GRADS[k][1]+'"/></linearGradient>'}
  s.innerHTML=inner+'</defs>';document.body.appendChild(s);
 }
 function tile(cat,glyph,size){
  defs();
  const c=GRADS[cat]?'mac-'+cat:'mac-convert',g=G[glyph]||G.doc,s=size||44;
  return '<svg class="tile" width="'+s+'" height="'+s+'" viewBox="0 0 48 48"><rect x="2" y="2" width="44" height="44" rx="11" fill="url(#'+c+')"/><g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'+g+'</g></svg>';
 }
 function glyphFor(t){
  const fn=t.fn||'',s=t.t||'';
  if(fn==='merge')return'merge';
  if(fn==='split')return'split';
  if(fn==='extract'||fn==='extractimg')return'docOut';
  if(fn==='remove')return'trash';
  if(fn==='rotate')return'rotate';
  if(fn==='organize'||fn==='reorder')return'layers';
  if(fn==='reverse')return'swap';
  if(fn==='ocr')return'eye';
  if(fn==='translate')return'bubbles';
  if(fn==='office2pdf'||fn==='pdf2docx')return'doc';
  if(fn==='sheet2pdf'||fn==='pdf2sheet')return'table';
  if(fn==='ppt2pdf'||fn==='pdf2pptx')return'screen';
  if(fn==='pdf2html')return'globe';
  if(fn==='images2pdf')return'image';
  if(fn==='pdf2images')return'images';
  if(fn==='compress')return'compress';
  if(fn==='crop')return'crop';
  if(fn==='numbers')return'n123';
  if(fn==='meta')return'tag';
  if(fn==='watermark')return'drop';
  if(fn==='edit')return'pencil';
  if(fn==='filter')return'spark';
  if(fn==='text'||fn==='text2pdf'||fn==='file2pdf')return'para';
  if(fn==='md2pdf')return'md';
  if(fn==='html2pdf')return'code';
  if(fn==='resize')return'expand';
  if(/unlock/.test(s))return'unlock';
  if(/protect|lock/.test(s))return'lock';
  if(/sign/.test(s))return'nib';
  if(/redact/.test(s))return'redact';
  if(/compare/.test(s))return'compare';
  if(/repair/.test(s))return'wrench';
  if(/watermark/.test(s))return'drop';
  if(/dark|mode/.test(s))return'moon';
  if(/invert|gray|contrast/.test(s))return'half';
  if(/epub|mobi|azw|fb2|book|nup/.test(s))return'book';
  if(/shape/.test(s))return'shapes';
  if(/annot|note|cursor/.test(s))return'note';
  if(/code|latex|xml|json/.test(s))return'code';
  if(/html/.test(s))return'globe';
  if(/word|docx|doc|odt|rtf/.test(s))return'doc';
  if(/excel|sheet|csv|numbers|xls/.test(s))return'table';
  if(/ppt|keynote/.test(s))return'screen';
  if(/markdown/.test(s))return'md';
  if(/number/.test(s))return'n123';
  if(/scan/.test(s))return'scan';
  if(/url|link/.test(s))return'link';
  if(/cad|dwg|dxf|visio|publish/.test(s))return'box';
  if(/jpg|png|tiff|gif|webp|svg|bmp|dicom|heic|avif|eps|image|photo/.test(s))return'image';
  return CATG[t.c]||'doc';
 }
 try{
  const l=document.createElement('link');l.rel='icon';
  l.href='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="2" y="2" width="44" height="44" rx="11" fill="#007AFF"/><text x="24" y="34" font-size="24" text-anchor="middle" fill="#fff" font-family="Arial" font-weight="bold">P</text></svg>');
  document.head.appendChild(l);
 }catch(e){}
 return{tile:tile,glyphFor:glyphFor,cat:function(c){return CATG[c]||'doc'}};
})();
