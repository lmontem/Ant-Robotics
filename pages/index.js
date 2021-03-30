import { benefits } from "../configs/benefits.js";
import { custBenefits } from "../configs/custBenefits.js";

const BenefitsBox = document.querySelector(".Benefits");
const custBenBox = document.querySelector(".custBenefits");

const benTemplate = document
  .querySelector(".benefit-template")
  .content.querySelector(".card");

function getBenefits(benefit) {
  const newCard = benTemplate.cloneNode(true);
  const cardIcon = newCard.querySelector(".benefits-box__icon");
  const cardTitle = newCard.querySelector(".card__heading");
  const cardDesc = newCard.querySelector(".card__desc");
  cardIcon.style.backgroundImage = `url(${benefit.image})`;
  cardTitle.textContent = benefit.title;
  cardDesc.textContent = benefit.desc;
  return newCard;
}

benefits.forEach((benefit) => {
  BenefitsBox.append(getBenefits(benefit));
});

const custBenTemplate = document
  .querySelector(".cust-benefit-template")
  .content.querySelector(".card");

function getCustBenefits(benefit) {
  const newCard = custBenTemplate.cloneNode(true);
  const cardImage = newCard.querySelector(".benefits-box__image");
  const cardTitle = newCard.querySelector(".card__heading");
  const cardDesc = newCard.querySelector(".card__desc");
  cardImage.style.backgroundImage = `url(${benefit.image})`;
  cardTitle.textContent = benefit.title;
  cardDesc.textContent = benefit.desc;
  return newCard;
}

custBenefits.forEach((benefit) => {
  custBenBox.append(getCustBenefits(benefit));
});
