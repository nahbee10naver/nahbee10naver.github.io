var last_known_scroll_position = 0;
var ticking = false;

var ele = document.getElementById('moving');

function doSomething(scroll_pos) {
  console.log(scroll_pos);
  var hiTop = document.getElementById('hi').getBoundingClientRect().top;
  var hei = window.innerHeight;
  var wid = window.innerWidth;
  var perc = hiTop/hei;
  ele.style.left = wid*perc;
  console.log(perc);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});