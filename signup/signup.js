document.addEventListener("DOMContentLoaded", function () {
  const checkIdBtn = document.getElementById("checkIdBtn");
  const requestCodeBtn = document.getElementById("requestCodeBtn");
  const verificationBox = document.getElementById("verificationBox");
  const verifyBtn = document.getElementById("verifyBtn");
  const submitBtn = document.querySelector(".submit-btn"); 
  checkIdBtn.addEventListener("click", function () {
    checkIdBtn.classList.add("active");
    checkIdBtn.textContent = "중복확인완료";
  });

  requestCodeBtn.addEventListener("click", function () {
    verificationBox.classList.remove("hidden");
    requestCodeBtn.classList.add("active");
    requestCodeBtn.textContent = "재전송";
  });

  verifyBtn.addEventListener("click", function () {
    verifyBtn.classList.add("active");
    verifyBtn.textContent = "확인완료";
  });

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 폼 기본 제출 막기
    window.location.href = "../profile/profile.html";
  });
});
