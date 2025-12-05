const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  hero.style.backgroundPosition = `center ${scrolled * 0.3}px`;
  if (scrolled > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const about = document.querySelector(".content");

function revealOnScroll(){
  const rect = about.getBoundingClientRect();
  
  if(rect.top < window.innerHeight - 100){
    about.classList.add("show");
  }
}
window.addEventListener("scroll", revealOnScroll);