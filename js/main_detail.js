function copyLink() {
  const link = "https://zigzag.kr/catalog/products/109554811";
  navigator.clipboard.writeText(link).then(() => {
    alert("상품 링크가 복사되었습니다!");
  });
}

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

