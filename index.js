const barra = document.querySelector(".barra")
const ul = document.querySelector("header ul")

barra.addEventListener("click", () => {
    ul.classList.toggle("ul_visible");
})