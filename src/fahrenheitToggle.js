import { render } from "./renderer.js";

export const FahrenheitToggle = {
  isFahrenheit: false,
  addBtn,
};

export function addBtn() {
  const btn = document.createElement("button");
  btn.textContent = "Toggle temparature metric";
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    FahrenheitToggle.isFahrenheit = !FahrenheitToggle.isFahrenheit;
    render();
  });

  document.getElementById("content").appendChild(btn);
}
