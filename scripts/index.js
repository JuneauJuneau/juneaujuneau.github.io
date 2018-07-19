
"use strict"

let SLIDEINDEX = 0;

showSlides(SLIDEINDEX)


function showSlides(index) {
    // slides html and dots
    let slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot-navigation');

    if (index >= slides.length) SLIDEINDEX = 0;
    if (index < 0) SLIDEINDEX = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }
    slides[SLIDEINDEX].style.display = "block";
    dots[SLIDEINDEX].classList.add("active-dot");

}

document.querySelector("#arrow-prev").addEventListener('click', function () {
    showSlides(--SLIDEINDEX);
})
document.querySelector("#arrow-next").addEventListener('click', function () {
    showSlides(++SLIDEINDEX);
})
document.querySelectorAll('.dot-navigation').forEach(function (elem) {
    elem.addEventListener('click', function () {
        let nodes = Array.prototype.slice.call(this.parentElement.children),
            dotIndex = nodes.indexOf(elem);
        showSlides(SLIDEINDEX = dotIndex)
    })
})
  setInterval(function(){showSlides(++SLIDEINDEX)}, 10000);
