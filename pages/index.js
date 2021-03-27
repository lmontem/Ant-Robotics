import { team } from "../configs/team.js";
import {gallery} from "../configs/gallery.js";
import {products} from "../configs/products.js";

//product buttons
const productNextBtn = document.querySelector('.product__next-btn');
const productPreviousBtn = document.querySelector('.product__previous-btn');
const getMoreInfoBtn = document.querySelector('.product__info-btn');
//product elements
const productImage = document.querySelector('.product__image');
const productHeading = document.querySelector('.product__heading');

let productCurrentImage = 0;
//product next button logic
productNextBtn.addEventListener('click', ()=>{
    if(productCurrentImage < products.length -1){        
        productCurrentImage++;
        productImage.src = Object.values(products)[productCurrentImage].image;              
        productHeading.textContent = Object.values(products)[productCurrentImage].heading;
        document.querySelector('.max-payload').textContent = Object.values(products)[productCurrentImage].maxpayload;
        document.querySelector('.size').textContent = Object.values(products)[productCurrentImage].size;
        document.querySelector('.max-speed').textContent = Object.values(products)[productCurrentImage].maxspeed;
        document.querySelector('.running-time').textContent = Object.values(products)[productCurrentImage].runningtime;
        document.querySelector('.charging-time').textContent = Object.values(products)[productCurrentImage].chargingtime;
    }
    else{
        productCurrentImage = 0;
        productImage.src = Object.values(products)[productCurrentImage].image;              
        productHeading.textContent = Object.values(products)[productCurrentImage].heading;
        document.querySelector('.max-payload').textContent = Object.values(products)[productCurrentImage].maxpayload;
        document.querySelector('.size').textContent = Object.values(products)[productCurrentImage].size;
        document.querySelector('.max-speed').textContent = Object.values(products)[productCurrentImage].maxspeed;
        document.querySelector('.running-time').textContent = Object.values(products)[productCurrentImage].runningtime;
        document.querySelector('.charging-time').textContent = Object.values(products)[productCurrentImage].chargingtime;
    }
})
//product previous button logic
productPreviousBtn.addEventListener('click',()=>{
    if( productCurrentImage >=1){
        productCurrentImage--;
       productImage.src = Object.values(products)[productCurrentImage].image;
        productHeading.textContent = Object.values(products)[productCurrentImage].heading;
        document.querySelector('.max-payload').textContent = Object.values(products)[productCurrentImage].maxpayload;
        document.querySelector('.size').textContent = Object.values(products)[productCurrentImage].size;
        document.querySelector('.max-speed').textContent = Object.values(products)[productCurrentImage].maxspeed;
        document.querySelector('.running-time').textContent = Object.values(products)[productCurrentImage].runningtime;
        document.querySelector('.charging-time').textContent = Object.values(products)[productCurrentImage].chargingtime;
    }else{
        productCurrentImage = products.length -1;
        productImage.src = Object.values(products)[productCurrentImage].image;              
        productHeading.textContent = Object.values(products)[productCurrentImage].heading;
        document.querySelector('.max-payload').textContent = Object.values(products)[productCurrentImage].maxpayload;
        document.querySelector('.size').textContent = Object.values(products)[productCurrentImage].size;
        document.querySelector('.max-speed').textContent = Object.values(products)[productCurrentImage].maxspeed;
        document.querySelector('.running-time').textContent = Object.values(products)[productCurrentImage].runningtime;
        document.querySelector('.charging-time').textContent = Object.values(products)[productCurrentImage].chargingtime;
    }
})

//gallery buttons
const galleryNextBtn = document.querySelector('.gallery__next-btn');
const galleryPreviousBtn = document.querySelector('.gallery__previous-btn');
//gallery elements
const galleryImage = document.querySelector('.gallery__image');
const galleryCaption = document.querySelector('.gallery__caption');
//next button logic
let currentImage = 0;
galleryNextBtn.addEventListener('click', ()=>{
    if(currentImage < gallery.length -1){        
        currentImage++;
        galleryImage.style.backgroundImage = `url(${Object.values(gallery)[currentImage].image})`;              
        galleryCaption.textContent = Object.values(gallery)[currentImage].caption
    }else{
        currentImage = 0;
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
    }else{
        currentImage = gallery.length -1;
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
