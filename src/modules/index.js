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

const services = [
  {
    title: "Mini Head Spa (30min)",
    description:
      "Includes a quick scalp cleanse, steam, and massage to refresh and relax. Ideal for in-between treatments or a mid-week or end-of-day reset.",
    note: "DOES NOT INCLUDE BLOW DRY.",
  },
  {
    title: "Signature Head Spa (45min)",
    description:
      "Includes herbal remedies detoxification foot soak. Scalp cleanse, scalp massage and stimulation, head steam with conditioning.",
    note: "DOES NOT INCLUDE BLOW DRY.",
  },
  {
    title: "Signature Head Spa (60min)",
    description:
      "Includes herbal remedies detoxification foot soak. Scalp cleanse, exfoliate, scalp massage and stimulation, head steam with DEEP conditioning mask.",
    note: "DOES NOT INCLUDE BLOW DRY.",
  },
  {
    title: "Ultimate Head Spa (90min)",
    description:
      "Includes herbal remedies detoxification foot soak. A Personalized 75 min Scalp Treatment Tailored to Your Needs, Starting with a Camera-Assisted Scalp Analysis. Diverse techniques to effectively eliminate all excess buildup from the scalp. Start with a exfoliate scrub.. While your hair underneath steam you get a relaxing hand and arm massage. Then use a clarifying shampoo, followed by a moisturizing shampoo, and finish with a deep conditioning mask. Combined with a deeply soothing scalp massage and a 15 min facial cleanse, massage for the ultimate blend of relaxation and complete scalp and hair rejuvenation.",
    note: "DOES NOT INCLUDE BLOW DRY.",
  },
  {
    title: "Luxury Head Spa + Mini Facial (75min)",
    description:
      "Includes herbal remedies detoxification foot soak. A Personalized 75 min Scalp Treatment Tailored to Your Needs, Starting with a Camera-Assisted Scalp Analysis. Diverse techniques to effectively eliminate all excess buildup from the scalp. Start with a exfoliate scrub.. While your hair underneath steam you get a relaxing hand and arm massage. Then use a clarifying shampoo, followed by a moisturizing shampoo, and finish with a deep conditioning mask. Combined with a deeply soothing scalp massage and a mini facial for the ultimate blend of relaxation and complete scalp and hair rejuvenation.",
    note: "DOES NOT INCLUDE BLOW DRY.",
  },
];

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

const cardGrid = document.querySelector(".body");

if (cardGrid) {
  cardGrid.innerHTML = services
    .map((card) => createCard(card.title, card.description, card.note))
    .join("");
    // We need join here bc innerhtml expects one long html string
}
