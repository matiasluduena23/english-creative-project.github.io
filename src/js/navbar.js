
const hamburger = document.querySelector('.toggle');
const navbar = document.querySelector('.nav-list');


hamburger.addEventListener('click', function(){
  navbar.classList.toggle('nav-list-active');
  hamburger.classList.toggle('active');
  
})

document.querySelectoAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navbar.classList.remove('active');
}));