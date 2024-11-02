document.addEventListener("DOMContentLoaded", function () {
  const noticesSlider = new Splide(".notices__slider", {
    type: "slide",
    perPage: 3,
    gap: 20,
    pagination: false,
    updateOnMove: true,
    classes: {
      arrows: "splide__arrows your-class-arrows notices__arrows",
      arrow: "splide__arrow your-class-arrow notices__arrow",
      prev: "splide__arrow--prev your-class-prev notices__arrow-prev",
      next: "splide__arrow--next your-class-next notices__arrow-next",
    },
  });
  noticesSlider.mount();
});
document.addEventListener("DOMContentLoaded", function () {
  const noticesSlider = new Splide(".vacancy__slider", {
    type: "slide",
    perPage: 3,
    gap: 20,
    pagination: false,
    updateOnMove: true,
    classes: {
      arrows: "splide__arrows your-class-arrows vacancy__arrows",
      arrow: "splide__arrow your-class-arrow vacancy__arrow",
      prev: "splide__arrow--prev your-class-prev vacancy__arrow-prev",
      next: "splide__arrow--next your-class-next vacancy__arrow-next",
    },
  });
  noticesSlider.mount();
});

const btns = document.querySelectorAll(".btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="form-popup"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const close = function () {
    this.closest(".modal-overlay").style.display = "none";
  };

  let elements = document.querySelectorAll(".form__close");

  for (let e of elements) {
    e.addEventListener("click", close);
  }
});
