import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';


const initSliderHero = () => {
  new Swiper('.slider-hero', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.slider-hero__pagination',
    },
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
  });
};


export {initSliderHero};
// configure Swiper to use modules
//modules: [Navigation, Pagination],
