window.onload = function () {
	imgLocation("container","box")

	var imgData={"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}

	window.onscroll = function () {
		if(checkFlag()){
			var cParent = document.getElementById("container");
			for(var i = 0; i < imgData.data.length; i++){
				var cContent = document.createElement("div");
				cContent.className = "box";
				cParent.appendChild(cContent);
				var boximg = document.createElement("div");
				boximg.className = "box_img";
				cContent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "img/" + imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLocation("container","box")
		}
	}
}

function imgLocation(parent , content) {
	//将parent下的所有内容全部取出
	var cParent = document.getElementById(parent);
	var cContent = getChildElement(cParent, content);
	var imgWidth = cContent[0].offsetWidth//得到图片的宽度
	var num = Math.floor(document.documentElement.clientWidth / imgWidth);
	cParent.style.cssText = "width:"+imgWidth*num+"px;margin:0 auto";

	var BoxHeightArr = [];
	for(var i = 0; i < cContent.length; i++){
		if(i < num){
			BoxHeightArr[i] = cContent[i].offsetHeight;
			
		}else{
			 var minHeight = Math.min.apply(null, BoxHeightArr);
			 var minIndex = getMinHeightLocation(BoxHeightArr, minHeight);
			 cContent[i].style.position = "absolute";
			 cContent[i].style.top = minHeight + "px";
			 cContent[i].style.left = cContent[minIndex].offsetLeft + "px";
			 BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+cContent[i].offsetHeight; 
		}
	}
}

function getChildElement(parent, content) {
	var allContent = parent.getElementsByTagName('*');
	var contentArr = [];
	for(var i = 0; i < allContent.length;i++){
		if(allContent[i].className==content)
			contentArr.push(allContent[i]);
	}
	return contentArr;
}

function getMinHeightLocation(BoxHeightArr, minHeight) {
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight)
			return i;
	}
}

function checkFlag() {
	var cParent = document.getElementById("container");
	var cContent = getChildElement(cParent, "box");
	var lastContentHeight = cContent[cContent.length-1].offsetTop;
	console.log(lastContentHeight);
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight < scrollTop + pageHeight){
		return true;
	}
}