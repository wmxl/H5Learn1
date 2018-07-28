var ClickMeBtn;

$(document).ready(function () {
	ClickMeBtn = $("#ClickMeBtn");
	ClickMeBtn.click(function () {
		var e = jQuery.Event("MyEvent");
		ClickMeBtn.trigger(e);
	});

	ClickMeBtn.bind("MyEvent", function (event) {
		console.log(event);
	})
	
	
});
