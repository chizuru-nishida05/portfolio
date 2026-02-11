document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".work-item img, .product-item img").forEach(img => {
      img.addEventListener("error", () => {
        img.style.display = "none"; 
        img.parentElement.classList.add("no-img");
      });
    });
  });
  