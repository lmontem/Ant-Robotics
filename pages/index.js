import { team } from "../configs/team.js";
import {gallery} from "../configs/gallery.js";

//gallery buttons
const galleryNextBtn = document.querySelector('.gallery__next-btn');
const galleryPreviousBtn = document.querySelector('.gallery__previous-btn');
const galleryImage = document.querySelector('.gallery__image');
const galleryCaption = document.querySelector('.gallery__caption');
//next button logic
let currentImage = 0;
galleryNextBtn.addEventListener('click', ()=>{
    if(currentImage < gallery.length -1){        
        currentImage++;
        galleryImage.style.backgroundImage = `url(${Object.values(gallery)[currentImage].image})`;              
        galleryCaption.textContent = Object.values(gallery)[currentImage].caption
    }

})
//previous button logic
galleryPreviousBtn.addEventListener('click',()=>{
    if( currentImage >=1){
        currentImage--;
        galleryImage.style.backgroundImage = `url(${Object.values(gallery)[currentImage].image})`;              
        galleryCaption.textContent = Object.values(gallery)[currentImage].caption
    }
})

//team constants
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

