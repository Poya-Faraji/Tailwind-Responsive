import "./style.css";

const navBtn = document.getElementById("menu");
const menuBar = document.getElementById("menubar");

navBtn.addEventListener("click", () => {
  // for Screen readers
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);

  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
  console.log("W");
});
