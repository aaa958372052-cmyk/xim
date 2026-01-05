document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 0;
    const pages = document.querySelectorAll('.page');
    const steps = document.querySelectorAll('.step');
    const stepsBar = document.getElementById('stepsBar');

    // 通用跳转函数
    function showNext() {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    }

    // 绑定常规按钮点击
    document.querySelectorAll('[data-next]').forEach(btn => {
        btn.onclick = showNext;
    });

    // 问答环节结束跳转
    document.getElementById('btn-to-selection').onclick = () => {
        showNext();
        stepsBar.style.display = 'flex'; // 显示侧边栏
    };

    // 处理图片点击选择
    document.querySelectorAll('.grid .option').forEach(opt => {
        opt.onclick = function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');

            setTimeout(() => {
                pages[currentPage].classList.remove('active');
                currentPage++;
                pages[currentPage].classList.add('active');

                // 更新侧边栏高亮状态
                const stepIdx = pages[currentPage].getAttribute('data-step');
                if (stepIdx !== null) {
                    steps.forEach(s => s.classList.remove('active'));
                    steps[stepIdx].classList.add('active');
                } else {
                    // 进入加载环节逻辑
                    stepsBar.style.display = 'none';
                    startLoading();
                }
            }, 400);
        };
    });

    // 自动增长进度条逻辑
    function startLoading() {
        const bar = document.getElementById('progressBar');
        setTimeout(() => {
            bar.style.width = '100%';
        }, 100);

        // 动画结束后进入最后一页
        setTimeout(() => {
            showNext();
        }, 2700);
    }
});
