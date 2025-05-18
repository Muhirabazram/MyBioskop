document.addEventListener("DOMContentLoaded", () => {
  // Untuk banner carousel utama (Bootstrap)
  const carousel = document.querySelector("#carouselBanner");
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 4000,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
  }

  // Untuk tombol "Lihat Trailer"
  document.querySelectorAll(".btn-trailer").forEach(btn => {
    btn.addEventListener("click", function () {
      const videoUrl = this.getAttribute("data-video");
      const trailerIframe = document.getElementById("trailerVideo");
      trailerIframe.src = videoUrl + "?autoplay=1";

      const trailerModal = new bootstrap.Modal(document.getElementById("trailerModal"));
      trailerModal.show();
    });
  });

  // Clear iframe saat modal trailer ditutup (hanya daftar sekali)
  const trailerModalEl = document.getElementById("trailerModal");
  if (trailerModalEl) {
    trailerModalEl.addEventListener("hidden.bs.modal", function () {
      document.getElementById("trailerVideo").src = "";
    });
  }

  // Untuk arrow carousel custom
  document.querySelectorAll(".carousel-arrow").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const carousel = document.getElementById(targetId);
      if (carousel) {
        const direction = button.classList.contains("left") ? -carousel.offsetWidth : carousel.offsetWidth;
        carousel.scrollBy({ left: direction, behavior: 'smooth' });
      }
    });
  });
});
