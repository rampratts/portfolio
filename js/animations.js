const logo = document.querySelector("#logo");
const helloText = document.querySelector("#hello-text");
const description = document.querySelector("#description");

logo.addEventListener("animationend", e => {
    logo.style.opacity = 1;
})

helloText.addEventListener("animationend", e => {
    helloText.style.opacity = 1;
})


description.addEventListener("animationend", e => {
    description.style.opacity = 1;
})