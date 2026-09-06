const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');if(toggle&&nav)
    {toggle.addEventListener('click',()=>nav.classList.toggle('open'))}
document.querySelectorAll('.accordion button').forEach(btn=>btn.addEventListener('click',()=>
    {const panel=btn.nextElementSibling;
    panel.style.display=panel.style.display==='block'?'none':'block';
    btn.querySelector('b').textContent=panel.style.display==='block'?'−':'+';}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
