import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    modules: [Pagination],
    loop: true,
    autoplay: {
      delay: 5000, // Час в мілісекундах між зміною слайдів
      disableOnInteraction: false,
    },
    speed: 800, // Не зупиняти автоплей після взаємодії користувача

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass:
        "swiper-pagination-bullet-active !bg-primary opacity-100",
    },
  });
  console.log(swiper);
  function toggleMenu() {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#mobile-menu");
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
      body.classList.toggle("overflow-hidden");
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767.99) {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
        burger.classList.remove("active");
        body.classList.remove("overflow-hidden");
      }
    });
  }
  toggleMenu();
});
