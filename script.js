
//navbar
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//dropdown menu

const content = document.querySelectorAll(".hidden__content");
const arrow = document.querySelectorAll(".dropdown__btn");


for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', function () {
    content[i].classList.toggle("show");
    this.classList.toggle("rotate");
  })

}

//slider
let arr = [0, 1, 3, 4]
let slideIndex = 1;
if (window.innerWidth < 500) {
  showSlides(slideIndex);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".user__card");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}