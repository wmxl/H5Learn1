$(document).ready(function(){
	$('#button').click(function(){
//		$("p").hide(1000);

//		$("p").hide(1000,function(){
//			alert("animation is over ... this method is \"callback\" !")
//		})
		
		$("p").css("color","red").slideUp(1000).slideDown(1000);
	});
});
