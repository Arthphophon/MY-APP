document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".product-list");

  // ฟังก์ชันสร้าง Toast
  function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  let currentCard = null;

  // ปุ่ม edit
  document.querySelectorAll('.edit').forEach(btn => {
    btn.addEventListener('click', function() {
      currentCard = btn.closest('.product-card');

      const name = currentCard.querySelector('h3').innerText;
      const date = currentCard.querySelector('.product-meta i.fa-calendar-alt').nextSibling.nodeValue.trim();
      const barcode = currentCard.querySelector('.product-meta i.fa-barcode').nextSibling.nodeValue.trim();

      document.getElementById('editName').value = name;
      document.getElementById('editDate').value = new Date(date).toISOString().split('T')[0];
      document.getElementById('editBarcode').value = barcode;

      // เปิด modal
      document.getElementById('editModal').style.display = 'flex'; // ใช้ flex ให้ modal อยู่กลาง
    });
  });

  // ปิด modal
  document.querySelector('.close').onclick = () => document.getElementById('editModal').style.display = 'none';

  // บันทึกการแก้ไข
  document.getElementById('editForm').onsubmit = function(e) {
    e.preventDefault();
    currentCard.querySelector('h3').innerText = document.getElementById('editName').value;
    currentCard.querySelector('.product-meta i.fa-calendar-alt').nextSibling.nodeValue = " " + document.getElementById('editDate').value;
    currentCard.querySelector('.product-meta i.fa-barcode').nextSibling.nodeValue = " " + document.getElementById('editBarcode').value;

    // ปิด modal
    document.getElementById('editModal').style.display = 'none';

    // แสดง toast หลังแก้ไขเสร็จ
    showToast(`แก้ไขสินค้า "${document.getElementById('editName').value}" สำเร็จ`, "success");
  }

  // คลิกนอก modal ปิด
  window.onclick = function(event) {
    if (event.target == document.getElementById('editModal')) {
      document.getElementById('editModal').style.display = 'none';
    }
  }

  // ลบสินค้า
  productList.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    if (e.target.closest(".delete")) {
      const name = card.querySelector("h3").textContent;
      card.remove();
      showToast(`ลบสินค้า: ${name} สำเร็จ`, "error");
    }
  });
});
function showToast(type, message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.classList.add('toast', type);
      toast.textContent = message;
      container.appendChild(toast);

      // แสดง toast
      setTimeout(() => toast.classList.add('show'), 10);

      // ลบ toast หลัง 3 วินาที
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 400);
      }, 3000);
    }