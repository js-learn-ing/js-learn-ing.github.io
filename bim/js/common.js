$(function(){
	var navBtn = $("#navBtn"),bar = $(".nav_bar");
	var bol = false,isc = false;
	navBtn.on("click",function(){
		bar.slideToggle("slow");
	})
	var toTop = $("#top"),body = $("html,body");
	toTop.on("click",function(){
		body.stop().animate({
			scrollTop :0
		}, 800)
		return false;
	})
	// $(window).resize(function() {
	// 	if ($(window).width >) {
	//  		bar.css("display","block")
	// 	}else{
	//  		bar.css("display","none")
	// 	}
	// });
})