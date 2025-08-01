document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 여기서 선택된 필터 값을 기반으로 카드 필터링 로직을 추가할 수 있어요
      // const category = btn.textContent.trim(); → '전체', '모집중' 등
    });
  });
});
