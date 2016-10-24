$(document).ready(function(){
	
	// 사이버 참배 탭
	$(".subTab > strong > a").bind({
		click : function(){
			return false;
		},
		mouseenter : function(){
			var actSrc = $(this).find("img").attr("src");
			var actUl = $(this).parent("strong").next("ul");
			$(".actView").find("img").attr("src",$(".actView").find("img").attr("src").replace("_on","_off"));
			$(".actView").removeClass("actView");
			$(".subTab ul").hide();
			$(this).find("img").attr("src",actSrc.replace("_off","_on"));
			$(this).addClass("actView");
			actUl.show();
		}
	});

	$(".subTab ul a").click(function(){
		var $tCls = $(this).attr("class");
		var $tClsNo = $tCls.charAt(2);
		if($tCls != "ti4_1"){
			$(".ti"+$tClsNo).hide();
			$(".tabImg").find("."+$tCls).show();
			if($tCls == "ti3_1"){
				$.smogView();
			}
		}
		return false;
	});

	$.extend({
		smogView:function(){
			var autoSmg = setInterval(function(){
				$(".smg").show();
				$(".smg").animate({
					"bottom":"95px"
				},function(){
					$(this).css({
						"bottom":"70px",
						"opacity":1
					});
					$(this).hide();
				});
			},2000);
		}
	});
	
	// 사용자 인증 탭
	$(".ipBox > strong > a").click(function(){
		var idx = $(this).parent("strong").attr("class").charAt(2);
		var actImg = $(this).find("img");
		for(var i=1; i<3; i++){
			$(".ip"+i).find("img").attr("src",$(".ip"+i).find("img").attr("src").replace("_on","_off"));
		}
		actImg.attr("src",actImg.attr("src").replace("_off","_on"));
		$(".ipCon").hide();
		$("#ipCon"+idx).show();
		return false;
	});
	
	$(".idBox > strong > a").click(function(){
		var idx = $(this).parent("strong").attr("class").charAt(2);
		var actImg = $(this).find("img");
		for(var i=1; i<3; i++){
			$(".id"+i).find("img").attr("src",$(".id"+i).find("img").attr("src").replace("_on","_off"));
		}
		actImg.attr("src",actImg.attr("src").replace("_off","_on"));
		$(".idCon").hide();
		$("#idCon"+idx).show();
		return false;
	});
	
	// QNA
	$(".qnaQ a").click(function(){
		$(".qnaA").hide();
		$(this).parents(".qnaQ").next(".qnaA").slideDown();
		return false;
	});
	
	$("#popWrap #close").click(function(){
		self.close();
	});
	
	$(".picSlide a").click(function(){
		var oImg = $(this).attr("href");
		if(oImg != "#"){
			$(".bigPic a").attr("href",oImg);
			$(".bigPic img").attr("src",oImg);
		}
		return false;
	});
	
	$(".bigPic a").click(function(){
		var aSrc = $(this).attr("href").split("/");
		var aSrcResult = aSrc[6].replace(".gif",".jpg");
		window.open("/mbshome/mbs/snmb/html/bigImg.html?imgName="+aSrcResult,"bigImage","width=300,height=300");
		return false;
	});
	
	/* 사이버투어 팝업 네비 */
	$.extend({
		popNavi:function(d1,d2){
			$("#tourNavi").html("\
				<ul>\
					<li><a href='/mbshome/mbs/snmb/html/pop_tour1_1.html' id='lnb1'>주요 묘역</a>\
						<ul id='lnbUl1'>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_1.html' id='lnb1_1'>국가원수묘소</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_2.html' id='lnb1_2'>임시정부요인묘역</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_3.html' id='lnb1_3'>애국지사묘역</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_4.html' id='lnb1_4'>무후선열제단</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_5.html' id='lnb1_5'>국가유공자묘역</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_6.html' id='lnb1_6'>장군묘역</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_7.html' id='lnb1_7'>장병묘역</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_8.html' id='lnb1_8'>경찰관묘역</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour1_9.html' id='lnb1_9'>외국인묘소</a></li>\
						</ul>\
					</li>\
					<li><a href='/mbshome/mbs/snmb/html/pop_tour2_1.html' id='lnb2'>가볼만한 묘</a>\
						<ul id='lnbUl2'>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour2_1.html' id='lnb2_1'>동쪽 호국탐방길</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour2_2.html' id='lnb2_2'>서쪽 호국탐방길</a></li>\
						</ul>\
					</li>\
					<li><a href='/mbshome/mbs/snmb/html/pop_tour3_1.html' id='lnb3'>주요 현충시설</a>\
						<ul id='lnbUl3'>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_1.html' id='lnb3_1'>현충문/현충탑</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_2.html' id='lnb3_2'>학도의용군무명용사탑</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_3.html' id='lnb3_3'>대한독립군무명용사위령탑</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_4.html' id='lnb3_4'>재일학도의용군전몰용사위령비 </a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_5.html' id='lnb3_5'>충열대</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_6.html' id='lnb3_6'>경찰충혼탑</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_7.html' id='lnb3_7'>육탄10용사현충비</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_8.html' id='lnb3_8'>유격부대전적위령비</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_9.html' id='lnb3_9'>충혼당</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_10.html' id='lnb3_10'>위패봉안관</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_11.html' id='lnb3_11'>영현봉안관</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_12.html' id='lnb3_12'>현충관</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour3_13.html' id='lnb3_13'>사진전시관/유품전시관</a></li>\
						</ul>\
					</li>\
					<li><a href='/mbshome/mbs/snmb/html/pop_tour4_1.html' id='lnb4'>편의 · 업무시설</a>\
						<ul id='lnbUl4'>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour4_1.html' id='lnb4_1'>관리사무소</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour4_2.html' id='lnb4_2'>종합민원실(수유실)</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour4_3.html' id='lnb4_3'>만남의 집(매점, 꽃집)</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour4_4.html' id='lnb4_4'>주요 주차장</a></li>\
							<li><a href='/mbshome/mbs/snmb/html/pop_tour4_5.html' id='lnb4_5'>정자(야외)</a></li>\
						</ul>\
					</li>\
					<li><a href='/mbshome/mbs/snmb/html/pop_tour5.html' id='lnb5'>산책길</a></li>\
					<li><a href='/mbshome/mbs/snmb/html/pop_tour6.html' id='lnb6'>전망좋은 곳</a></li>\
				</ul>\
			");
			if(d1 <= 4){
				$("#lnbUl"+d1).addClass("lOn");
			}
			if(d2 != 0){
				$("#lnb"+d1+"_"+d2).addClass("tOn");
			}
		}
	});
		
});

