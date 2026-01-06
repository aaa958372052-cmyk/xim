let currentPage = 0;

const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const stepsBar = document.getElementById('stepsBar');

/* ======================
   页面切换核心
====================== */
function showPage(index) {
  pages.forEach(p => p.classList.remove('active'));
  if (pages[index]) {
    pages[index].classList.add('active');
    currentPage = index;
  }
}

/* ======================
   普通下一页
====================== */
function nextPage() {
  showPage(currentPage + 1);
}

/* ======================
   进入挑选前加载页
====================== */
function startSelection() {
  // 进入“进入挑选女孩环节”加载页
  showPage(currentPage + 1);

  // 步骤条滑入
  stepsBar.classList.add('show');

  // 启动红条
  const bar = document.getElementById('enterProgressBar');

  if (bar) {
    bar.style.width = '0%';

    setTimeout(() => {
      bar.style.width = '100%';
    }, 60);

    // 红条结束 → 进入胸部选择
    setTimeout(() => {
      showPage(currentPage + 1);

      // 高亮第一项
      steps.forEach(s => s.classList.remove('active'));
      if (steps[0]) steps[0].classList.add('active');

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

    const stepIdx = pages[currentPage]?.getAttribute('data-step');

    if (stepIdx !== null && stepIdx !== undefined) {
      steps.forEach(s => s.classList.remove('active'));
      if (steps[stepIdx]) steps[stepIdx].classList.add('active');
    } else {
      // 最终加载页
      stepsBar.classList.remove('show');

      const bar = document.getElementById('progressBar');
      if (bar) {
        bar.style.width = '0%';
        setTimeout(() => bar.style.width = '100%', 60);
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

  stepsBar.classList.remove('show');
});
