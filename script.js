const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

updateSlider();

const prevVideoButton = document.querySelector(".prev-slide");
const nextVideoButton = document.querySelector(".next-slide");
const slidesVideo = Array.from(document.getElementsByClassName("video-slide"));
const slideVideoCount = slidesVideo.length;
let slideVideoIndex = 0;

prevVideoButton.addEventListener("click", showPreviousSlideVideo);
nextVideoButton.addEventListener("click", showNextSlideVideo);

function showPreviousSlideVideo() {
  slideVideoIndex = (slideVideoIndex - 1 + slideVideoCount) % slideVideoCount;
  updateVideoSlider();
}

function showNextSlideVideo() {
  slideVideoIndex = (slideVideoIndex + 1) % slideVideoCount;
  updateVideoSlider();
}

function updateVideoSlider() {
  slidesVideo.forEach((slide, index) => {
    console.log(index === slideVideoIndex);
    if (index === slideVideoIndex) {
      slide.style.display = "block";
    } else {
      console.log(index);
      slide.style.display = "none";
    }
  });
}

updateVideoSlider();

document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
