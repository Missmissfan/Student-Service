$(document).ready(function() {

  var owlCarouselMain = function() {
    var owl = $('.owl-carousel-main');

    owl.owlCarousel({
      items:1,
      mouseDrag: true,
      navigation: true,
      autoHeight: true,
      autoPlay: true,
      stopOnHover : true,
      slideSpeed : 500,
      navigationText: [
				"<i class='fa fa-arrow-left' aria-hidden='true'></i>",
				"<i class='fa fa-arrow-right' aria-hidden='true'></i>"
			]
    });
  };

  owlCarouselMain();
});
