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

  button.addEventListener("click", () => {
  const title = button.getAttribute("data-title");
  ...
});


  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const seats = document.getElementById("seats").value;
      const movie = document.getElementById("modalMovieTitle").textContent;
      alert(`Tiket untuk ${movie} telah dipesan atas nama ${name} (${seats} kursi)`);
      bootstrap.Modal.getInstance(document.getElementById("bookingModal")).hide();
      e.target.reset();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      alert(`Login berhasil untuk ${email}`);
      bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
      e.target.reset();
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("registerEmail").value;
      alert(`Registrasi berhasil untuk ${email}`);
      bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
      e.target.reset();
    });
  }

  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const movie = document.getElementById("reviewMovie").value;
      const comment = document.getElementById("reviewText").value;
      alert(`Ulasan untuk ${movie}:\n\"${comment}\"`);
      e.target.reset();
    });
  }

  const paymentForm = document.getElementById("paymentForm");
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const method = document.getElementById("paymentMethod").value;
      alert(`Pembayaran berhasil menggunakan ${method}`);
      e.target.reset();
    });
  }
});
