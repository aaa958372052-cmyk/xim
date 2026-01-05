let currentPage = 0;
const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.step');
const stepsBar = document.getElementById('stepsBar');

function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
}

// 点击 24 岁确认后，开始挑选并显示侧边栏
function startSelection() {
    nextPage();
    stepsBar.style.display = 'flex';
}

// 处理图片选择
function selectOption(el) {
    const parent = el.parentElement;
    parent.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');

    setTimeout(() => {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');

        const stepIdx = pages[currentPage].getAttribute('data-step');
        if (stepIdx !== null) {
            // 更新左侧步骤高亮
            steps.forEach(s => s.classList.remove('active'));
            steps[stepIdx].classList.add('active');
        } else {
            // 进入加载环节，隐藏侧边栏并启动进度条
            stepsBar.style.display = 'none';
            const bar = document.getElementById('progressBar');
            if (bar) {
                setTimeout(() => bar.style.width = '100%', 100);
                setTimeout(() => nextPage(), 2700);
            }
        }
    }, 400);
}
