const pages = [
  "p1",
  "p1b",
  "p1c",
  "p1d",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6"
];

let index = 0;

function showPage(i) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pages[i]).classList.add("active");
}

document.addEventListener("click", e => {
  if (e.target.dataset.next !== undefined) {
    index++;
    if (index < pages.length) {
      showPage(index);

      // 进入 loading 自动跳转
      if (pages[index] === "p5") {
        setTimeout(() => {
          index++;
          showPage(index);
        }, 2500);
      }
    }
  }
});
