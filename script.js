$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".portofolio-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hidden");
        }
      });
    },
    { threshold: 0.2 }
  ); // Muncul saat 20% elemen terlihat

  items.forEach((item) => {
    item.classList.add("hidden");
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.querySelector(".stars");
  const starCount = 100; // Jumlah bintang awal

  function createStar(initial = false) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3 + 1; // Ukuran random 1-4px
    const duration = Math.random() * 5 + 3; // Durasi antara 3-8 detik
    const delay = initial ? Math.random() * duration : 0; // Delay random hanya saat pertama kali

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = initial ? `${Math.random() * 100}vh` : "-10vh"; // Langsung tersebar kalau initial
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);

    // Hapus bintang setelah animasi selesai
    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }

  // Generate bintang awal biar gak ngumpul di atas
  for (let i = 0; i < starCount; i++) {
    createStar(true);
  }

  // Tambahkan bintang baru setiap 100ms
  setInterval(() => createStar(), 100);
});

const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Ubah ikon tombol
  if (document.body.classList.contains("light-mode")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// Cek tema saat halaman dimuat
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleButton.textContent = "☀️";
}
