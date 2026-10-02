/* eslint-disable */
// Script of the original "Afra Ventures Inauguration.html". The code between the
// START/END markers is unchanged; start() only wraps it so /launch can stop it
// cleanly when the visitor leaves the page (timers, animation frames, window
// listeners, observers), and restores the <html> lang it changes.
/* ===== Event details: edit, then republish ===== */
const EVENT={dateISO:"2026-10-05",startISO:"",endISO:"",whatsapp:"919944940051"};  /* set startISO e.g. "2026-10-01T10:00" once the time is fixed */

export function start() {
  const html = document.documentElement;
  const before = { lang: html.lang, dataLang: html.dataset.lang };
  const timers = [], winListeners = [], observers = [];
  let stopped = false;
  // Same names as the browser globals, so the original code below is unchanged.
  const setInterval = (f, t) => { const id = window.setInterval(f, t); timers.push(id); return id; };
  const setTimeout = (f, t) => { const id = window.setTimeout(f, t); timers.push(id); return id; };
  const requestAnimationFrame = f => window.requestAnimationFrame(t => { if (!stopped) f(t); });
  const addEventListener = (type, f, o) => { window.addEventListener(type, f, o); winListeners.push([type, f, o]); };
  class ResizeObserver extends window.ResizeObserver {
    constructor(cb) { super(cb); observers.push(this); }
  }

  /* ===== START original script ===== */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const slides=$$(".slide"); let cur=0, lang="ta", name="", reply="", count=1, pick="";
try{const s=localStorage.getItem("afra-lang"); if(s==="en"||s==="ta") lang=s;}catch(_){}
try{const h=decodeURIComponent((location.hash||"").slice(1)); if(/^[A-Za-z][A-Za-z.\-_~]{1,40}$/.test(h)) name=h.replace(/[-_~]+/g," ").trim().replace(/\b\w/g,c=>c.toUpperCase());}catch(_){}
const bars=$("#bars"); slides.slice(0,slides.length-1).forEach(()=>{const i=document.createElement("i"); i.appendChild(document.createElement("b")); bars.appendChild(i);});


function applyLang(){
  document.documentElement.dataset.lang=lang; document.documentElement.lang=lang;
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.l===lang)));
  if(name){ $$(".gname").forEach(g=>g.innerHTML = lang==="ta" ? "அன்புள்ள "+esc(name) : "Dear "+esc(name)); }
  try{localStorage.setItem("afra-lang",lang);}catch(_){}
}
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
$$(".lang button").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.l;applyLang();}));

function go(n){
  if(n<0||n>=slides.length) return;
  slides[cur].classList.remove("show","play"); cur=n;
  const s=slides[cur]; s.classList.add("show"); void s.offsetWidth; s.classList.add("play");
  [...bars.children].forEach((b,i)=>b.classList.toggle("on",i<=Math.min(cur,slides.length-2)));
  if(cur===1) countYear();
  if(cur===6 && name){ $("#nm").value=name; }
  $("#skip").hidden = !(cur>=1 && cur<=5);
}
$$(".nx").forEach(b=>b.addEventListener("click",()=>go(cur+1)));
$("#skip").addEventListener("click",()=>go(6));
$$(".back").forEach(b=>b.addEventListener("click",()=>go(cur-1)));

// envelope
const env=$("#env");
function openEnv(){ if(env.classList.contains("open")) return go(1); env.classList.remove("pulse"); env.classList.add("open"); setTimeout(()=>go(1),1500); }
env.addEventListener("click",openEnv); env.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openEnv();}});
$("#openBtn").addEventListener("click",openEnv);

function countNums(){ $$(".num").forEach(el=>{ const to=+el.dataset.to, suf=el.dataset.suf||""; const fmt=v=>new Intl.NumberFormat("en-IN").format(v)+suf; if(still){el.textContent=fmt(to);return;} const t0=performance.now(), d=1400; (function f(t){ const k=Math.min(1,(t-t0)/d), e=1-Math.pow(1-k,3); el.textContent=fmt(Math.round(to*e)); if(k<1) requestAnimationFrame(f); })(t0); }); }
function countYear(){ const y=$("#year"); let v=2013; y.textContent=v; const t=setInterval(()=>{v++; y.textContent=v; if(v>=2026) clearInterval(t);},170); }

// reveal
function passNo(s){let h=7; for(const c of s) h=(h*31+c.charCodeAt(0))%997; return "AV-"+String(h+1).padStart(3,"0");}
$("#reveal").addEventListener("click",()=>{
  const v=$("#nm").value.trim();
  if(!v){ const e=$("#nmErr"); e.textContent= lang==="ta"?"உங்கள் பாஸில் அச்சிட, உங்கள் பெயர் வேண்டும்.":"We need your name to print on your pass."; e.hidden=false; $("#nm").focus(); return; }
  name=v; $("#nmErr").hidden=true; applyLang();
  $("#passName").textContent=name; $("#passNo").textContent=passNo(name.toLowerCase());
  $("#ask").hidden=true; $("#ans").hidden=false; $("#toPick").hidden=false; confetti();
});
$("#nm").addEventListener("keydown",e=>{ if(e.key==="Enter") $("#reveal").click(); });

// pick
$$(".pk").forEach(b=>b.addEventListener("click",()=>{
  pick=b.dataset.k; $$(".pk").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));
  $$(".pm").forEach(p=>p.hidden=(p.dataset.k!==pick));
}));

// phone: digits only (a leading + allowed for +91)
$("#ph").addEventListener("input",e=>{ const el=e.target, v=el.value; let c=v.replace(/[^\d+]/g,""); c=(c.startsWith("+")?"+":"")+c.replace(/\+/g,""); if(c.length>13) c=c.slice(0,13); if(c!==v){ el.value=c; } if(!$("#phErr").hidden && cleanPhone(c).length===10) $("#phErr").hidden=true; });
// stepper
$("#mi").addEventListener("click",()=>{ if(count>1){count--; $("#cnt").textContent=count;} });
$("#pl").addEventListener("click",()=>{ if(count<15){count++; $("#cnt").textContent=count;} });

const cleanPhone=p=>(p||"").replace(/\D/g,"").replace(/^91(?=\d{10}$)/,"").replace(/^0(?=\d{10}$)/,"");
const PICKEN={learn:"Learn (student/parent)",earn:"Earn (job seeker/HR)",grow:"Grow (business owner)",own:"Own (property)",celebrate:"Celebrate (friend & family)"};
const GOOGLE_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyGxjDY14iHQgfZTyVXey6t_pJhTZ3HIp5qj3VwlS3Lf8-7QojKTi2p5DwoFakyMWaZ/exec";

function send(r){
  reply=r; const ph=cleanPhone($("#ph").value), err=$("#phErr");
  if(!name){ go(6); return; }
  if(ph.length!==10){ err.textContent= lang==="ta"?"10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.":"Please enter a 10-digit mobile number."; err.hidden=false; $("#ph").focus(); return; }
  err.hidden=true;
  const st = r==="yes"?"YES, coming (ஆம், வருகிறேன்)":r==="maybe"?"MAYBE (வர முயற்சிக்கிறேன்)":"NOT coming (வர இயலவில்லை)";
  const L=["வணக்கம்! Afra Ventures Pvt Ltd திறப்பு விழா – என் பதில்","","Pass: "+$("#passNo").textContent,"Name: "+name,"Mobile: "+ph,"Reply: "+st];
  if(r!=="no") L.push("People: "+count);
  if(pick) L.push("My step: "+PICKEN[pick]);
  
  // Save to Google Sheets via fetch (fire and forget)
  if (GOOGLE_WEB_APP_URL !== "YOUR_GOOGLE_WEB_APP_URL_HERE") {
    fetch(GOOGLE_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        pass: $("#passNo").textContent,
        name: name,
        mobile: ph,
        reply: st,
        people: r !== "no" ? count : 0,
        step: pick ? PICKEN[pick] : ""
      })
    }).catch(e => console.error("Error saving to sheets:", e));
  }

  const url="https://wa.me/"+EVENT.whatsapp+"?text="+encodeURIComponent(L.join("\n"));
  $("#waAgain").href=url;
  if(r!=="no"){ const f=s=>s.replace(/[-:]/g,"")+"00"; const dd=EVENT.startISO? f(EVENT.startISO)+"/"+f(EVENT.endISO||EVENT.startISO) : "20261005/20261006"; const p=new URLSearchParams({action:"TEMPLATE",text:"Afra Ventures Pvt Ltd – திறப்பு விழா",dates:dd,ctz:"Asia/Kolkata",details:"You are our chief guest. "+$("#passNo").textContent,location:"1st Floor, 78 Lenin Street, Kosapalayam, Puducherry 605013"}); $("#calBtn").href="https://calendar.google.com/calendar/render?"+p; $("#calBtn").hidden=false; }
  const pass=$("#pass"); $("#passSlot").appendChild(pass);
  if(r==="no"){ pass.classList.remove("ok");
    $("#doneH").innerHTML = lang==="ta"?"உங்கள் வாழ்த்துகளுக்கு <em>நன்றி</em>":"Thank you for <em>your wishes</em>";
    $("#doneP").textContent = lang==="ta"?"WhatsApp-ல் அனுப்பு பொத்தானைத் தொடுங்கள். அடுத்த முறை நிச்சயம் சந்திப்போம்.":"Tap send in WhatsApp. We'll surely meet soon.";
  } else { pass.classList.add("ok"); }
  go(9); if(r!=="no") setTimeout(confetti,300);
  const a=document.createElement("a"); a.href=url; a.target="_blank"; a.rel="noopener"; document.body.appendChild(a); a.click(); a.remove();
}
$("#yes").addEventListener("click",()=>send("yes")); $("#maybe").addEventListener("click",()=>send("maybe")); $("#no").addEventListener("click",()=>send("no"));

// countdown
{ const tgt=new Date((EVENT.startISO||EVENT.dateISO+"T10:00")+":00+05:30"); const cd=$("#cd"); cd.hidden=false;
  if(!EVENT.startISO){ $("#cdH").parentNode.hidden=true; $("#cdM").parentNode.hidden=true; }
  const tick=()=>{ let d=Math.max(0,tgt-new Date()); $("#cdD").textContent=EVENT.startISO?Math.floor(d/864e5):Math.ceil(d/864e5); $("#cdH").textContent=Math.floor(d/36e5)%24; $("#cdM").textContent=Math.floor(d/6e4)%60; }; tick(); setInterval(tick,30000); }

// stars
const sc=$("#stars"), sx=sc.getContext("2d"); let stars=[];
function sz(){ const r=sc.getBoundingClientRect(); sc.width=r.width*devicePixelRatio; sc.height=r.height*devicePixelRatio; stars=Array.from({length:60},()=>({x:Math.random()*sc.width,y:Math.random()*sc.height,r:(Math.random()*1.2+.3)*devicePixelRatio,p:Math.random()*6})); }
const still=matchMedia("(prefers-reduced-motion: reduce)").matches;
function tw(t){ sx.clearRect(0,0,sc.width,sc.height); for(const s of stars){ sx.globalAlpha=.25+.35*(still?1:(Math.sin(t/900+s.p)+1)/2); sx.fillStyle="#F3D38A"; sx.beginPath(); sx.arc(s.x,s.y,s.r,0,7); sx.fill(); } if(!still) requestAnimationFrame(tw); }
sz(); addEventListener("resize",sz); requestAnimationFrame(tw);

// confetti
const cc=$("#conf"), cx=cc.getContext("2d");
function confetti(){ if(still) return; const r=cc.getBoundingClientRect(); cc.width=r.width; cc.height=r.height;
  const cols=["#D9A441","#F3D38A","#FFFFFF","#20AF77","#2F6FED","#E0703A"];
  const ps=Array.from({length:120},()=>({x:r.width/2+(Math.random()-.5)*60,y:r.height*.45,vx:(Math.random()-.5)*9,vy:-Math.random()*10-4,s:Math.random()*6+3,c:cols[Math.random()*cols.length|0],a:Math.random()*6,va:(Math.random()-.5)*.3}));
  let f=0; (function step(){ cx.clearRect(0,0,cc.width,cc.height); for(const p of ps){ p.vy+=.28; p.x+=p.vx; p.y+=p.vy; p.a+=p.va; cx.save(); cx.translate(p.x,p.y); cx.rotate(p.a); cx.fillStyle=p.c; cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2); cx.restore(); } if(++f<150) requestAnimationFrame(step); else cx.clearRect(0,0,cc.width,cc.height); })();
}

// scroll-down stacked cards
{ const st=$("#car"), cards=[...st.querySelectorAll(".sc")], dots=$("#cdots"), hint=$("#shint");
  const OFF=12, GAP=16;
  cards.forEach((c,i)=>{ const d=document.createElement("button"); d.type="button"; d.setAttribute("aria-label","Result "+(i+1)); d.addEventListener("click",()=>st.scrollTo({top:i*(cardH()+GAP),behavior:still?"auto":"smooth"})); dots.appendChild(d); });
  const cardH=()=>cards[0].offsetHeight;
  function size(){ const h=Math.max(260, st.clientHeight-(cards.length-1)*OFF); st.style.setProperty("--ch",h+"px"); upd(); }
  function upd(){ const step=cardH()+GAP, y=st.scrollTop;
    let cur=0;
    cards.forEach((c,i)=>{ const p=Math.max(0,Math.min(cards.length-1-i,(y-i*step)/step)); // how many cards have covered this one
      const s=1-Math.min(p,3)*0.05, br=1-Math.min(p,3)*0.18; c.style.setProperty("--s",s.toFixed(3)); c.style.setProperty("--b",br.toFixed(3));
      if(y>=i*step-step/2) cur=i; });
    [...dots.children].forEach((d,i)=>d.setAttribute("aria-current",String(i===cur)));
    hint.classList.toggle("gone", y+st.clientHeight>=st.scrollHeight-4);
  }
  st.addEventListener("scroll",()=>requestAnimationFrame(upd),{passive:true});
  addEventListener("resize",size); new ResizeObserver(size).observe(st); size();
}
// swipe
let sx0=null; $("#app").addEventListener("touchstart",e=>{sx0=e.target.closest(".stack")?null:e.touches[0].clientX;},{passive:true});
$("#app").addEventListener("touchend",e=>{ if(sx0===null) return; const dx=e.changedTouches[0].clientX-sx0; sx0=null; if(Math.abs(dx)<60||cur===0||cur===9) return; if(dx<0 && cur<8 && !(cur===6 && $("#toPick").hidden)) go(cur+1); if(dx>0) go(cur-1); });

applyLang();
  /* ===== END original script ===== */

  return () => {
    stopped = true;
    timers.forEach(id => window.clearInterval(id));
    winListeners.forEach(([type, f, o]) => window.removeEventListener(type, f, o));
    observers.forEach(o => o.disconnect());
    if (before.lang) html.lang = before.lang; else html.removeAttribute('lang');
    if (before.dataLang) html.dataset.lang = before.dataLang; else delete html.dataset.lang;
  };
}
