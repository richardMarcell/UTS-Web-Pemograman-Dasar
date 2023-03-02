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



// fungsi untuk menjalankan animasi
const animation1 = lottie.loadAnimation({
    container: document.getElementById('animasi1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'asset/delivery-boy-5605460.json'
  });

  const animation2 = lottie.loadAnimation({
    container: document.getElementById('animasi2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'asset/woman-shopping-online.json'
  });
