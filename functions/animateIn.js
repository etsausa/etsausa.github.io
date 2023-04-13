var animateInElements = document.querySelectorAll('.animateIn');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  let offset = -300
  
  return (
    rect.top >= offset &&
    rect.left >= 0 &&
    rect.bottom + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
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