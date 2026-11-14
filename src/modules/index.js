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
        ${description ? `<p>${description}</p>` : ""}
        ${note ? `<p>${note}</p>` : ""}
        ${items ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `;
}

renderCards("service-card-grid", spaServices, (card) =>
  createCard(card.title, card.description, undefined, card.note),
);
renderCards("addon-card-grid", addons, (card) =>
  createCard(card.title, card.description, undefined, undefined),
);
renderCards("wax-card-grid", waxServices, (card) =>
  createCard(card.title, undefined, card.items, undefined),
);
renderCards("perm-card-grid", permBrowServices, (card) =>
  createCard(undefined, undefined, card.items, undefined),
);
renderCards("brow-card-grid", browLashServices, (card) =>
  createCard(card.title, card.description, undefined, undefined),
);

function renderCards(selector, data, callback) {
  const querySelector = document.querySelector(`.${selector}`);
  if (!querySelector) {
    return;
  }

  querySelector.innerHTML = data.map(callback).join("");
  // works without join bc when using innerHTML
}
