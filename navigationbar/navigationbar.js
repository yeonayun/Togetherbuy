// navigation-bar.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/navigation-bar.html")
    .then((res) => res.text())
    .then((html) => {
      const nav = document.createElement("div");
      nav.innerHTML = html;
      document.body.appendChild(nav);
    })
    .catch((err) => console.error("Navigation bar 로딩 실패:", err));
});
