document.addEventListener("DOMContentLoaded", () => {
  // Side Menu
  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.querySelector(".side-menu");
  const closeIcon = document.querySelector("#close-btn");
  // Log in error message
  const errorMessage = document.querySelector("#error-message");
  // Carousel items
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".carousel-btn.left");
  const nextBtn = document.querySelector(".carousel-btn.right");

  // Sign up error message fade out
  if (errorMessage) {
    setTimeout(() => {
      errorMessage.style.transition = "opacity o.5s ease-out";
      errorMessage.style.opacity = "0";
      setTimeout(() => {
        errorMessage.remove(); // Remove errorMessage from the DOM
      }, 500);
    }, 3000);
  }

  // Open the side menu
  menuIcon.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });

  // Close the side menu
  closeIcon.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // Updating button visibility when scrolling

  function updateButtonVisibility() {
    const maxScrollWidth = carousel.scrollWidth - carousel.clientWidth;
    prevBtn.style.display = carousel.scrollLeft > 0 ? "flex" : "none";
    nextBtn.style.display =
      carousel.scrollLeft < maxScrollWidth ? "flex" : "none";
  }

  // Move carousel when buttons are clicked
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(updateButtonVisibility, 300);
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(updateButtonVisibility, 300);
  });

  // Update button when scrolling
  carousel.addEventListener("scroll", updateButtonVisibility);
  updateButtonVisibility(); //Update buttons on load

  // Update  on Window Resize
  window.addEventListener("resize", updateButtonVisibility);
});
