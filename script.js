let currentPage = 0;
const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const stepsBar = document.getElementById('stepsBar');

function showPage(i){
  pages.forEach(p=>p.classList.remove('active'));
  pages[i].classList.add('active');
}

function nextPage(){
  currentPage++;
  showPage(currentPage);
}

function startSelection(){
  nextPage();
  stepsBar.style.display = 'flex';
}

function selectOption(el){
  el.parentElement.querySelectorAll('.option')
    .forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');

  setTimeout(()=>{
    currentPage++;
    showPage(currentPage);

    const step = pages[currentPage].dataset.step;
    if(step!==undefined){
      steps.forEach(s=>s.classList.remove('active'));
      steps[step].classList.add('active');
    }else{
      stepsBar.style.display='none';
      const bar=document.getElementById('progressBar');
      bar.style.width='100%';
      setTimeout(()=>nextPage(),2600);
    }
  },400);
}
