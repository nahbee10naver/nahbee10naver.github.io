var bgColorArray = ['../img/journey/jongro.jpg','../img/journey/jongno_2.jpg','../img/journey/jongno_3.jpg','../img/journey/bongcheon_1.jpg','../img/journey/bongcheon_2.jpg','../img/journey/sangam_1.jpg'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

$('.codrops-header').css('background-image', 'url(' + selectBG + ')')
