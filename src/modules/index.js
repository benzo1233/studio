import "../styles/base.css";
import "../styles/home.css";
import "../styles/globals.css";
import "../styles/responsive.css";
import "../styles/services.css";
import { spaServices, waxServices, browLashServices } from "./info.js";

const toggleMenu = document.querySelector(".menu-toggle");
const dropDownMenu = document.querySelector(".menu-overlay");

toggleMenu.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
});

function createCard(title, description, note) {
  return `
    <article class="service">
      <div class="services-content">
        <h4>${title}</h4>
        <p>${description}</p>
        <p>${note}</p>
      </div>
    </article>
  `;
}

// TODO
// const addons = [
//   {
//     title: "Facial Add On",
//     description:
//       "Enhance your head spa with a refreshing facial for added relaxation and glow.",
//   },
//   {
//     title: "Scalp Exfoliate Add On",
//     description: "Removes buildup and promotes a healthier, cleaner scalp.",
//   },
//   {
//     title: "Steam with Deep Conditioning Mask",
//     description:
//       "Deeply hydrates, strengthens and restores softer, healthier hair.",
//   },
//   {
//     title: "Blow Dry",
//     description: "Does not include styling.",
//   },
// ];

const cardGrid = document.querySelector(".service-card-grid");

if (cardGrid) {
  cardGrid.innerHTML = spaServices
    .map((card) => createCard(card.title, card.description, card.note))
    .join("");
  // We need join here bc innerhtml expects one long html string
}
