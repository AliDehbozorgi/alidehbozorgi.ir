  AOS.init();



function openImage(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}


function openImage(src) {
  // حذف کلاس fixed-top از ناوبار وقتی مودال باز میشه
  const navbar = document.querySelector('.navbar'); // انتخاب ناوبار
  if (navbar) {
    navbar.classList.remove('fixed-top');
  }
  
  // نمایش مودال
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
  
  // غیرفعال کردن اسکرول صفحه
  document.body.style.overflow = 'hidden';
}

function closeImage() {
  // اضافه کردن مجدد کلاس fixed-top به ناوبار وقتی مودال بسته میشه
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.add('fixed-top');
  }
  
  // بستن مودال
  document.getElementById("imageModal").style.display = "none";
  
  // فعال کردن مجدد اسکرول صفحه
  document.body.style.overflow = 'auto';
}