(function(){
  // 多个跳转地址（轮询）
  var targets = [
    "https://example1.com",
    "https://example2.com",
    "https://example3.com"
  ];

  // 本地存 index（简单轮询）
  var idx = localStorage.getItem("SOSE_IDX") || 0;
  idx = parseInt(idx,10);

  // 取当前目标
  window.SOSE_TARGET = targets[idx % targets.length];

  // 更新 index
  localStorage.setItem("SOSE_IDX", idx + 1);
})();
