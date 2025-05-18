document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#carouselBanner");
  if (carousel) {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 4000,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
  }
  
  const bookButtons = document.querySelectorAll(".btn-book");

  bookButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
      document.getElementById("modalMovieTitle").textContent = title;
      modal.show();
    });
  });

  document.querySelectorAll(".btn-trailer").forEach(btn => {
  btn.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video");
    const trailerIframe = document.getElementById("trailerVideo");
    trailerIframe.src = videoUrl;

    const trailerModal = new bootstrap.Modal(document.getElementById("trailerModal"));
    trailerModal.show();

    // Clear iframe when modal is closed
    document.getElementById("trailerModal").addEventListener("hidden.bs.modal", function () {
      trailerIframe.src = "";
    });
  });
});

document.querySelectorAll(".carousel-arrow").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const carousel = document.getElementById(targetId);
    if (carousel) {
      const direction = button.classList.contains("left") ? -300 : 300;
      carousel.scrollBy({ left: direction, behavior: 'smooth' });
    }
  });
});
