var animateInElements = document.querySelectorAll('.animateIn');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - 30 <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkForElements () {
  animateInElements = document.querySelectorAll('.animateIn');
}

export function animateIn() {
  checkForElements();
  animateInElements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add('animateIn-visible');
    } else {
      el.classList.remove('animateIn-visible');
    }
  });
}

animateIn();

window.addEventListener('scroll', animateIn);