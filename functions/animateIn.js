const animateInElements = document.querySelectorAll('.animateIn');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - 30 <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateIn() {
  animateInElements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add('animateInVisible');
    }
  });
}

animateIn();

window.addEventListener('scroll', animateIn);