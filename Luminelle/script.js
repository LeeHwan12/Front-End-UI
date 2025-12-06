document.addEventListener("DOMContentLoaded", () => {
  const slideItems = document.querySelector(".slideItems");
  const slides = document.querySelectorAll(".slideItems .item");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  const dots = document.querySelectorAll(".slider-dots .dot");
  const nav = document.querySelector("nav");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // ─────────────────────────────────
  // 1. Service Slider (있을 때만 실행)
  // ─────────────────────────────────
  if (slideItems && slides.length > 0 && prevBtn && nextBtn && dots.length > 0) {

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      slideItems.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }

    // 버튼 이벤트
    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });

    // 도트 클릭 이벤트
    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => goToSlide(idx));
    });

    // 자동 슬라이드
    let autoSlide = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);

    // 사용자가 조작하면 자동 슬라이드 리셋
    [prevBtn, nextBtn, ...dots].forEach(el =>
      el.addEventListener("click", () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
          goToSlide(currentIndex + 1);
        }, 6000);
      })
    );
  }

  // ─────────────────────────────────
  // 2. Nav Scroll Blur
  // ─────────────────────────────────
  function handleScroll() {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 새로고침 직후 상태도 반영
});
