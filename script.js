function scrollto(id) {
  let element = document.getElementById(id);
  element.scrollIntoView();
}

let slideIndex = 0;
setInterval(function() {slideEntrees('entrees')}, 4000);
setInterval(function() {slidePlats('plats')}, 6000);
setInterval(function() {slideDesserts('desserts')}, 8000);

function slideEntrees(x) {
    let container = document.getElementById(x).children;
    let i;
    for (i = 0; i < container.length; i++) {
       container[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > container.length) {slideIndex = 1}
    container[slideIndex-1].style.display = "block";
}

function slidePlats(x) {
    let container = document.getElementById(x).children;
    let i;
    for (i = 0; i < container.length; i++) {
       container[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > container.length) {slideIndex = 1}
    container[slideIndex-1].style.display = "block";
}

function slideDesserts(x) {
    let container = document.getElementById(x).children;
    let i;
    for (i = 0; i < container.length; i++) {
       container[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > container.length) {slideIndex = 1}
    container[slideIndex-1].style.display = "block";
}
