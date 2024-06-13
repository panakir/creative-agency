const burgerBtn = document.getElementById("burger");
const burgerMenu = document.getElementById("burgerMenu");
const body = document.body;

const addPaddingRightToBody = () => {
  body.style.paddingRight = `${window.innerWidth - body.clientWidth}px`;
};

const toggleMenu = () => {
  addPaddingRightToBody();
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  body.classList.toggle("locked");
};

burgerBtn.addEventListener("click", toggleMenu);
