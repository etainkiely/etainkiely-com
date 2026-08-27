
const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
const filters=document.querySelectorAll('.filter');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const g=btn.dataset.group;
  document.querySelectorAll('.pub').forEach(p=>{
    p.style.display=(g==='All'||p.dataset.group===g)?'grid':'none';
  });
}));
