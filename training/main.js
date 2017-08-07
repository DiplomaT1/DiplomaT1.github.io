$(window).scroll(function() {
	var st = $(this).scrollTop();

	$(".header_text").css({
		"transform" : "translate(0%," + st/3 +"%"
	});
	$(".sect_2").css({
		"transform" : "translate(0%," + st/25 +"%"
	});
	$(".middle").css({
		"transform" : "translate(0%," + st/2.5 +"%"
	});
});

