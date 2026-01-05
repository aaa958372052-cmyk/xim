document.addEventListener('DOMContentLoaded', () => {

  let currentPage = 0;
  const pages = document.querySelectorAll('.page');
  const steps = document.querySelectorAll('.step');
  const stepsBar = document.getElementById('stepsBar');

  pages.forEach(p => p.classList.remove('active'));
  pages[0].classList.add('active');

  window.nextPage = function () {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
  };

  window.startSelection = function () {
    nextPage();
    stepsBar.style.display = 'flex';
  };

  window.selectOption = function (el) {
    const parent = el.parentElement;
    parent.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');

    setTimeout(() => {
      pages[currentPage].classList.remove('active');
      currentPage++;
      pages[currentPage].classList.add('active');

      const stepIdx = pages[currentPage].dataset.step;
      if (stepIdx !== undefined) {
        steps.forEach(s => s.classList.remove('active'));
        steps[stepIdx].classList.add('active');
      } else {
        stepsBar.style.display = 'none';
        const bar = document.getElementById('progressBar');
        if (bar) {
          setTimeout(() => bar.style.width = '100%', 100);
          setTimeout(() => nextPage(), 2600);
        }
      }
    }, 350);
  };

});
