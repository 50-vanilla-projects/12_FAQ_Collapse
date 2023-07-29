const buttons = document.querySelectorAll("button");


buttons.forEach(button => button.addEventListener("click", (event) =>
    event.target.parentNode.parentNode.classList.toggle("active")
));

