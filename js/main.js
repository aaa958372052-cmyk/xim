const pages = [...document.querySelectorAll('.page')];
const steps = document.querySelectorAll('.step');
let current = 0;

function show(i){
  pages.forEach(p=>p.classList.remove('active'));
  pages[i].classList.add('active');

  steps.forEach(s=>s.classList.remove('active'));
  if(steps[i-4]) steps[i-4].classList.add('active');

  current = i;
}

document.querySelectorAll('[data-next]').forEach(b=>{
  b.onclick=()=>show(current+1);
});

document.querySelectorAll('.grid').forEach(grid=>{
  grid.onclick=e=>{
    const opt=e.target.closest('.option');
    if(!opt)return;
    grid.querySelectorAll('.option').forEach(o=>o.classList.remove('selected'));
    opt.classList.add('selected');
    setTimeout(()=>show(current+1),300);
  }
});

show(0);
