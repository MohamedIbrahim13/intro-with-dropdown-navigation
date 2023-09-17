const showIcon = document.querySelector(".show");
const closeIcon = document.querySelector(".close");
const mobileMenu = document.querySelector("#mobile-menu");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");
const featuresContent = document.querySelector(".features-content-mobile");
const companyContent = document.querySelector(".company-content-mobile");

arrowUp.style.display = "none";
arrowDown.style.display = "inline-block";
mobileMenu.style.display = "none";
closeIcon.style.display = "none";

showIcon.addEventListener("click", e => {
  e.preventDefault();

  mobileMenu.style.display = "block";
  showIcon.style.display = "none";
  closeIcon.style.display = "block";
});

features.addEventListener("click", e => {
  e.preventDefault();
  featuresContent.style.display = "block";
  arrowUp.style.display = "inline-block";
  arrowDown.style.display = "none";
});

company.addEventListener("click", e => {
  e.preventDefault();
  companyContent.style.display = "block";
  arrowUp.style.display = "inline-block";
  arrowDown.style.display = "none";
});

closeIcon.addEventListener("click", e => {
  e.preventDefault();
  mobileMenu.style.display = "none";
  closeIcon.style.display = "none";
  showIcon.style.display = "block";
});
