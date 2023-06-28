// Variables
const btns = Array.from(document.querySelectorAll("[alt*='arrow']"));
btns.forEach((el) => {
    el.addEventListener("click", () => {
        const title = el.previousElementSibling;
        const textElement = el.parentElement.parentElement.querySelector("h6");
        el.classList.toggle("rotate-180");
        title.classList.toggle("active");
        textElement.classList.toggle("hidden");
    });
});
