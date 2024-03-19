// header/

const hamManu= document.querySelector('.ham-menu');
const offScreenMenu = document. querySelector('.off-screen-menu');

hamManu.addEventListener('click', () => {
    hamManu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

let divContainer = document.querySelectorAll(".container");

divContainer.forEach((el) => {
  console.log(el); 
  el.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// header-end


// slider

let items = document.querySelectorAll('.slid .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .items')


let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();}

    
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}

    let refreshInterval = setInterval (() => {
        next.click();
    }, 3000)
function showSlider(){
    let itemActiveOld = document.querySelector('.slid .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .items.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval (() => {
        next.click();
    }, 5000)
}
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
// slider END


// login

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


// oas1


