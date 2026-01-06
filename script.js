let currentPage = 0;

const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const stepsBar = document.getElementById('stepsBar');

/* ======================
   基础翻页
====================== */
function nextPage() {
  pages[currentPage].classList.remove('active');
  currentPage++;
  if (pages[currentPage]) {
    pages[currentPage].classList.add('active');
  }
}

/* ======================
   进入图片选择前加载页
====================== */
function startSelection() {
  // 先跳到“进入挑选加载页”
  pages[currentPage].classList.remove('active');
  currentPage++;
  pages[currentPage].classList.add('active');

  // 显示步骤条
  stepsBar.style.display = 'flex';

  // 启动红条动画
  const bar = document.getElementById('enterProgressBar');

  if (bar) {
    bar.style.width = '0%';

    setTimeout(() => {
      bar.style.width = '100%';
    }, 80);

    // 进度条走完后，跳到第一组图片
    setTimeout(() => {
      pages[currentPage].classList.remove('active');
      currentPage++;
      pages[currentPage].classList.add('active');

      // 高亮第一个 step
      steps.forEach(s => s.classList.remove('active'));
      steps[0].classList.add('active');
    }, 2600);
  }
}

/* ======================
   图片选择逻辑
====================== */
function selectOption(el) {
  const parent = el.parentElement;

  parent.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');

  setTimeout(() => {
    pages[currentPage].classList.remove('active');
    currentPage++;

    if (!pages[currentPage]) return;
    pages[currentPage].classList.add('active');

    const stepIdx = pages[currentPage].getAttribute('data-step');

    if (stepIdx !== null) {
      steps.forEach(s => s.classList.remove('active'));
      if (steps[stepIdx]) {
        steps[stepIdx].classList.add('active');
      }
    } else {
      // 进入最终加载页
      stepsBar.style.display = 'none';

      const bar = document.getElementById('progressBar');
      if (bar) {
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = '100%';
        }, 80);

        setTimeout(() => {
          nextPage();
        }, 2600);
      }
    }
  }, 380);
}

/* ======================
   初始化
====================== */
document.addEventListener("DOMContentLoaded", () => {
  pages.forEach((p, i) => {
    if (i === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  stepsBar.style.display = 'none';
});
