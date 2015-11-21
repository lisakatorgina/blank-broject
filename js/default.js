$(document).ready(function() {
	$(".main-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		slideSpeed: 500,
		afterInit: function(){
			$('.main-slider').find('video').get(0).play();
		}
	});
});
$(function(){

})