import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';

let advSwiper;

const initSliderAdv = () => {
  if (window.innerWidth >= 1440) {
    advSwiper = new Swiper('.advantages__swiper', {
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-advantages-button-next',
        prevEl: '.swiper-advantages-button-prev',
      },

      breakpoints: {
        1440: {
          initialSlide: 1,
          spaceBetween: 30,
          slidesPerView: 'auto',
          slidesPerGroup: 2,
          loop: true,
        }
      }
    });
  }
};

const handleResize = () => {
  if (window.innerWidth < 1440 && advSwiper) {
    advSwiper.destroy();
    document.querySelector('.advantages__swiper').style = 'block';
  } else if (window.innerWidth >= 1440 && advSwiper){
    initSliderAdv();
  }
};

window.addEventListener('resize', handleResize);

export {initSliderAdv, handleResize};
