import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//import 'swiper/css';

const initSliderTours = () => {
  new Swiper('.slider-tours', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-tours-button-next',
      prevEl: '.swiper-tours-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
};


export {initSliderTours};
