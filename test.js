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
var div_arr  = document.getElementsByClassName('wrapper');

function doSomething(scroll_pos) {
  for (var i = 0; i <hi_arr.length; i++) {
	perc[i] = hi_arr[i].getBoundingClientRect().top/hei-0.3;

  };
  for (var i = 0; i <ele_arr.length; i++) {
  	if(perc[i]<=0.5){
  		ele_arr[i].style.display = "inherit";
  		ele_arr[i].style.top = top_val[i] + '%';
  		ele_arr[i].style.left = wid*perc[i];
  	}else{
  		ele_arr[i].style.display = "none";
  	}
		
  };
  for (var i = 0; i <div_arr.length; i++) {
	var div_perc = div_arr[i].getBoundingClientRect().top/hei;
	if(div_perc<0.8){
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