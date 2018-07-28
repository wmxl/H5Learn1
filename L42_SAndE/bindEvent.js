$(document).ready(function () {
	
	// $("#clickMeBtn").click(function () {
	// 	alert("hello")
	// })

	$("#clickMeBtn").bind("click",clickHandler1)
	$("#clickMeBtn").bind("click",clickHandler2)
	$("$clickMeBtn").unbind("click")//接触所有绑定事件
	$("$clickMeBtn").unbind("click",clickHandler2)//接触单个绑定事件
	//上下代码效果一样
	$("#clickMeBtn").on("click",clickHandler1)
	$("#clickMeBtn").on("click",clickHandler2)
	$("$clickMeBtn").off("click")//接触所有绑定事件
	$("$clickMeBtn").off("click",clickHandler2)//接触单个绑定事件

});

function clickHandler1(e) {
	console.log("clickHandler1");
}
function clickHandler2(e) {
	console.log("clickHandler2");
}