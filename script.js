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
