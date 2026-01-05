let currentPage = 0;
const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const stepsBar = document.getElementById('stepsBar');

function showPage(index) {
    if (index < 0 || index >= pages.length) return;

    pages.forEach(p => p.classList.remove('active'));
    pages[index].classList.add('active');

    const stepIdx = pages[index].dataset.step;
    if (stepIdx !== undefined) {
        steps.forEach(s => s.classList.remove('active'));
        steps[stepIdx].classList.add('active');
    }
}

function nextPage() {
    if (currentPage >= pages.length - 1) return;
    currentPage++;
    showPage(currentPage);
}

// 24 岁确认 → 显示左侧步骤
function startSelection() {
    stepsBar.style.display = 'flex';
    nextPage();
}

// 图片选择
function selectOption(el) {
    const group = el.parentElement;
    group.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');

    setTimeout(() => {
        nextPage();

        // 如果进入加载页
        const bar = document.getElementById('progressBar');
        if (bar) {
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = '100%', 100);
            setTimeout(() => nextPage(), 2800);
        }

        // 加载后隐藏步骤条
        if (!pages[currentPage].dataset.step) {
            stepsBar.style.display = 'none';
        }
    }, 350);
}
