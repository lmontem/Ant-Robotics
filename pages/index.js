import { team } from "../configs/team.js";

const cardTemplate = document.querySelector('.card-template').content.querySelector('.team__card');
const teamCards = document.querySelector('.team__cards');

//function to get info from team config
function teamMembers(member) {
    const cardElem = cardTemplate.cloneNode(true);
    const name = cardElem.querySelector('.team__name');
    const position = cardElem.querySelector('.team__position');
    const description = cardElem.querySelector('.team__description');
    const avatar = cardElem.querySelector('.team__avatar');   
    avatar.style.backgroundImage = `url(${member.image})`;
    name.textContent = member.name;
    position.textContent = member.position;
    description.textContent = member.description;
    return cardElem;
}

//appends team config info to page
team.forEach(item => {
    teamCards.append(teamMembers(item));
})