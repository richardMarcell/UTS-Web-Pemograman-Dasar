// fungsi untuk hamburger Menu
const hamburger = document.getElementById("hamburgerNav");
const navigasi = document.getElementById("navigasi");
hamburger.addEventListener("click", function () {
  navigasi.classList.toggle("popUp");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navigasi.contains(e.target)) {
    navigasi.classList.remove("popUp");
  }
});

//fungsi untuk dark mode
const toggle = document.getElementById("toggle");
const semua = document.querySelector("body");
const circle = document.getElementById("circle");
const header = document.querySelector("header");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");

toggle.addEventListener("click", function (e) {
  toggle.classList.toggle("aktif");
  semua.classList.toggle("dark");
  header.classList.toggle("dark");
});

// fungsi untuk menjalankan animasi
// const animation = lottie.loadAnimation({
//     container: document.getElementById('animasi'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'asset/delivery-boy-5605460.json'
//   });
