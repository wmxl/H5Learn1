
var box1Div, msgDiv;

window.onload = function(){
    box1Div = document.getElementById("box1");
    msgDiv = document.getElementById("msg");

    box1Div.ondragenter = function(e){
        showObj(e);
    }
}

function showObj(obj){
    var s = "";
    for(var k in obj)
    {
        s+=k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML = s;
}