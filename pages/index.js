import { products } from "../configs/products.js";

const BenefitsBox = document.querySelector(".benefits-box__card-cont");

const benTemplate = document
  .querySelector(".benefit-template")
  .content.querySelector(".team__card");

function getBenefits(benefit) {
  const newCard = benTemplate.cloneNode(true);
  const cardIcon = benTemplate.querySelector(".benefits-box__icon");
  const cardTitle = benTemplate.querySelector(".card__heading");
  const cardDesc = benTemplate.querySelector(".card_desc");
  cardIcon.style.backgroundImage = `${benefit.image}`;
  cardTitle.textContent = benefit.title;
  cardDesc.textContent = benefit.desc;
  return newCard;
}

products.forEach((benefit) => {
  BenefitsBox.append(getBenefits(benefit));
});
