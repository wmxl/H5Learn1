
var CANVAS_WIDTH = 500,  CANVAS_HEIGHT = 500;

window.onload = function(){
	createCanvas();
	// drawRect();
	drawImage()
}
function createCanvas(){
	document.body.innerHTML = "<canvas id=\"mycanvas\" width=\""+CANVAS_WIDTH+"\" height=\""+CANVAS_HEIGHT+"\"></canvas>"
	mycanvas = document.getElementById('mycanvas');
	content = mycanvas.getContext("2d");
	
} 

function drawRect() {
	content.fillStyle = "#ff0000"
	// content.rotate(45);
	// content.translate(200,200);
	content.scale(2,0.5);
	content.fillRect(0,0,300,300);
	
}

function drawImage() {
	var img = new Image();
	img.onload = function () {
		content.drawImage(img,0,0);
	}
	img.src="1.jpg";
}