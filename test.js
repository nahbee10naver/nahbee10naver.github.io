var last_known_scroll_position = 0;
var ticking = false;

var ele = document.getElementById('moving');
var ele2 = document.getElementById('moving2');

function doSomething(scroll_pos) {
  console.log(scroll_pos);
  var hiTop = document.getElementById('hi').getBoundingClientRect().top;
  var hiTop2 = document.getElementById('hi2').getBoundingClientRect().top;
  var hei = window.innerHeight;
  var wid = window.innerWidth;
  var perc = (hiTop/hei)-0.2;
  var perc2 = (hiTop2/hei)-0.2;
  ele.style.left = wid*perc;
  ele2.style.left = wid*perc2;
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