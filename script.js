function scrollto(id) {
  let element = document.getElementById(id);
  element.scrollIntoView();
}


window.onscroll = function() {scroll()};
let initial = document.getElementById('logo').offsetTop;

function scroll() {
  if (window.scrollY >= initial) {
    document.getElementById('logo').style.position = "fixed";
    document.getElementById('logo').style.top = "0";
    document.getElementById('logo').style.fontSize = "36px";
    if (window.scrollY > document.getElementById('contact').offsetTop) {
      document.getElementById('navbar').style.position = "static";
      document.getElementById('navbar').style.flexDirection = "column";
    }
    else {
      document.getElementById('navbar').style.position = "fixed";
      document.getElementById('navbar').style.flexDirection = "row";
    }
  }
  else {
    document.getElementById('logo').style.position = "static";
    document.getElementById('logo').style.fontSize = "72px";
  }
  console.log(document.getElementById('contact').offsetTop);
  console.log(window.scrollY);
}

let slideE = 0;
let slideP = 0;
let slideD = 0;
setInterval(function() {slideEntrees('entrees')}, 2000);
setInterval(function() {slidePlats('plats')}, 2000);
setInterval(function() {slideDesserts('desserts')}, 2000);

function slideEntrees(x) {
    let container = document.getElementById(x).children;
    let i;
    for (i = 0; i < container.length; i++) {
       container[i].style.display = "none";
    }
    slideE++;
    if (slideE > container.length) {slideE = 1}
    container[slideE-1].style.display = "block";
}

function slidePlats(x) {
    let container = document.getElementById(x).children;
    let i;
    for (i = 0; i < container.length; i++) {
       container[i].style.display = "none";
    }
    slideP++;
    if (slideP > container.length) {slideP = 1}
    container[slideP-1].style.display = "block";
}

function slideDesserts(x) {
    let container = document.getElementById(x).children;
    let i;
    for (i = 0; i < container.length; i++) {
       container[i].style.display = "none";
    }
    slideD++;
    if (slideD > container.length) {slideD = 1}
    container[slideD-1].style.display = "block";
}

function onScrollEvent(to_animate, func, number) {
  $(window).scroll(function () {
    if($(window).scrollTop() > to_animate.offset().top - number) {
      setTimeout(func);
    }
  });
}

let child1 = $('.left');
let child2 = $('.right');
function func() {
  child1.addClass('slideInDown');
  child2.addClass('fadeInRight');

}

onScrollEvent(child2, func, 500);
