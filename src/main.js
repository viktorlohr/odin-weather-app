import { render } from "./renderer.js";

addSearchEventListener();
render();

async function addSearchEventListener() {
  const searchBtn = document.getElementById("submit-location");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    render();
  });

  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
