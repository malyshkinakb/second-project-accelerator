import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const initSliderReviews = () => {
  new Swiper('.slider-reviews', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
      }
    }
  });
};


export {initSliderReviews};
