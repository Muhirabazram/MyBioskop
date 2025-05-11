document.addEventListener("DOMContentLoaded", () => {
  const bookButtons = document.querySelectorAll(".btn-book");

  bookButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
      document.getElementById("modalMovieTitle").textContent = title;
      modal.show();
    });
  });

  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const seats = document.getElementById("seats").value;
    const movie = document.getElementById("modalMovieTitle").textContent;
    alert(`Tiket untuk ${movie} telah dipesan atas nama ${name} (${seats} kursi)`);
    bootstrap.Modal.getInstance(document.getElementById("bookingModal")).hide();
    e.target.reset();
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    alert(`Login berhasil untuk ${email}`);
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    e.target.reset();
  });

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    alert(`Registrasi berhasil untuk ${email}`);
    bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
    e.target.reset();
  });

  document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const movie = document.getElementById("reviewMovie").value;
    const comment = document.getElementById("reviewText").value;
    alert(`Ulasan untuk ${movie}:\n\"${comment}\"`);
    e.target.reset();
  });

  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const method = document.getElementById("paymentMethod").value;
    alert(`Pembayaran berhasil menggunakan ${method}`);
    e.target.reset();
  });
});
