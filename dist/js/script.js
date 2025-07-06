const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const positionwindow = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active', positionwindow);
    sideBar.classList.remove('menu-active')
});

const menuBar = document.querySelector('.ri-menu-line');
const sideBar = document.querySelector('.navigation');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('menu-active');
});

const iconClose = document.querySelector('.ri-close-line');

iconClose.addEventListener('click', () => {
    sideBar.classList.remove('menu-active');
});


// swiper 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  // aos
  AOS.init();