
import Swiper from 'swiper';

const button = () => {
  let swiper = new Swiper(".portfolio__container", {
  
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  
    
  
  });

}

export default button;