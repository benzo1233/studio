import "../styles/base.css";
import "../styles/home.css";
import "../styles/globals.css";
import "../styles/responsive.css";
import "../styles/services.css";

const toggleMenu = document.querySelector(".menu-toggle");
const dropDownMenu = document.querySelector(".menu-overlay");

toggleMenu.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
});
