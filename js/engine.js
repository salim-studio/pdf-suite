/* PDF engine — client-side processing with pdf-lib + pdf.js */
async function buf(f){return new Uint8Array(await f.arrayBuffer())}
function parseRanges(str,max){ // "1-3,5" -> [0,1,2,4]
 if(!str||!str.trim())return [...Array(max).keys()];
 const out=new Set();
 str.split(',').forEach(p=>{p=p.trim();if(!p)return;
  if(p.includes('-')){let[a,b]=p.split('-').map(Number);a=Math.max(1,a||1);b=Math.min(max,b||max);
   for(let i=a;i<=b;i++)out.add(i-1)}else{const n=Number(p);if(n>=1&&n<=max)out.add(n-1)}});
 return [...out].sort((a,b)=>a-b);
}
function download(bytes,name,mime){
 const blob=bytes instanceof Blob?bytes:new Blob([bytes],{type:mime||'application/pdf'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),4000);
}
async function ensurePdfLib(){ if(window.PDFLib)return window.PDFLib;
 await loadScript('https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js');return window.PDFLib}
function loadScript(src){return new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
async function ensurePdfJs(){ if(window.pdfjsLib)return window.pdfjsLib;
 await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
 window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
 return window.pdfjsLib}

window.Engine = {
 async merge(files){ const {PDFDocument}=await ensurePdfLib();
  const out=await PDFDocument.create();
  for(const f of files){const d=await PDFDocument.load(await buf(f));const p=await out.copyPages(d,d.getPageIndices());p.forEach(x=>out.addPage(x))}
  return await out.save({useObjectStreams:true});
 },
 async copyRange(file,ranges){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const idx=parseRanges(ranges,d.getPageCount());
  const out=await PDFDocument.create();const p=await out.copyPages(d,idx);p.forEach(x=>out.addPage(x));
  return await out.save({useObjectStreams:true});
 },
 async removePages(file,ranges){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const keep=new Set(d.getPageIndices());
  parseRanges(ranges,d.getPageCount()).forEach(i=>keep.delete(i));
  const out=await PDFDocument.create();const p=await out.copyPages(d,[...keep].sort((a,b)=>a-b));p.forEach(x=>out.addPage(x));
  return await out.save({useObjectStreams:true});
 },
 async rotate(file,deg,ranges){ const {PDFDocument,degrees}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const idx=parseRanges(ranges,d.getPageCount());
  idx.forEach(i=>{const p=d.getPage(i);p.setRotation(degrees((p.getRotation().angle+deg)%360))});
  return await d.save({useObjectStreams:true});
 },
 async reverse(file){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const n=d.getPageCount();
  const out=await PDFDocument.create();const p=await out.copyPages(d,[...Array(n).keys()].reverse());p.forEach(x=>out.addPage(x));
  return await out.save({useObjectStreams:true});
 },
 async reorder(file,order){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const idx=parseRanges(order,d.getPageCount());
  const out=await PDFDocument.create();const p=await out.copyPages(d,idx);p.forEach(x=>out.addPage(x));
  return await out.save({useObjectStreams:true});
 },
 async compress(file){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file),{ignoreEncryption:true});
  return await d.save({useObjectStreams:true,addDefaultPage:false});
 },
 async crop(file,marginPct){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const m=marginPct/100;
  d.getPages().forEach(p=>{const{w,h}=p.getSize();p.setCropBox(m*w,m*h,(1-2*m)*w,(1-2*m)*h)});
  return await d.save({useObjectStreams:true});
 },
 async addNumbers(file){ const {PDFDocument,rgb,StandardFonts}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const font=await d.embedFont(StandardFonts.HelveticaBold);
  d.getPages().forEach((p,i)=>{const{w}=p.getSize();p.drawText(`${i+1} / ${d.getPageCount()}`,{x:w/2-20,y:20,size:11,font,color:rgb(.2,.3,.8)})});
  return await d.save({useObjectStreams:true});
 },
 async resizeA4(file){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));
  d.getPages().forEach(p=>{p.setSize(595.28,841.89)});
  return await d.save({useObjectStreams:true});
 },
 async setMeta(file,title,author){ const {PDFDocument}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));d.setTitle(title||'');d.setAuthor(author||'');d.setProducer('PDF Suite');
  return await d.save({useObjectStreams:true});
 },
 async watermark(file,text){ const {PDFDocument,rgb,degrees,StandardFonts}=await ensurePdfLib();
  const d=await PDFDocument.load(await buf(file));const font=await d.embedFont(StandardFonts.HelveticaBold);
  d.getPages().forEach(p=>{const{w,h}=p.getSize();p.drawText(text||'PDF Suite',{x:60,y:h/2,size:48,font,color:rgb(.8,.82,.9),rotate:degrees(30),opacity:.5})});
  return await d.save({useObjectStreams:true});
 },
 async images2pdf(files){ const {PDFDocument}=await ensurePdfLib();
  const out=await PDFDocument.create();
  for(const f of files){const b=await buf(f);
   let img; if(f.type.includes('png'))img=await out.embedPng(b); else if(f.type.includes('jpg')||f.type.includes('jpeg'))img=await out.embedJpg(b);
   else{ // convert other formats via canvas
    const bmp=await createImageBitmap(new Blob([b]));const c=document.createElement('canvas');c.width=bmp.width;c.height=bmp.height;
    c.getContext('2d').drawImage(bmp,0,0);const u8=await new Promise(r=>c.toBlob(async x=>r(new Uint8Array(await x.arrayBuffer())),'image/png'));
    img=await out.embedPng(u8)}
   const p=out.addPage([img.width,img.height]);p.drawImage(img,{x:0,y:0,width:img.width,height:img.height})}
  return await out.save({useObjectStreams:true});
 },
 async pdf2images(file,fmt,scale){ const pdfjs=await ensurePdfJs();
  const pdf=await pdfjs.getDocument({data:await buf(file)}).promise;const out=[];
  for(let i=1;i<=pdf.numPages;i++){const pg=await pdf.getPage(i);const vp=pg.getViewport({scale:scale||2});
   const c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;
   await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
   const blob=await new Promise(r=>c.toBlob(r,'image/'+fmt,0.92));out.push({page:i,blob})}
  return out;
 },
 async extractText(file){ const pdfjs=await ensurePdfJs();
  const pdf=await pdfjs.getDocument({data:await buf(file)}).promise;let txt='';
  for(let i=1;i<=pdf.numPages;i++){const pg=await pdf.getPage(i);const c=await pg.getTextContent();
   txt+=`\n\n===== Page ${i} =====\n`+c.items.map(x=>x.str).join(' ')}
  return txt;
 },
 async text2pdf(text){ const {PDFDocument,StandardFonts}=await ensurePdfLib();
  const d=await PDFDocument.create();const font=await d.embedFont(StandardFonts.Helvetica);
  const lines=(text||'').split('\n');let page=d.addPage([595,842]);let y=800;
  lines.forEach(ln=>{const chunks=ln.match(/.{1,90}/g)||[''];chunks.forEach(ch=>{if(y<40){page=d.addPage([595,842]);y=800}page.drawText(ch,{x:40,y,size:11,font});y-=15})});
  return await d.save({useObjectStreams:true});
 },
 /* ---------- PRO: OCR / Translate / Office — real in-browser engines, no server ---------- */
 async ocrPdf(file,lang,prog){
  const T=await ensureLib('Tesseract','https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js');
  const pdfjs=await ensurePdfJs();
  const pdf=await pdfjs.getDocument({data:await buf(file)}).promise;
  let full='';
  for(let i=1;i<=pdf.numPages;i++){
   if(prog)prog('OCR '+i+'/'+pdf.numPages+'…');
   const pg=await pdf.getPage(i);const vp=pg.getViewport({scale:2.5});
   const c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;
   await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
   const r=await T.recognize(c,lang||'eng+ara');
   full+='\n\n===== Page '+i+' =====\n'+(r.data?r.data.text:'');
  }
  return full.trim();
 },
 async translatePdf(file,tgt,prog){
  const raw=await Engine.extractText(file);
  const clean=raw.replace(/===== Page \d+ =====/g,' ').replace(/\s+/g,' ').trim();
  if(!clean)throw new Error('No text found in PDF (scanned file? use OCR first)');
  const src=detectLang(clean);
  if(src===(tgt||'').toLowerCase())throw new Error('المصدر والهدف نفس اللغة ('+src+') — اختر لغة هدف مختلفة / Source and target are the same ('+src+')');
  const parts=[];let cur='';
  clean.split(/(?<=[.!?؟\n])\s*/).forEach(s=>{if(!s||!s.trim())return;const t=s.trim();if((cur+' '+t).length>450){if(cur.trim())parts.push(cur.trim());cur=t}else cur=(cur?cur+' ':'')+t});
  if(cur.trim())parts.push(cur.trim());
  // split any over-long piece by words (free API rejects empty/over-long queries)
  const queue=[];
  parts.forEach(p=>{while(p.length>400){let k=p.lastIndexOf(' ',400);if(k<50)k=400;queue.push(p.slice(0,k));p=p.slice(k).trim()}if(p)queue.push(p)});
  if(!queue.length)throw new Error('No translatable text found');
  let out='';
  for(let i=0;i<queue.length;i++){
   if(prog)prog('Translate '+(i+1)+'/'+queue.length+'…');
   const u='https://api.mymemory.translated.net/get?q='+encodeURIComponent(queue[i])+'&langpair='+src+'|'+tgt;
   const r=await (await fetch(u)).json();
   if(!r||Number(r.responseStatus)!==200)throw new Error((r&&(r.responseDetails||(r.responseData&&r.responseData.translatedText)))||'Translate service limit — try again later');
   out+=(out?' ':'')+r.responseData.translatedText;
  }
  return{text:out,src};
 },
 textToHtml(t){return '<div>'+String(t||'').split('\n').map(l=>'<p>'+l.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</p>').join('')+'</div>'},
 async htmlToPdfBytes(html,dir){
  const H=await ensureLib('html2pdf','https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
  const div=document.createElement('div');div.dir=dir||'auto';
  div.style.cssText='position:fixed;left:-9999px;top:0;width:680px;padding:24px;background:#fff;color:#111;font-size:14px;line-height:1.8;font-family:"Segoe UI",Tahoma,Arial,sans-serif';
  div.innerHTML=html;document.body.appendChild(div);
  try{const b=await H().from(div).set({margin:10,image:{type:'jpeg',quality:.95},html2canvas:{scale:2},jsPDF:{unit:'mm',format:'a4'}}).outputPdf('arraybuffer');return new Uint8Array(b)}
  finally{div.remove()}
 },
 async office2pdf(file,prog){
  if(prog)prog('Reading document…');
  const M=await ensureLib('mammoth','https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js');
  let html;
  if(/\.docx$/i.test(file.name)||(file.type||'').includes('wordprocessingml')){
   const r=await M.convertToHtml({arrayBuffer:await file.arrayBuffer()});html=r.value||'<p>(empty)</p>';
  }else{const t=await file.text();html='<pre>'+t.replace(/&/g,'&amp;').replace(/</g,'&lt;').slice(0,30000)+'</pre>'}
  if(prog)prog('Building PDF…');
  return await Engine.htmlToPdfBytes('<h2>'+file.name+'</h2>'+html);
 },
 async sheet2pdf(file,prog){
  if(prog)prog('Reading spreadsheet…');
  const X=await ensureLib('XLSX','https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js');
  const wb=X.read(await file.arrayBuffer(),{type:'array'});
  const ws=wb.Sheets[wb.SheetNames[0]];
  const html=X.utils.sheet_to_html(ws);
  if(prog)prog('Building PDF…');
  return await Engine.htmlToPdfBytes('<h2>'+file.name+'</h2>'+html);
 },
 async ppt2pdf(file,prog){
  if(prog)prog('Reading presentation…');
  const zip=await window.JSZip.loadAsync(file);
  const slides=Object.keys(zip.files).filter(n=>/^ppt\/slides\/slide\d+\.xml$/.test(n)).sort((a,b)=>parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0]));
  if(!slides.length)throw new Error('No slides found — PPTX only (not old .ppt)');
  let html='';
  for(let i=0;i<slides.length;i++){if(prog)prog('Slide '+(i+1)+'/'+slides.length);
   const xml=await zip.files[slides[i]].async('text');
   const texts=[...xml.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m=>m[1]).filter(Boolean);
   html+='<h2>Slide '+(i+1)+'</h2><p>'+texts.join('<br>')+'</p><hr>';}
  return await Engine.htmlToPdfBytes(html);
 },
 async pdfToDocx(file,prog){
  const D=await ensureLib('docx','https://unpkg.com/docx@8.5.0/build/index.umd.js');
  const pdfjs=await ensurePdfJs();
  const pdf=await pdfjs.getDocument({data:await buf(file)}).promise;
  const kids=[];
  for(let i=1;i<=pdf.numPages;i++){if(prog)prog('Page '+i+'/'+pdf.numPages);
   const pg=await pdf.getPage(i);const c=await pg.getTextContent();
   const t=c.items.map(x=>x.str).join(' ').trim();
   kids.push(new D.Paragraph({heading:D.HeadingLevel.HEADING_2,children:[new D.TextRun('Page '+i)]}));
   (t.match(/.{1,180}/g)||[]).forEach(p=>kids.push(new D.Paragraph({children:[new D.TextRun(p)]})));}
  return await D.Packer.toBlob(new D.Document({sections:[{children:kids}]}));
 },
 async pdfToSheet(file,fmt,prog){
  const X=await ensureLib('XLSX','https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js');
  const pdfjs=await ensurePdfJs();
  const pdf=await pdfjs.getDocument({data:await buf(file)}).promise;
  const rows=[['Page','Text']];
  for(let i=1;i<=pdf.numPages;i++){if(prog)prog('Page '+i+'/'+pdf.numPages);
   const pg=await pdf.getPage(i);const c=await pg.getTextContent();
   c.items.map(x=>x.str).join(' ').split('\n').forEach(ln=>{if(ln.trim()&&rows.length<20000)rows.push([i,ln.trim()])});}
  const ws=X.utils.aoa_to_sheet(rows);
  const wb=X.utils.book_new();X.utils.book_append_sheet(wb,ws,'PDF');
  if(fmt==='csv')return new Blob([X.write(wb,{bookType:'csv',type:'string'})],{type:'text/csv'});
  return new Uint8Array(X.write(wb,{bookType:'xlsx',type:'array'}));
 },
 async pdfToPptx(file,prog){
  const P=await ensureLib('PptxGenJS','https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js');
  const imgs=await Engine.pdf2images(file,'png',1.5);
  const pres=new P();pres.layout='LAYOUT_WIDE';
  for(const im of imgs){if(prog)prog('Slide '+im.page+'/'+imgs.length);
   const url=await new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result);fr.readAsDataURL(im.blob)});
   pres.addSlide().addImage({path:url,x:0,y:0,w:'100%',h:'100%'});}
  return await pres.write({outputType:'blob'});
 },
 async pdfToHtml(file){
  const txt=await Engine.extractText(file);
  const h='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+file.name+'</title></head><body style="font-family:Segoe UI,Tahoma,Arial;max-width:800px;margin:24px auto;line-height:1.9">'+Engine.textToHtml(txt)+'</body></html>';
  return new Blob([h],{type:'text/html'});
 },
 mdToHtml(md){
  let h=String(md||'').replace(/&/g,'&amp;').replace(/</g,'&lt;');
  h=h.replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>')
       .replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`(.+?)`/g,'<code>$1</code>')
       .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>').replace(/^- (.*)$/gm,'<li>$1</li>');
  return '<div>'+h.split('\n').map(l=>/^(<h|<li|<\/?ul)/.test(l)?l:'<p>'+l+'</p>').join('')+'</div>';
 },
 async mdToPdf(md,prog){if(prog)prog('Building PDF…');return await Engine.htmlToPdfBytes(Engine.mdToHtml(md))},
 async rawHtmlToPdf(html,prog){if(prog)prog('Building PDF…');return await Engine.htmlToPdfBytes(html||'<h1>Hello</h1>')},
 async fileToPdf(file){const t=await file.text();return await Engine.text2pdf(t.slice(0,60000))},
 async filterPdf(file,cssFilter,prog){
  const pdfjs=await ensurePdfJs();
  const {PDFDocument}=await ensurePdfLib();
  const pdf=await pdfjs.getDocument({data:await buf(file)}).promise;
  const out=await PDFDocument.create();
  for(let i=1;i<=pdf.numPages;i++){
   if(prog)prog('Page '+i+'/'+pdf.numPages);
   const pg=await pdf.getPage(i);const vp=pg.getViewport({scale:2});
   const c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;
   const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);
   try{ctx.filter=cssFilter||'none'}catch(e){}
   await pg.render({canvasContext:ctx,viewport:vp}).promise;
   const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',0.92));
   const img=await out.embedJpg(new Uint8Array(await blob.arrayBuffer()));
   const p=out.addPage([img.width,img.height]);p.drawImage(img,{x:0,y:0,width:img.width,height:img.height});
  }
  return await out.save({useObjectStreams:true});
 }
};
async function ensureLib(g,src){if(window[g])return window[g];await loadScript(src);if(!window[g])throw new Error('Failed to load library '+g);return window[g]}
/* Language detection (offline, stopword-based): ar/fa/ur by script, fr/es/de/it/pt/nl by stopwords, en default */
function detectLang(text){
 const sample=String(text||'').replace(/\s+/g,' ').slice(0,4000);
 if(/[\u0600-\u06FF]/.test(sample)){
  if(/[گچپژك]/.test(sample)&&/[ی]/.test(sample))return'fa';
  if(/[ٹڈڑںھے]/.test(sample))return'ur';
  return'ar';
 }
 const w=sample.toLowerCase().split(/[^a-zàâäéèêëîïôöùûüçñßœæøåãõâêîôûáéíóúýčćžšşğĄąĆćĘęŁłŃńŚśŹźŻżа-яё]+/).filter(Boolean);
 const L={fr:['le','la','les','de','des','une','est','sont','pour','dans','avec','comme','tout','nous','vous','ils','elles','cette','ces','aux','sur','par','pas','qui','que','dont','être','avoir','fait','faire','mais','donc','leurs','notre','votre','entre','aussi','sans','alors','quand','même','peut','tous','toute','plus','très','afin','celui','celle'],
 es:['el','los','las','una','está','están','para','porque','como','pero','sus','entre','desde','donde','cuando','todos','todas','tiene','hacer','muy','sobre','también','hasta','este','esta','estos','son','fue','han','están','más'],
 de:['der','die','das','und','ist','mit','von','für','auf','sich','nicht','eine','einer','einem','einen','den','dem','als','auch','wird','werden','sind','haben','hat','oder','aber','wenn','nur','noch','schon','durch','über','mehr','kann','eines','einem'],
 it:['che','della','nella','sono','come','questo','questa','molto','anche','senza','delle','degli','loro','nostro','quando','dove','perché','tutti','essere','fare','stato','molto','nella','sulla','quello'],
 pt:['para','como','mais','são','uma','este','esta','isso','pelo','pela','entre','quando','onde','também','todos','todas','fazer','muito','sobre','foi','sua','seus','esta','pode','muito'],
 nl:['het','een','van','voor','door','over','onder','tussen','zonder','deze','dit','dat','zijn','wordt','worden','hebben','heeft','maar','alleen','alle','naar','daar','hier','wanneer','omdat','geen']};
 let best='en',bestN=0;
 for(const k in L){const set=new Set(L[k]);let n=0;for(const x of w){if(set.has(x))n++}if(n>bestN){bestN=n;best=k}}
 return bestN>=3?best:'en';
}
