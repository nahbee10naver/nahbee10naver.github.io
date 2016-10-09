var $dipper = $('.thing');

$dipper.waypoint(function (direction) {
  console.log("nahee nahee");
  /*if (direction == 'down') {
    $dipper.addClass('js-dipper-animate');
  } else {
    $dipper.removeClass('js-dipper-animate');
  }*/
}, { offset: '50%' });