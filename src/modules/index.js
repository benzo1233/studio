import "../styles/main.css";
import {
  spaServices,
  addons,
  waxServices,
  browLashServices,
  permBrowServices,
} from "./info.js";

const toggleMenu = document.querySelector(".menu-toggle");
const dropDownMenu = document.querySelector(".menu-overlay");

toggleMenu.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
});

function createCard(title = "", description = "", items = "", note = "") {
  return `
    <article class="service">
      <div class="services-content">
        ${title ? `<h4>${title}</h4>` : ""}
        <p>${description}</p>
        ${description ? `${description}` : ""}
        ${note ? `<p>${note}</p>` : ""}
        ${items ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `;
}

const cardGrid = document.querySelector(".service-card-grid");
if (cardGrid) {
  cardGrid.innerHTML = spaServices
    .map((card) =>
      createCard(card.title, card.description, undefined, card.note),
    )
    .join("");
  // We need join here bc innerhtml expects one long html string
}

const addonCard = document.querySelector(".addon-card");
if (addonCard) {
  addonCard.innerHTML = addons
    .map(
      (card) => createCard(card.title, card.description),
      undefined,
      undefined,
    )
    .join("");
}

const waxCard = document.querySelector(".wax-card-grid");
if (waxCard) {
  waxCard.innerHTML = waxServices
    .map(({ title, ...items }) =>
      createCard(title, undefined, ...Object.values(items), undefined),
    )
    .join("");
}

const browCard = document.querySelector(".brow-card-grid");
if (browCard) {
  browCard.innerHTML = browLashServices
    .map(
      (card) => createCard(card.title, card.description),
      undefined,
      undefined,
    )
    .join("");
}

const permCard = document.querySelector(".perm-card-grid");
if (permCard) {
  permCard.innerHTML = permBrowServices
    .map(({ ...items }) =>
      createCard(undefined, undefined, ...Object.values(items), undefined),
    )
    .join("");
}
