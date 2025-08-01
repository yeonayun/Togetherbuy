document.addEventListener("DOMContentLoaded", function () {
  const searchAddressBtn = document.getElementById("searchAddressBtn");
  const addressInput = document.getElementById("address");

  function openAddressSearch() {
    new daum.Postcode({
      oncomplete: function (data) {
        addressInput.value = data.roadAddress || data.jibunAddress;
      }
    }).open();
  }

  searchAddressBtn.addEventListener("click", openAddressSearch);
  addressInput.addEventListener("click", openAddressSearch);

  // 닉네임 중복확인 (예시용)
  const checkNicknameBtn = document.getElementById("checkNicknameBtn");
  if (checkNicknameBtn) {
    checkNicknameBtn.addEventListener("click", function () {
      checkNicknameBtn.textContent = "사용 가능";
      checkNicknameBtn.classList.add("active");
    });
  }

  // 현위치 설정 체크박스 이벤트
  const useCurrentLocation = document.getElementById("useCurrentLocation");
  if (useCurrentLocation) {
    useCurrentLocation.addEventListener("change", function () {
      if (useCurrentLocation.checked && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          alert(`현재 위치 좌표: ${lat}, ${lng}`);
          // 여기서 좌표 → 주소 변환은 별도 API 필요
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const profileInput = document.getElementById("profileImage");
  const profilePreview = document.getElementById("profilePreview");

  profileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});

//회원가입하기버튼 -> main.html이동
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // 기본 제출 막기
      window.location.href = "../main.html"; // 이동
    });
  });
