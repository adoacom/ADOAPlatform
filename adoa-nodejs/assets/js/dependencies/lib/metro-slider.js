// JavaScript Document
/* Metro Slider.
   Used: index.html, index-portolio.html */

/* Metro Slider Variable Setting */
var iFrequency = 5000; // slide movement period expressed in miliseconds
var movement = 2; // how many movement/transition
var pauseOnHover = 1; // 1 = Pause on Hover, 0 = Not Pause on Hover


var iDo=0;
var myInterval;
var target =  $(".ad_metro-wrapper");
var run=false;

$(window).resize(function(){
	metro_slider(); /*Do Metro Slider */
});

function metro_slider(){
	var metroSlider = 0;
	$('.ad_metro-slider ul li').each(function(){
			var slide_width= $(this).width();
			if ($(this).hasClass('odd')){
				metroSlider = metroSlider + slide_width + 5;

			} else if ($(this).hasClass('even')){
				metroSlider = metroSlider + slide_width +5 ;
			}
	});
	metroSlider+=5;
	$('.ad_metro-slider').css('width', metroSlider + 'px');
	var padding=400;
	var scrollwidth=$('#works').width()-padding;

	$('html.no-touch .ad_metro-wrapper').tinyscrollbar({
		axis: 'x',
		size: scrollwidth,
		sizethumb: 'auto',
		invertscroll: true,
		scroll: false
	});
	$('html.touch .ad_metro-wrapper .viewport').css({
		'width': $(window).innerWidth()+'px',
		'overflow-x' :'scroll',
	});
	$('html.touch .ad_metro-wrapper .scrollbar').hide();
}


