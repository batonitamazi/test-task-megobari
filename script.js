

const nav = document.querySelector('.nav');




const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// const arrowButton = document.querySelector(".dropdown__btn");
// arrowButton.addEventListener('click', () => {
//   document.querySelector(".hidden__content").classList.toggle("show");

// })
// dropdown menu
const content = document.querySelectorAll(".hidden__content");
const arrow = document.querySelectorAll(".dropdown__btn");


for(let i=0; i<arrow.length; i++) {
  arrow[i].addEventListener('click', function() {
    content[i].classList.toggle("show");
    this.classList.toggle("rotate");
  })
  
}




