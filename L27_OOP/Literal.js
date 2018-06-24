
// var person={
// 	name: "iwen",
// 	age: 30,
// 	eat: function(){
// 		alert("能吃");
// 	}
// }

// alert(person.name);

function Person()() {
	// body...
}

Person.prototype ={
	name:"Tony",
	age:30,
	eat:function(){
		alert("I am eating!")
	}
}
var p = new Person();
p.age
p.name
p.eat