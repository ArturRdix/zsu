const burger = document.getElementById("burger");
const nav = document.querySelector(".header__navigation");
const navitem = document.querySelectorAll(".nav__item");
const header = document.querySelector("#header");

if (window.innerWidth <= 1065) {
  nav.style.marginTop = header.offsetHeight + "px";
}

navitem.forEach(e=>{
  e.addEventListener('click',()=>{
    burger.classList.remove("active");
    nav.classList.remove("active");
    header.classList.remove("active");
  })
})
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  header.classList.toggle("active");
});



const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  breakpoints: {
    800: {
      // Для экранов с шириной 320px и меньше
      slidesPerView: 1,
    },
    1000: {
      // Для экранов с шириной 480px и меньше
      slidesPerView: 2,
    },
    1247: {
      // Для экранов с шириной 768px и меньше
      slidesPerView: 3,
    },
    1447: {
      // Для экранов с шириной 768px и меньше
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperPhoto = new Swiper(".mySwiperPhoto", {
  slidesPerView: window.innerWidth <= 765 ? 1 : 2,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buttons = document.querySelectorAll(".toggle-feedback");
const feedbackBlock = document.querySelector(".feed-back");
const closefeedback = document.querySelector("#close-feed");

closefeedback.addEventListener('click',()=>{
  feedbackBlock.classList.remove("active")
})

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    feedbackBlock.classList.toggle("active");
  });
});
