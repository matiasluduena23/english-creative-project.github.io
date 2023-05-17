import './styles/main.scss';

import './js/navbar';

//insert logo navbar
import logoImg from './assets/logo.png';
const logo = document.querySelector('.logo-img');
logo.src = logoImg;
//insert log contact
import logoImgContact from './assets/2.png';
const contactLogo = document.querySelector('.contact-logo');
contactLogo.src = logoImgContact;

//testimonials images
import cardImg1 from './assets/card1.jpg';
const cardTestimonial1 = document.querySelector('.card-img-1');
cardTestimonial1.src = cardImg1;
import cardImg2 from './assets/card2.jpg';
const cardTestimonial2 = document.querySelector('.card-img-2');
cardTestimonial2.src = cardImg2;
import cardImg3 from './assets/card3.jpg';
const cardTestimonial3 = document.querySelector('.card-img-3');
cardTestimonial3.src = cardImg3;



import videoImg from './assets/videoImg.jpg';
const imgVideo = document.querySelector('.video-img');
imgVideo.src = videoImg;



