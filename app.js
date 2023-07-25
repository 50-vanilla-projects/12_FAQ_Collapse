const showIcons = document.querySelectorAll(".show-icon");
const closeIcons = document.querySelectorAll(".close-icon");

showIcons.forEach(icon => icon.addEventListener("click", (event) => {
    event.target.classList.add("hidden");
    event.target.parentNode.childNodes[7].classList.remove("hidden");
    event.target.parentNode.childNodes[5].classList.remove("hidden");
    }
));

closeIcons.forEach(icon => icon.addEventListener("click", (event) => {
    event.target.classList.add("hidden");
    event.target.parentNode.childNodes[7].classList.add("hidden");
    event.target.parentNode.childNodes[3].classList.remove("hidden");
    }
))