import '../scss/style.scss';
import '../js/side-menu/side-menu';
import '../js/feedback/feedback';
import '../js/order-call/order-call';
import '../js/brand-company/brand-company';
import '../js/repair/repair';
import Swiper, { Navigation, Pagination } from 'swiper';
if (document.documentElement.clientWidth < 768) {
const firstSwiper = new Swiper('.swiper', {
      direction: 'horizontal',
       loop: true,
       pagination: {
        el: '.swiper-pagination',
         clickable: true,
       },
      modules: [Navigation, Pagination],
      spaceBetween: 16,
      slidesPerView: 1.3,
       breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20
         },
        480: {
           slidesPerView: 3,
           spaceBetween: 16,
      },
         640: {
           slidesPerView: 3,
          spaceBetween: 50
        }
      }
 });
}

