// hamburguer menu

let navLinks = document.querySelector(".navbar_links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".navbar_links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".inst-arrow");
htmlcssArrow.onclick = function() {
navLinks.classList.toggle("show1");
}

let jsArrow = document.querySelector(".socios-arrow");
jsArrow.onclick = function() {
navLinks.classList.toggle("show2");
}

// swiper supervisores

const swiper = new Swiper('.swiper_supervisores', {
  roundLengths: true,
  loop: false,
  spaceBetween:20,
  mode: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  slideToClickedSlide: true,
  preventClicks: true,
  centeredSlides: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },

    1000: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
  }
  });


// accordion (FAQ)

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

