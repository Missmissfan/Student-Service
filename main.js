
var fullHeight = function() {
  $('.screen-height').css('height', $(window).height());
	$(window).resize(function(){
	$('.screen-height').css('height', $(window).height());})
};

$(function(){
  fullHeight();
});
