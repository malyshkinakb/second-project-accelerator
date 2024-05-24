import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const initSliderTraining = () => {
  new Swiper('.slider-training', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-training-button-next',
      prevEl: '.swiper-training-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
};


export {initSliderTraining};
