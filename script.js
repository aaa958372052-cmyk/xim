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
  pages[currentPage].classList.add('active');
}

/* ======================
   进入图片选择阶段
====================== */
function startSelection() {
  nextPage();
  stepsBar.style.display = 'flex';

  // 默认高亮第一个
  steps.forEach(s => s.classList.remove('active'));
  steps[0].classList.add('active');
}

/* ======================
   图片选择逻辑（原版节奏）
====================== */
function selectOption(el) {
  const parent = el.parentElement;

  // 清掉同组
  parent.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));

  // 选中当前
  el.classList.add('selected');

  // 380ms 给用户看到红框 & 闪动
  setTimeout(() => {
    pages[currentPage].classList.remove('active');
    currentPage++;

    // 如果是加载页
    if (!pages[currentPage]) return;
    pages[currentPage].classList.add('active');

    const stepIdx = pages[currentPage].getAttribute('data-step');

    if (stepIdx !== null) {
      // 更新步骤条高亮
      steps.forEach(s => s.classList.remove('active'));
      if (steps[stepIdx]) {
        steps[stepIdx].classList.add('active');
      }
    } else {
      // 进入加载页
      stepsBar.style.display = 'none';

      const bar = document.getElementById('progressBar');
      if (bar) {
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = '100%';
        }, 80);

        // 2.6 秒后进最终页
        setTimeout(() => {
          nextPage();
        }, 2600);
      }
    }
  }, 380);
}

/* ======================
   防止刷新错位
====================== */
document.addEventListener("DOMContentLoaded", () => {
  pages.forEach((p, i) => {
    if (i === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  stepsBar.style.display = 'none';
});
