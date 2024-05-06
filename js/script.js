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

// swiper supervisores y beneficios

const swiper = new Swiper('.swiper_general', {
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

// pagina de eventos 

const s_years = document.getElementById('s_years');
const s_proximos = document.getElementById('s_proximos');
const s_2024 = document.getElementById('s_2024');
const s_2023 = document.getElementById('s_2023');
const s_2022 = document.getElementById('s_2022');

// ida

function segundaSlide() {
  s_proximos.classList.toggle('hidden')
  s_2024.classList.toggle('hidden')
}

function terceraSlide() {
  s_2024.classList.toggle('hidden')
  s_2023.classList.toggle('hidden')
}

function cuartaSlide() {
  s_2023.classList.toggle('hidden')
  s_2022.classList.toggle('hidden')
}

function backToTerceraSlide() {
  s_2022.classList.toggle('hidden')
  s_2023.classList.toggle('hidden')
}

function backToSegundaSlide() {
  s_2023.classList.toggle('hidden')
  s_2024.classList.toggle('hidden')
}

function backToPrimeraSlide() {
  s_2024.classList.toggle('hidden')
  s_proximos.classList.toggle('hidden')
}

// swiper years 

var swiper_years = new Swiper(".swiper_years", {

  initialSlide: 0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },

  slidesPerView: 3,
  centeredSlides: true,
  roundLengths: true,
  loop: false,
  loopAdditionalSlides: 30,
  spaceBetween:20,
  mode: 'horizontal',
  slideToClickedSlide: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }

});

// slide funcion!
let numbers = 0

 swiper_years.on('slideChange', slide => {
  
  
  if (slide.activeIndex == 1 && numbers == 0) {
    segundaSlide()
    numbers = 1
    console.log(slide.activeIndex)
  } else if (slide.activeIndex == 2 && numbers == 1) {
    terceraSlide()
    numbers = 2
    console.log(slide.activeIndex)
  } else if (slide.activeIndex == 3 && numbers == 2) {
    cuartaSlide()
    numbers = 3
    console.log(slide.activeIndex)
  } else if (slide.activeIndex == 2 && numbers == 3) {
    backToTerceraSlide()
    numbers = 2
    console.log(slide.activeIndex)
  } else if (slide.activeIndex == 1 && numbers == 2) {
    backToSegundaSlide()
    numbers = 1
    console.log(slide.activeIndex)
  } else if (slide.activeIndex == 0 && numbers == 1) {
    backToPrimeraSlide()
    numbers = 0
    console.log(slide.activeIndex)
  }
  
 });

// SWIPER INICIO 

const swiper_inicio = new Swiper('.swiper_inicio', {
  roundLengths: true,
  loop: true,
  spaceBetween:20,
  mode: 'horizontal',
  preventClicks: true,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
 });



