const burger = document.querySelector('.burger');
const navmenu = document.querySelector('.nav-menu');
const navright = document.querySelector('.nav-right');
const section = document.querySelector('.section');
const navlist = document.querySelector('.nav-list');
const submenu = document.querySelector('.sub-menu');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


    burger.addEventListener("click",()=>{
    section.classList.toggle('background')  
    burger.classList.toggle('nav-visible');
    navmenu.classList.toggle('nav-position');
   
    navright.classList.toggle('nav-position');

}) 
  navlist.addEventListener("click",()=>{
    submenu.classList.toggle('active');
    one.classList.toggle('active');
   two.classList.toggle('active');
  })
