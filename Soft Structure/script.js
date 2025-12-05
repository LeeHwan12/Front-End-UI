const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".sliderItems");

let index = 0;
const slideCount = slides.length;

setInterval(() => {
  index++;
  if (index === slideCount) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000); 