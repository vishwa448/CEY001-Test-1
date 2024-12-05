document.addEventListener("DOMContentLoaded", function () {
  buildSwiper();
 console.log(getDataFromServer());
});

// build swiper slider
const buildSwiper = () => {
  
}

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// fetch data from server
const getDataFromServer = async () => {
  try {
    const response = await fetch("public/resources/json/products.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
