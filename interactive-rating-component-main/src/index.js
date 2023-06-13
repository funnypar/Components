// variables
const homeState = document.querySelector("#home");
const activeState = document.querySelector("#state");
const submitBtn = document.querySelector("button");
const items = Array.from(document.querySelectorAll("a"));
const h2Context = document.querySelector("h2");
let userItem = "";

// addEventListeners
items.map((el) => {
    el.addEventListener("click", () => {
        userItem = el.innerText;
    });
});
submitBtn.addEventListener("click", (event) => {
    event.preventDefault;
    homeState.classList.toggle("hidden");
    activeState.classList.toggle("hidden");
    h2Context.innerText = `You selected ${userItem} of 5`;
});
