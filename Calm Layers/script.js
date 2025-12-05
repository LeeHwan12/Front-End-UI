const track = document.querySelector(".slideTrack");
  const slides = document.querySelectorAll(".slide-item");

  let currentIndex = 0;

  function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // 자동 슬라이드 (선택)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 4000);

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});