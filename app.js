// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

console.log(btn,overlay,menu);


btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 10,
//     slidesPerGroup: 5,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });