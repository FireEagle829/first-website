let menuList = document.querySelector(".menu-list")
let menuButton = document.querySelector(".menu-button")
let menuItem = document.querySelectorAll(".menu-item")
let line2 = document.querySelector(".menu-button_line2")
let line1 = document.querySelector(".menu-button_line1")
let line3 = document.querySelector(".menu-button_line3")
const slideshowContainer = document.querySelector(".slideshow-container")
const slides = document.querySelectorAll(".slide")
const slide1 = document.querySelector(".slide1")
const slide2 = document.querySelector(".slide2")
const slide3 = document.querySelector(".slide3")
const slide4 = document.querySelector(".slide4")
const slide5 = document.querySelector(".slide5")
let counter = 0
let currentSlide = 0
let navBar = document.querySelector("nav")


slide1.style.order = 0
slide2.style.order = 1
slide3.style.order = 2
slide4.style.order = 3
slide5.style.order = 4


menuButton.addEventListener('click', () => {
    menuList.classList.toggle("menu-list-active")
    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle("menu-item-active")
    }
    line2.classList.toggle("menu-button_line2-active")
    line1.classList.toggle("menu-button_line1-active")
    line3.classList.toggle("menu-button_line3-active")
})

window.onscroll = function() {scrollFunction()};

function slide() {
    if (slide1.classList.contains("slide-active")) {
        counter = 1
    }
    else if (slide2.classList.contains("slide-active")) {
        counter = 2
    }
    else if (slide3.classList.contains("slide-active")) {
        counter = 3
    }
    else if (slide4.classList.contains("slide-active")) {
        counter = 4
    }
    else if (slide5.classList.contains("slide-active")) {
        counter = 5
    }

    if (counter === 1) {
        slide1.style.backgroundSize = slide1.clientWidth + "px" + " " + slide1.clientHeight + "px"
        slide1.classList.toggle("slide-active")
        slide2.classList.toggle("slide-active")
        slide2.style.backgroundSize = slideshowContainer.clientWidth + "px" + " " + slideshowContainer.clientHeight + "px"
        if (slide1.style.order == "5") {
            slide1.style.order = 0
            slide2.style.order = 1
            slide3.style.order = 2
            slide4.style.order = 3
            slide5.style.order = 4
        }
    }
    else if (counter === 2) {
        slide2.style.backgroundSize = slide2.clientWidth + "px" + " " + slide2.clientHeight + "px"
        slide2.classList.toggle("slide-active")
        slide3.classList.toggle("slide-active")
        slide3.style.backgroundSize = slideshowContainer.clientWidth + "px" + " " + slideshowContainer.clientHeight + "px"
    }
    else if (counter === 3) {
        slide3.style.backgroundSize = slide3.clientWidth + "px" + " " + slide3.clientHeight + "px"
        slide3.classList.toggle("slide-active")
        slide4.classList.toggle("slide-active")
        slide4.style.backgroundSize = slideshowContainer.clientWidth + "px" + " " + slideshowContainer.clientHeight + "px"
    }
    else if (counter === 4) {
        slide4.style.backgroundSize = slide4.clientWidth + "px" + " " + slide4.clientHeight + "px"
        slide4.classList.toggle("slide-active")
        slide5.classList.toggle("slide-active")
        slide5.style.backgroundSize = slideshowContainer.clientWidth + "px" + " " + slideshowContainer.clientHeight + "px"
    }
    else if (counter === 5) {
        slide5.style.backgroundSize = slide5.clientWidth + "px" + " " + slide5.clientHeight + "px"
        slide5.classList.toggle("slide-active")
        slide1.classList.toggle("slide-active")
        slide1.style.backgroundSize = slideshowContainer.clientWidth + "px" + " " + slideshowContainer.clientHeight + "px"
    }
}


function reset() {
    if (currentSlide === 0) {
        slide1.style.order += 5
        currentSlide++;
        return;
    }

    else if (currentSlide === 1) {
        slide2.style.order += 5
        currentSlide++;
        return;
    }

    else if (currentSlide === 2) {
        slide3.style.order += 5
        currentSlide++;
        return;
    }

    else if (currentSlide === 3) {
        slide4.style.order += 5
        currentSlide++;
        return;
    }

    else if (currentSlide === 4) {
        currentSlide = 5;
        slide5.style.order += 5
        return;
    }
    else {
        currentSlide = 0;
        return;
    }
}


function scrollFunction() {
    // navbar
    if ((document.body.scrollTop > 80 && document.body.scrollTop < 700) || (document.documentElement.scrollTop > 80 && document.documentElement.scrollTop < 700)) {
        navBar.style.backgroundColor = "transparent"
        document.querySelector(".branding").style.color = "white"
    }
    else {
        navBar.style.backgroundColor = "aqua"
        document.querySelector(".branding").style.color = "black"
    }


    // slides
    var introSpecs = document.querySelector('.intro-specs');
    var bounding = introSpecs.getBoundingClientRect();
    if (bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.top >= 0) {
        document.querySelector(".intro-specs").style.transform = "translateX(0px)"
    }
    else {
        document.querySelector(".intro-specs").style.transform = "translateX(100vw)"
    }

    // boxes
    let boxes = document.querySelector(".boxes")
    let boxesBounding = boxes.getBoundingClientRect()
    if (boxesBounding.bottom - 200 <= (window.innerHeight || document.documentElement.clientHeight) && boxesBounding.top >= 0) {
        boxes.style.transform = "rotate(0deg)"
    }
    else {
        boxes.style.transform = "rotate(180deg)"
    }

    // tablet
    let tablet = document.querySelector(".features-tablet")
    let tabletBounding = tablet.getBoundingClientRect()

    if (tabletBounding.bottom - 200 <= (window.innerHeight || document.documentElement.clientHeight)) {
        tablet.style.transform = "translateY(50px)"
    }
    else {
        tablet.style.transform = "translateY(0px)"
    }
    
    if (tabletBounding.top <= -100) {
        tablet.style.transform = "translateY(-50px)"
    }


    // tablet 2
    let tablet2 = document.querySelector(".tablet2")
    let tablet2Bounding = tablet2.getBoundingClientRect()

    if (tablet2Bounding.bottom - 200 <= (window.innerHeight || document.documentElement.clientHeight)) {
        tablet2.style.opacity = 1
        tablet2.style.transform = "translateX(0px)"
    }
    else {
        tablet2.style.opacity = 0
        tablet2.style.transform = "translateX(-200px)"
    }
    if (tablet2Bounding.top <= -100) {
        tablet2.style.opacity = 0
        tablet2.style.transform = "translateX(-200px)"
    }


    // work-features_description
    let box = document.querySelector(".work-features_description")
    let boxBounding = box.getBoundingClientRect()

    if (boxBounding.bottom - 200 <= (window.innerHeight || document.documentElement.clientHeight)) {
        box.style.transform = "translate(0px, 0px)"
        box.style.opacity = 1
    }
    else {
        box.style.transform = "translate(100px, -100px)"
        box.style.opacity = 0
    }
}


setInterval(slide, 5000)
for (var i = 0; i < slides.length; i++) {
    if (i % 2 === 0){
    slides[i].addEventListener("transitionend", reset)
    }
}
