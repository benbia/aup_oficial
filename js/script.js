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
const s_2023 = document.getElementById('s_2023');
const s_2022 = document.getElementById('s_2022');

// ida

function segundaSlide() {
  s_proximos.classList.toggle('hidden'); // no la tiene, entonces la agrega
  s_2023.classList.toggle('hidden');     // la tiene y la quita
}
  
function tercerSlide() {
  s_2023.classList.toggle('hidden');   // no la tiene y la agrega
  s_2022.classList.toggle('hidden');   // la tiene y la quita
}
  
  // vuelta
  
function segundaSlideVuelta() {
  s_2022.classList.toggle('hidden');   // no la tiene y la agrega
  s_2023.classList.toggle('hidden');   // la tiene y la quita
  
}
  
function primeraSlideVuelta() {
  s_2023.classList.toggle('hidden');   // no la tiene y la agrega
  s_proximos.classList.toggle('hidden');   // la tiene y la quita
  
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

var numeros = 3;

swiper_years.on('slideChange', function () {
  
 if (this.activeIndex === 1 && (numeros==3 ||numeros==0)) { // ida segunda slide
    segundaSlide();
    numeros = 2;
    console.log(numeros);

   } else if (this.activeIndex === 1 && (numeros==1)){  // vuelta segunda slide
     segundaSlideVuelta();
     numeros = 2;
    console.log(numeros);

   } else if (this.activeIndex === 2)  {  // solo ida tercera slide
       tercerSlide();
       numeros = 1;
       console.log(numeros);

   } else if (this.activeIndex === 0 && numeros==2) {
       primeraSlideVuelta();
       numeros = 0;
       console.log(numeros); // esto funciona osea la variable
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



