const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".clickables")
const close = document.querySelector(".close-btn")

hamburger.addEventListener("click", () =>{
    mobileMenu.classList.toggle("active")
});
close.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
});
