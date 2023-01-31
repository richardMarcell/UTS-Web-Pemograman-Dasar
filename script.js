// fungsi untuk hamburger Menu
const hamburger = document.getElementById("hamburgerNav");
const navigasi = document.getElementById("navigasi")
hamburger.addEventListener("click", function () {
  navigasi.classList.toggle("popUp");
});

document.addEventListener("click", function(e) {
    if(!hamburger.contains(e.target) && !navigasi.contains(e.target)) {
        navigasi.classList.remove("popUp");
    }
});

//fungsi untuk dark mode 
const toggle = document.getElementById("toggle");
const semua = document.querySelector("html");
const circle = document.getElementById("circle");
const header = document.querySelector("header");
const h1 = document.getElementsByTagName("a");


toggle.addEventListener("click", function() {
    toggle.classList.toggle("aktif");
    semua.classList.toggle("dark");
    header.classList.toggle("dark");    
});
