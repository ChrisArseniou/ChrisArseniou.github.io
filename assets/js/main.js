// function show(){
//   gsap.registerPlugin(ScrollTrigger);
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main2"),
//     smooth: true
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);
//   ScrollTrigger.scrollerProxy("#main2", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     pinType: document.querySelector("#main2").style.transform ? "transform" : "fixed"
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();}
  
//   show()

//   gsap.to("#bottle", {
//     rotate: -150,
//     scrollTrigger: {
//       trigger: "#bottle",
//       scroller: "#main2",
//       start: "top 1%",
//       end: "top -50%",
//       scrub: true,
//       pin: true

//     }
//   })

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Downloading Resume
// document.getElementsByClassName("btn btn--primary").addEventListener("click", function() {
//   window.location.href = "../../assets/Calvin Mwangi.pdf"
// })


// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

// Function to animate counting up
function countUp(target, duration) {
  let start = 0;
  const increment = 1;
  const targetNumber = parseInt(target.innerText);
  const stepTime = Math.abs(Math.floor(duration / (targetNumber / increment)));

  const timer = setInterval(function () {
      start += increment;
      target.innerText = start;
      if (start >= targetNumber) {
          clearInterval(timer);
          target.innerText = targetNumber;
      }
  }, stepTime);
}

window.onload = function () {
  const countElement2 = document.getElementById('count');
  countUp(countElement2, 2500);

  const countElement = document.getElementById('count2');
  countUp(countElement, 2000); // Change duration as needed (in milliseconds)
};

