var num = 0;
var txt = 0;
var bnt;

window.onload = function () {
	txt = document.getElementById('txt');
	addbtn = document.getElementById('addbtn');

	if(sessionStorage.num){
		txt.innerHTML = sessionStorage.num;
	}

	addbtn.onclick = function(){
		num++;
		showNum(); 
		sessionStorage.num = num;
	}
}

function showNum() {
	txt.innerHTML = num;
}