let currentPage = 0;

const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const stepsBar = document.getElementById('stepsBar');

/* ======================
   基础翻页
====================== */
function showPage(index) {
  pages.forEach(p => p.classList.remove('active'));
  if (pages[index]) pages[index].classList.add('active');
  currentPage = index;
}

/* ======================
   普通下一页
====================== */
function nextPage() {
  showPage(currentPage + 1);
}

/* ======================
   进入挑选加载页
====================== */
function startSelection() {
  // 先进入“进入挑选女孩环节”加载页
  pages[currentPage].classList.remove('active');
  currentPage++;
  pages[currentPage].classList.add('active');

  // 显示 steps（滑入）
  const stepsBar = document.getElementById('stepsBar');
  stepsBar.classList.add('show');

  // 启动红条
  const bar = document.getElementById('enterProgressBar');

  if (bar) {
    bar.style.width = '0%';

    setTimeout(() => {
      bar.style.width = '100%';
    }, 80);

    // 进度条结束 → 进入胸部选择
    setTimeout(() => {
      pages[currentPage].classList.remove('active');
      currentPage++;
      pages[currentPage].classList.add('active');

      // 高亮第一项
      document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.step')[0].classList.add('active');

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
    showPage(currentPage + 1);

    const stepIdx = pages[currentPage].getAttribute('data-step');

    if (stepIdx !== null) {
      steps.forEach(s => s.classList.remove('active'));
      if (steps[stepIdx]) steps[stepIdx].classList.add('active');
    } else {
      // 最终加载页
      stepsBar.style.display = 'none';

      const bar = document.getElementById('progressBar');
      if (bar) {
        bar.style.width = '0%';
        setTimeout(() => bar.style.width = '100%', 50);
        setTimeout(() => showPage(currentPage + 1), 2600);
      }
    }
  }, 350);
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
