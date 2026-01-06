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
function startSelection() {
  // 跳到“进入挑选女孩环节”加载页
  showPage(currentPage + 1);

  // 红条动画
  const bar = document.getElementById('enterProgressBar');
  if (bar) {
    bar.style.width = '0%';
    setTimeout(() => bar.style.width = '100%', 60);
  }

  // 进度条结束 → 进入胸部选择 + 步骤条滑入
  setTimeout(() => {
    showPage(currentPage + 1);

    const stepsBar = document.getElementById('stepsBar');
    stepsBar.classList.add('show');   // 🔴 只有这里加 show

    // 高亮第一项
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.step')[0].classList.add('active');
  }, 2600);
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
// 多个 TG 轮询池
const tgList = [
  "https://t.me/xiaoxiao58410",
  "https://t.me/xiaoxiao58410",
  "https://t.me/xiaoxiao58410",
  "https://t.me/xiaoxiao58410"
];

// 轮询指针
let tgIndex = 0;

function tgJump() {
  // 取当前 TG
  const url = tgList[tgIndex];

  // 指针前进（到尾巴回到 0）
  tgIndex++;
  if (tgIndex >= tgList.length) {
    tgIndex = 0;
  }

  // 如果你有像素，可以加埋点
  if (typeof fbq !== "undefined") {
    fbq('track', 'Contact');
    fbq('track', 'CompleteRegistration');
  }

  // 跳转
  window.open(url, "_blank");
}
