$(window).on("scroll", function(){
	var y = $(window).scrollTop();
	if(y>=10){
		addFitMenu();
	}else{
		removeFitMenu();
	}
});

function addFitMenu(){
	$("#home").addClass('menu-active');
}

function removeFitMenu(){
	$("#home").removeClass('menu-active');
}