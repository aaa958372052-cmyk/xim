let step = 1;

document.querySelectorAll('[data-next]').forEach(el=>{
  el.addEventListener('click', next);
});

function next(){
  document.getElementById('p'+step).classList.remove('active');
  step++;

  if(step <= 6){
    document.getElementById('p'+step).classList.add('active');

    if(step === 6){
      if(window.fbq) fbq('track','CompleteRegistration');
      if(window.ttq) ttq.track('CompleteRegistration');
    }
  }
}

document.getElementById('go')?.addEventListener('click', ()=>{
  if(window.fbq) fbq('track','Lead');
  if(window.ttq) ttq.track('Lead');
  location.href = 'YOUR_TARGET_URL';
});
