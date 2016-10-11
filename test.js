var last_known_scroll_position = 0;
var ticking = false;

var ele_arr = document.getElementsByClassName('thing');
var hi_arr = document.getElementsByClassName('hi');
var gu = document.getElementById('gu');
var dong = document.getElementById('dong');

var perc = [];
var top_val = [];
var hei = window.innerHeight;
var wid = window.innerWidth;

for (var i = 0; i <ele_arr.length; i++) {
	top_val[i] = 50+Math.random()*17;
};

var wor_list_l = ["소개","방법"];
var wor_list_r = ["소개","방법"];
var trail_perc = [0.22,0.31,0.44,0.53,0.7,0.9,1.0];
var div_arr  = document.getElementsByClassName('wrapper');

var path6 = document.querySelector('#sixth-trail-path');
var length6 = path6.getTotalLength();

// Clear any previous transition
path.style.transition = path.style.WebkitTransition =
  'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();

function doSomething(scroll_pos) {
  for (var i = 0; i <hi_arr.length; i++) {
	perc[i] = hi_arr[i].getBoundingClientRect().top/hei-0.2;
	
  };
  for (var i = 0; i <ele_arr.length; i++) {
  	if(perc[i]<=0.5){
  		ele_arr[i].style.display = "inherit";
  		ele_arr[i].style.top = top_val[i] + '%';
  		ele_arr[i].style.left = wid*perc[i];
		gu.innerHTML = hi_arr[i].dataset.gu;
		dong.innerHTML = hi_arr[i].dataset.dong;
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s ease-in-out';
		// Go!
		path.style.strokeDashoffset = length*(10-i)*0.1;
  	}else{
  		ele_arr[i].style.display = "none";
  	}
		
  };
  for (var i = 0; i <div_arr.length; i++) {
	var div_perc = div_arr[i].getBoundingClientRect().top/hei;
	if(div_perc<0.8 && div_perc >=0){
		gu.innerHTML=wor_list_l[i];
		dong.innerHTML=wor_list_r[i];
	}

  };

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

