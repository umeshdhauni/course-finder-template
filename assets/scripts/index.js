function stepSlider() {
  const sliderContainer = document.querySelector("#courseSteps");
  const sliderWrapper = sliderContainer.querySelector(".slider-wrapper");
  const slider = sliderContainer.querySelector(".slider");
  const cardContainers = sliderContainer.querySelectorAll(".card-container");
  const prevButton = sliderContainer.querySelector(".prev");
  const nextButton = sliderContainer.querySelector(".next");

  let currentSlide = 0;
  const totalSlides = cardContainers.length;
  const cardWidth = cardContainers[0].offsetWidth + 16;

  function updateSlider(first) {
    cardContainers.forEach((card) => card.classList.remove("active"));

    cardContainers[currentSlide].classList.add("active");

    const offset = -(
      currentSlide * cardWidth -
      (sliderWrapper.offsetWidth / 2 - cardWidth / 2)
    );
    const scrollNumber = offset - (first ? 8 : 0);
    slider.style.transform = `translateX(${scrollNumber}px)`;
  }

  nextButton.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  updateSlider(true);
}

stepSlider();

function testimonialSlider() {
  const testimonialContainer = document.querySelector("#testimonials");
  const sliderTrack = testimonialContainer.querySelector(".slider-track");
  const cards = sliderTrack.querySelectorAll(".card");
  const prevButton = testimonialContainer.querySelector(".arrow-left");
  const nextButton = testimonialContainer.querySelector(".arrow-right");
  const dots = testimonialContainer.querySelectorAll(".dots div");

  let currentIndex = 0;
  const visibleCards = 3;

  function updateActiveCard() {
    cards.forEach((card) => card.classList.remove("active"));

    const centerIndex = currentIndex + Math.floor(visibleCards / 2);

    if (cards[centerIndex]) {
      cards[centerIndex].classList.add("active");
    }
  }

  function updateActiveDot() {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dots[currentIndex].classList.add("active");
  }

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20;
    const totalWidth = cardWidth * currentIndex;

    sliderTrack.style.transform = `translateX(-${totalWidth}px)`;
    updateActiveCard();
    updateActiveDot();
  }

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, cards.length - visibleCards);
    updateSlider();
  });
  updateActiveCard();
  updateActiveDot();
}

testimonialSlider();

const barElement = document.querySelector("#bar");
const navElement = document.querySelector("#nav");
barElement.addEventListener("click", () => {
  if (navElement.classList.contains("show")) {
    navElement.classList.remove("show");
  } else {
    navElement.classList.add("show");
  }
});
