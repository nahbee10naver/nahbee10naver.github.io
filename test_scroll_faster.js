var last_known_scroll_position = 0;
var ticking = false;

var ele_arr = document.getElementsByClassName('thing');
var hi_arr = document.getElementsByClassName('hi');
var boxes = document.getElementsByClassName('box');
var icon_divs = document.getElementsByClassName('icon_div');
var gu = document.getElementById('gu');
var dong = document.getElementById('dong');
//var first_bg = document.getElementById('bg_nh_1');
var ch_box = document.getElementById('checking_box');

//var bgimgs = document.getElementsByClassName('bg_img');

var perc = [];
var top_val = [];
var hei = window.innerHeight;
var wid = window.innerWidth;

for (var i = 0; i <ele_arr.length; i++) {
	top_val[i] = 50+Math.random()*17;
};

for (var i = 0; i < icon_divs.length; i++) {
	console.log(icon_divs[i].getBoundingClientRect().top);
};

var wor_list_l = ["소개","방법"];
var wor_list_r = ["소개","방법"];
var trail_perc = [0.0,0.22,0.31,0.44,0.53,0.7,0.8,0.9,1.0];
var div_arr  = document.getElementsByClassName('wrapper');

var path = document.querySelector('#sixth-trail-path');
var length = path.getTotalLength();

//var jongno = document.querySelector('#jongno');

var ani_id_arr = ["jongno_a","mapo_a","yeongdeung_a","dongjak_a","gwanak_a","seocho_a","gangnam_a","songpa_a","gangdong_a"];
var ani_arr = [];

var gu_name = ["jongno","mapo","yeongdeung","dongjak","gwanak","seocho","gangnam","songpa","gangdong"];

for (var i = 0; i<ani_id_arr.length; i++) {
	ani_arr[i] = document.getElementById(ani_id_arr[i]);
	ani_arr[i].setAttribute('end','indefinite');
	ani_arr[i].setAttribute('begin','indefinite');
	//ani_arr[i].endElement();

};

// Clear any previous transition
path.style.transition = path.style.WebkitTransition =
  'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();

function ani_mani(n){
	ani_arr[n-2].setAttribute('dur','0');
    ani_arr[n-2].setAttribute('repeatCount','0');
    ani_arr[n-2].endElement();
    ani_arr[n-1].setAttribute('dur','500ms');
    ani_arr[n-1].setAttribute('repeatCount','indefinite');
    ani_arr[n-1].beginElement();
}

var first_ad_on = false;
var second_ad_on = false;
var third_ad_on = false;
var fourth_ad_on = false;

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  var proportion = last_known_scroll_position/document.body.scrollHeight;
  if(!first_ad_on && (proportion > 0.07)){
  	console.log("first ad");
  	document.getElementById('first_ad').style.display="inherit";
  	first_ad_on = true;
  }else if(!second_ad_on && (proportion > 0.23)){
  	document.getElementById('second_ad').style.display="inherit";
  	second_ad_on = true;
  }else if(!third_ad_on && (proportion > 0.76)){
  	document.getElementById('third_ad').style.display="inherit";
  	third_ad_on = true;
  }else if(!fourth_ad_on && (proportion > 0.87)){
  	document.getElementById('fourth_ad').style.display="inherit";
  	fourth_ad_on = true;
  }

  if (!ticking) {
    window.requestAnimationFrame(function() {
      //doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;

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
		var appliedPerc = 0;
		var i_num;
		switch (hi_arr[i].dataset.gu) {
		  case "종로구":
		    appliedPerc = 1 - trail_perc[0];
		    i_num = 1;
		    ani_arr[0].setAttribute('dur','500ms');
    		ani_arr[0].setAttribute('repeatCount','indefinite');
		    ani_arr[0].beginElement();
		    //first_bg.style.display = 'none';
		    break;
		  case "마포구":
		    appliedPerc = 1 - trail_perc[1];
		    i_num = 2;
		    //ani_arr[1].setAttribute('begin','0.1s');
		    break;
		  case "영등포구":
		    appliedPerc = 1 - trail_perc[2];
		    i_num = 3;
		    //ani_arr[1].endElement();
		    break;
		  case "동작구":
		    appliedPerc = 1 - trail_perc[3];
		    i_num = 4;
		    break;
		  case "관악구":
		    appliedPerc = 1 - trail_perc[4];
		    i_num = 5;
		    //ani_arr[3].endElement();
		    break;
	  	  case "서초구":
		    appliedPerc = 1 - trail_perc[5];
		    i_num = 6;
		    //ani_arr[4].endElement();
		    break;
		  case "강남구":
		    appliedPerc = 1 - trail_perc[6];
		    i_num = 7;
		    //ani_arr[4].endElement();
		    break;
		  case "송파구":
		    appliedPerc = 1 - trail_perc[7];
		    i_num = 8;
		    //ani_arr[5].endElement();
		    break;
		  case "강동구":
		    appliedPerc = 1 - trail_perc[8];
		    i_num = 9;
		    //ani_arr[6].endElement();
		    break;
		}
		path.style.strokeDashoffset = length*appliedPerc;

		for (var t = 0; t <i_num; t++) {
			document.getElementById(gu_name[t]).style.display="inherit";
		};
		if(i_num<9){
			for (var p = i_num; p<9; p++) {
				document.getElementById(gu_name[p]).style.display="none";
			};
		}

		if(i_num>1){
			ani_mani(i_num);
		}
		
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
  if(last_known_scroll_position > (document.body.scrollHeight)*0.9){
  	ani_arr[8].endElement();
  }else if(last_known_scroll_position < (document.body.scrollHeight)*0.02){
  	for (var p = 0; p<9; p++) {
		document.getElementById(gu_name[p]).style.display="none";
	};
  }

});


$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});

function buttonFunc(btn){
	if(btn == 'first'){
		document.getElementById('first_ad').style.display="none";
	}else if(btn == 'second'){
		document.getElementById('second_ad').style.display="none";
	}else if(btn == 'third'){
		document.getElementById('third_ad').style.display="none";
	}else if(btn == 'fourth'){
		document.getElementById('fourth_ad').style.display="none";
	}

}

$(document).ready(function() {
	var offset = 800;
	var duration = 300;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
 			$('.back-to-top').fadeOut(duration);
		}
	});
 
	$('.back-to-top').click(function(event) {
		event.preventDefault();
 		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});


var mq = window.matchMedia( "(max-width: 600px)" );
if (mq.matches) {
	document.getElementById("bg_img_as_div").src="img/bg_m_l.png";
	document.getElementById("bg_img_as_div").style.height="inherit";
}


