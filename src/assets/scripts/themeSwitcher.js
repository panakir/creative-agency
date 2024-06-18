const switcher = document.getElementById("switcher");

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

switcher.addEventListener("click", toggleTheme);
