//side navegation toggler
const hamburger = document.querySelector('.toggle');
const navlist = document.querySelector('.nav-list');
const navlink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', function(){
  navlist.classList.toggle('nav-list-active');
  hamburger.classList.toggle('active');
  
})

navlink.forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navlist.classList.remove('nav-list-active');
}));


//scroll effect navegation
const navbar = document.querySelector('#navbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries)=> {
  navbar.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);
