// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { initSliderHero } from './modules/slider-hero';
import { initSliderTours } from './modules/slider-tours';
import { initSliderTraining } from './modules/slider-training';
import { initSliderReviews } from './modules/slider-reviews';
import { initSliderAdv, handleResize } from './modules/slider-adv';

window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();
  initSliderTours();
  initSliderTraining();
  initSliderReviews();
  initSliderAdv();
  handleResize();
});

