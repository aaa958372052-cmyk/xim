let step = 0;
const steps = document.querySelectorAll('.step');
const bar = document.getElementById('bar');

function show(i){
  steps.forEach(s=>s.classList.remove('active'));
  steps[i].classList.add('active');

  if(window.fbq){
    fbq('trackCustom','Step_'+i);
  }
}

function next(){
  step++;
  show(step);

  // 到加载页
  if(step === 4){
    if(window.fbq) fbq('trackCustom','StartMatch');

    let p = 0;
    const t = setInterval(()=>{
      p += 6;           // 👉 更快，贴近你视频
      bar.style.width = p + '%';
      if(p >= 100){
        clearInterval(t);
        step++;
        show(step);
      }
    },50);
  }
}

function go(){
  if(window.fbq) fbq('track','Lead');

  setTimeout(()=>{
    window.location.href = "https://line.me/ti/p/XXXXXXX";
  },300);
}

show(0);
