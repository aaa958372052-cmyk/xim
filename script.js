function startSelection() {
  // 隐藏当前页（24岁问题）
  pages[currentPage].classList.remove('active');
  currentPage++;

  // 显示加载页
  pages[currentPage].classList.add('active');

  const bar = document.getElementById('enterProgress');
  bar.style.width = '0%';

  // 开始加载动画
  setTimeout(() => {
    bar.style.width = '100%';
  }, 100);

  // 2.6 秒后进入第一张图选择
  setTimeout(() => {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');

    // 显示步骤条
    stepsBar.style.display = 'flex';
  }, 2600);
}
