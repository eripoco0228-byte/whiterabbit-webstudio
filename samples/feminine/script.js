const btn=document.getElementById('menuBtn');
const nav=document.getElementById('mobileNav');
if(btn&&nav){
  btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.textContent=nav.classList.contains('open')?'×':'☰';});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.textContent='☰';}));
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const lineBtn=document.getElementById('lineBtn');
if(lineBtn){
  lineBtn.addEventListener('click',e=>{
    if(lineBtn.getAttribute('href')==='#'){
      e.preventDefault();
      alert('サンプルサイトです。実際の制作時に公式LINEや予約システムへ接続します。');
    }
  });
}
