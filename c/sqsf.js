(function () {

  // ====== 多个目标链接 ======
  const links = [
    "https://example1.com",
    "https://example2.com",
    "https://example3.com"
  ];

  // ====== 随机取一个 ======
  const index = Math.floor(Math.random() * links.length);
  const target = links[index];

  // ====== 暴露给页面 ======
  window.SQSF_TARGET = target;

})();
