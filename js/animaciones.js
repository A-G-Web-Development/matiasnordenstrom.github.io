const animatedElementsLeft = document.querySelectorAll(".animate__fadeInLeft");
const animatedElementsRight = document.querySelectorAll(".animate__fadeInRight");
const animatedElementsIn = document.querySelectorAll(".animate__fadeIn");

const observerLeft = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInLeft");
    } else {
      entry.target.classList.remove("animate__fadeInLeft");
    }
  });
});

const observerRight = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInRight");
    } else {
      entry.target.classList.remove("animate__fadeInRight");
    }
  });
});

const observerIn = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeIn");
    } else {
      entry.target.classList.remove("animate__fadeIn");
    }
  });
});

animatedElementsLeft.forEach(element => {
  observerLeft.observe(element);
});

animatedElementsRight.forEach(element => {
  observerRight.observe(element);
});

animatedElementsIn.forEach(element => {
  observerIn.observe(element);
});