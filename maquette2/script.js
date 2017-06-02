// let $child = $('.left');
//
// $child.waypoint(function(){
//   console.log("waypoint");
//   $child.addClass('fadeInLeft');
// }, {offset:'50%'});

// function onScrollEvent(to_animate, func) {
//   let on_scroll = function() {
//     if($(window).scrollTop() > to_animate.element.offset().top - to_animate.offset) {
//       setTimeout(func);
//     }
//   }
//   $(window).scroll(on_scroll);
//   on_scroll();
// }

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

// let makeCallback = function(child) {
//   return function () {
//     child.element.addClass('slideInDown');
//   };
// };
//
// let child1 = {
//   element: $('.left'),
//   offset: 100
// };
// child1.callback = makeCallback(child1);
//
// onScrollEvent(child1);



// let makeCallback2 = function(child2) {
//   return function () {
//     child2.element2.addClass('fadeInRight');
//   };
// };
//
// let child2 = {
//   element2: $('.right'),
//   offset: 100
// };
// child2.callback = makeCallback2(child2);
//
// onScrollEvent(child2);
