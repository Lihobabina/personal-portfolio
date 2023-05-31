new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const links = document.querySelectorAll("nav a");
function isLastBlock(element) {
  const lastBlock = document.querySelector(".contacts-row");
  return element === lastBlock;
}

window.addEventListener("scroll", function () {
  const currentPosition = window.scrollY;
  links.forEach(function (link) {
    const target = document.querySelector(link.getAttribute("href"));
    const isLast = isLastBlock(target);
    if (
      (isLast &&
        currentPosition + window.innerHeight >=
          document.documentElement.scrollHeight) ||
      (!isLast &&
        target.offsetTop <= currentPosition &&
        target.offsetTop + target.offsetHeight > currentPosition)
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
    links.forEach(function (otherLink) {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor-inner");
  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contacts-col2");
  const nameInput = document.getElementById("user-name");
  const emailInput = document.getElementById("user-email");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    nameInput.classList.remove("err");
    emailInput.classList.remove("err");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nameInput.value === "") {
      nameInput.classList.add("err");
    }
    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add("err");
    }
    form.reset();
  });
});
let mob_menu = document.querySelector(".mob-menu");
let menu_btn = document.querySelector(".menu-btn");
menu_btn.addEventListener("click", function (e) {
  e.preventDefault();
  menu_btn.classList.toggle("menu-active");
  mob_menu.classList.toggle("mob-menu-active");
});
