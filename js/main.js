$( document ).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

$( window ).scroll(function(){
	if ($(window).scrollTop()>70) {
		$("nav").css("background-color", "black");
	} else {
		$("nav").css("background-color", "transparent");
	}
});

$('.link').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 100
	}, 3000, "easeInOutExpo");

	e.preventDefault();

});