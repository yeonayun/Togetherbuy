    // 단위 선택
    const unitBtns = document.querySelectorAll('.unit-btn');
    unitBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        unitBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // 카테고리 선택
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
    
    // 공구 등록 시 main.html로 이동
    document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault(); // 기본 제출 막기
    window.location.href = '../main.html'; // 페이지 이동
    });