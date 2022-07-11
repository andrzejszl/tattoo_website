const burger = document.querySelector(".burger")
const navi = document.querySelector(".switch")

burger.addEventListener("click", function () {
    burger.classList.toggle("hide")
    navi.classList.toggle("hide")
})