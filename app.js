const showIcons = document.querySelectorAll(".show-icon");
const closeIcons = document.querySelectorAll(".close-icon");

showIcons.forEach(icon => icon.addEventListener("click", (event) => {
    event.target.parentNode.classList.add("hidden");
    event.target.parentNode.parentNode.childNodes[7].classList.remove("hidden");
    event.target.parentNode.parentNode.childNodes[5].classList.remove("hidden");
    }
));

closeIcons.forEach(icon => icon.addEventListener("click", (event) => {
    console.log(event.target.parentNode.parentNode.childNodes)
    event.target.parentNode.classList.add("hidden");
    event.target.parentNode.parentNode.childNodes[7].classList.add("hidden");
    event.target.parentNode.parentNode.childNodes[3].classList.remove("hidden");
    }
))